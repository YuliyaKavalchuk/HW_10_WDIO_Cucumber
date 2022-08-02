import {ChainablePromiseElement} from "webdriverio";
import Page from "./page";

class filmyPage extends Page{
    public get btnFilmy(): ChainablePromiseElement<WebdriverIO.Element>{
        return $('img[src="https://avatars.mds.yandex.net/get-bunker/50064/ab24b8099cb4ca11c08b0def91dc5c1d4fd78649/svg"]');
    }

    public click (): Promise<void> {
        return this.btnFilmy.click();
    }
}

export default new filmyPage();