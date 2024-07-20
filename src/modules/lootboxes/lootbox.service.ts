import supabase from "@/config/supabase";
import { Request, Response } from "express";

export class LootboxService {

  async getinitialData(req: Request, res: Response) {
    const { initData } = req.body;
    if (!initData) return;
    const { data } = await supabase
      .from("lootboxes")
      .select()
      .eq("uuid", initData?.startParam as string);
    return res.send(data);
  }

  async getUsersOpenedLootboxes(req: Request, res: Response) {
    const { initData } = req.body;
    if (!initData) return;
    const usersOpenedLootboxes = await supabase
      .from("lootboxes")
      .select("sender_id, balance")
      .eq("receiver_id", initData?.user?.id as number);
    return res.send(usersOpenedLootboxes);
  }

  async updateCurrentLootbox(req: Request, res: Response) {
    const { sender_id, parent } = req.body;
    if (!sender_id || !parent) return;
    await supabase
      .from("lootboxes")
      .update({ receiver_id: sender_id }) // sender of current lootbox
      .eq("uuid", parent as string); // условие - parent lootbox
  }

  async userUpsert(req: Request, res: Response) {
    const { initData } = req.body;
    if (!initData) return;
    await supabase.from("users").upsert({
      telegram_id: initData?.user?.id as number,
      username: initData?.user?.username as string,
      first_name: initData?.user?.firstName as string,
      last_name: initData?.user?.lastName as string,
    });

  }

  async getNotUsed(req: Request, res: Response) {
    const { data } = await supabase
      .from("lootboxes")
      .select("uuid")
      .is("sender_id", null); // get not used lootboxes only
    return res.send(data)
  }

  async updateTakeLootbox(req: Request, res: Response) {
    const { initData, lootbox } = req.body;
    if (!initData || !lootbox) return;
    await supabase
      .from("lootboxes")
      .update({
        sender_id: initData?.initData?.user?.id,
        parent: initData?.initData?.startParam,
      }) // write yourself as a sender = take a loot box

      .eq("uuid", lootbox.uuid);
    return res.send('success')
  }

  async getHistoryIdData(req: Request, res: Response) {
    const data = await supabase.from("lootboxes").select("id");
    return res.send(data)
  }

  async getStartParamLootbox(req: Request, res: Response) {
    const { initData } = req.body.initData;
    if (!initData) return;
    const data = await supabase
      .from("lootboxes")
      .select()
      .eq("id", initData?.startParam as string);
    return res.send(data)
  }

  async getUsersLootboxes(req: Request, res: Response) {
    const { initData } = req.body.initData;
    if (!initData) return;
    const data = await supabase
      .from("lootboxes")
      .select("balance")
      .eq("receiver_id", initData?.user?.id as number);
    return res.send(data)
  }

  async updateUserBalanceCurrentSender(req: Request, res: Response) {
    const { sender_id, parent } = req.body;
    if (!sender_id || !parent) return;
    await supabase
      .from("lootboxes")
      .update({ receiver_id: sender_id }) // sender of current lootbox
      .eq("id", parent as string); // условие - parent lootbox
  }

  async getallData(req: Request, res: Response) {
    const data = await supabase.from("lootboxes").select();
    return res.send(data)
  }
}
