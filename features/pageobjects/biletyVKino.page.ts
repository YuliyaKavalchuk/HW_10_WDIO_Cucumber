import {ChainablePromiseElement} from "webdriverio";
import Page from "./page";

class biletyVKinoPage extends Page{
    public get btnBiletyVKino(): ChainablePromiseElement<WebdriverIO.Element>{
        return $('img[src="https://avatars.mds.yandex.net/get-bunker/118781/ae7fbfc1773a6bbd61ee0154628c6fe14bf6959e/svg"]');
    }

    public click (): Promise<void> {
        return this.btnBiletyVKino.click();
    }
}

export default new biletyVKinoPage();