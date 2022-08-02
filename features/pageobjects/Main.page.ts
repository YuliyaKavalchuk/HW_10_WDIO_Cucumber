import {ChainablePromiseElement} from 'webdriverio';
import Page from "./page";
/**
 * sub page containing specific selectors and methods for a specific page
 */

class MainPage extends Page {
   /**
   * overwrite specific options to adapt it to page object
   */

   public open(): Promise<void> {
       return super.open();
   }
}

export default new MainPage();