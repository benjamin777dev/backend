import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
import supabase from "./config/supabase";
import Bootstrap from "./bootstrap";
import errorHandler from "./middlewares/errorHandler";
import { initializedRoutes } from "./routes";
import accessLogStream from "./common/access-log-stream";
import cors from 'cors';

dotenv.config();

const app: Application = express();

// Enable CORS
app.use(cors());

// middlewares
app.use(errorHandler);

// using morgan for logs then store it on the logs/access.log directory
app.use(
  morgan("dev", {
    stream: accessLogStream,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

Bootstrap(app);
initializedRoutes(app);
