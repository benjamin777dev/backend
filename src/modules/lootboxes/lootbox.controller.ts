import API_VERSION from "@/utils/version";
import BaseController from "@/common/base-controller";
import { LootboxService } from "./lootbox.service";

class LootboxController extends BaseController {
  protected initializedRoutes(): void {
    this.router.post(`${API_VERSION}/lootbox/initialData`, this.service.getinitialData);
    this.router.post(`${API_VERSION}/lootbox/usersOpenedLootboxes`, this.service.getUsersOpenedLootboxes);
    this.router.put(`${API_VERSION}/lootbox/sendCurrentLootbox`, this.service.updateCurrentLootbox);
    this.router.get(`${API_VERSION}/lootbox/notUsedLootbox`, this.service.getNotUsed);
    this.router.put(`${API_VERSION}/lootbox/takeLootbox`, this.service.updateTakeLootbox);
    this.router.get(`${API_VERSION}/lootbox/historyIdData`, this.service.getHistoryIdData);
    this.router.post(`${API_VERSION}/lootbox/user/upsert`, this.service.userUpsert);
    this.router.post(`${API_VERSION}/lootbox/startParam-lootbox`, this.service.getStartParamLootbox);
    this.router.post(`${API_VERSION}/lootbox/usersLootboxes`, this.service.getUsersLootboxes);
    this.router.post(`${API_VERSION}/lootbox/userBalance-currentSender`, this.service.updateUserBalanceCurrentSender);
    this.router.get(`${API_VERSION}/lootbox/all`, this.service.getallData);
  }
}

export default new LootboxController({
  service: new LootboxService(),
}).getRouter();
