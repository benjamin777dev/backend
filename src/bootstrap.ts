import { Application } from "express";
import https from 'https';
import fs from 'fs';

const options = {
  key: fs.readFileSync('src/config/ssl/key.pem'),
  cert: fs.readFileSync('src/config/ssl/cert.pem')
}
/**
 * Initializes the application
 * @param app - The express "Application"
 */

const Bootstrap = async (app: Application) => {
  const PORT: Number = parseInt(`${process.env.PORT}`, 10) || 8000;

  https.createServer(options, app).listen(PORT, () => {
    console.log(`HTTPS server is running on port ${PORT}`);
  });

};

export default Bootstrap;
