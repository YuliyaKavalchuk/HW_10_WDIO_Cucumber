import {ChainablePromiseElement} from "webdriverio";
import Page from "./page";

class serialyPage extends Page{
    public get btnSerialy(): ChainablePromiseElement<WebdriverIO.Element>{
        return $('img[src="https://avatars.mds.yandex.net/get-bunker/61205/9daeaf410906b5794685b7b5bb25dfd2c647fccf/svg"]');
    }

    public click (): Promise<void> {
        return this.btnSerialy.click();
    }
}

export default new serialyPage();