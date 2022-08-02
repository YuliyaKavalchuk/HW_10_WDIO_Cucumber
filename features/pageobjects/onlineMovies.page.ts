import {ChainablePromiseElement} from "webdriverio";
import Page from "./page";

class onlineMovies extends Page{
    public get btnOnlineKinoteatr(): ChainablePromiseElement<WebdriverIO.Element>{
        return $('img[src="https://avatars.mds.yandex.net/get-bunker/61205/478c72b68bc4ac507483b2676994bbc1df5f05be/svg"]');
    }
    public click (): Promise<void> {
        return this.btnOnlineKinoteatr.click();
    }
}

export default new onlineMovies();