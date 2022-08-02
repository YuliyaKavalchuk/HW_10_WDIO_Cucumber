import {ChainablePromiseElement} from "webdriverio";

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
    /**
     * Opens a sub page of the page
     */
    public get sideMenuIcon(): ChainablePromiseElement<WebdriverIO.Element>{
        return $('button[class="styles_root__coHaQ styles_burger__HcbjK"]');
    }
    public async open():Promise<void> {
        await browser.url("https://www.kinopoisk.ru/")
        await this.sideMenuIcon.click()
    }
    public async click (button): Promise<void> {
        await button.click();
    }
}