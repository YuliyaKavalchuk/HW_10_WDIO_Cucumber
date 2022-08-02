import {ChainablePromiseElement} from 'webdriverio';

/**
 * sub page containing specific selectors and methods for a specific page
 */

class MainPage {
    /**
     * define selectors using getter methods
     */
    public get btnOnlineKinoteatr(): ChainablePromiseElement<WebdriverIO.Element>{
        return $('img[src="https://avatars.mds.yandex.net/get-bunker/61205/478c72b68bc4ac507483b2676994bbc1df5f05be/svg"]');
    }

    public get btnFilmy(): ChainablePromiseElement<WebdriverIO.Element>{
        return $('img[src="https://avatars.mds.yandex.net/get-bunker/50064/ab24b8099cb4ca11c08b0def91dc5c1d4fd78649/svg"]');
    }
    public get btnSerialy(): ChainablePromiseElement<WebdriverIO.Element>{
        return $('img[src="https://avatars.mds.yandex.net/get-bunker/61205/9daeaf410906b5794685b7b5bb25dfd2c647fccf/svg"]');
    }
    public get btnBiletyVKinno(): ChainablePromiseElement<WebdriverIO.Element>{
        return $('img[src="https://avatars.mds.yandex.net/get-bunker/118781/ae7fbfc1773a6bbd61ee0154628c6fe14bf6959e/svg"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */


    public async clickOnline (): Promise<void> {
        await this.btnOnlineKinoteatr.click();
   }
    public async clickFilmy (): Promise<void> {
        await this.btnFilmy.click();
    }

    public async clickSerialy (): Promise<void> {
        await this.btnSerialy.click();
    }
    public async clickBiletyVKino(): Promise<void> {
        await this.btnBiletyVKinno.click();
    }
   /**
   * overwrite specific options to adapt it to page object
   */

   public open(): Promise<string> {
       return browser.url("https://www.kinopoisk.ru/")
   }
}

export default new MainPage();