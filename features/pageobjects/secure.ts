import {ChainablePromiseElement} from "webdriverio";
import Page from "./page";

 class SecurePage extends Page{

    public get sideMenuIcon(): ChainablePromiseElement<WebdriverIO.Element>{
        return $('button[class="styles_root__coHaQ styles_burger__HcbjK"]');
    }

     public get sideMenuExpanded(): ChainablePromiseElement<WebdriverIO.Element>{
         return $('a[data-tid="de7c6530"]');
     }

    public async checkSideMenu (): Promise<void> {
        await this.sideMenuIcon.click()
        await expect (this.sideMenuExpanded).toBeDisplayed()
    }

     public async checkOnline (): Promise<void> {
         await expect(browser).toHaveUrlContaining("https://hd.kinopoisk.ru/")
     }
     public async checkFilmy (): Promise<void> {
         await expect(browser).toHaveUrlContaining("https://www.kinopoisk.ru/lists/categories/movies/1/")
     }
     public async checkSerialy (): Promise<void> {
         await expect(browser).toHaveUrlContaining("https://www.kinopoisk.ru/lists/categories/movies/3/")
     }

     public async clickBiletyVKino (): Promise<void> {
         await expect(browser).toHaveUrlContaining("https://www.kinopoisk.ru/afisha/new/city/")
     }
}

export default new SecurePage()