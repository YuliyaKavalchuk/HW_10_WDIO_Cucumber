import {Given, When, Then} from '@wdio/cucumber-framework'
import MainPage from "../pageobjects/Main.page";
import SecurePage from "../pageobjects/secure";


Given (/^I am on the "main" page/, async () => {
    await MainPage.open()
});

When (/^I expand main menu and click on "OnlineMovie" button/, async () => {
    await SecurePage.checkSideMenu()
    await MainPage.clickOnline()
});

When (/^I expand main menu and click on "Filmy" button/, async () => {
    await SecurePage.checkSideMenu()
    await MainPage.clickFilmy()
});

When (/^I expand main menu and click on "Serialy" button/, async () => {
    await SecurePage.checkSideMenu()
    await MainPage.clickSerialy()
});

When (/^I expand main menu and click on "Bilety v kino" button/, async () => {
    await SecurePage.checkSideMenu()
    await MainPage.clickBiletyVKino()
});

Then (/^I should see a side menu/, async () => {
    await MainPage.checkSideMenu()
});

Then (/^I should be redirected to the OnlineMovie/, async () => {
    await SecurePage.checkOnline()
});

Then (/^I should be redirected to the Filmy/, async () => {
    await SecurePage.checkFilmy()
});

Then (/^I should be redirected to the Serialy/, async () => {
    await SecurePage.checkSerialy()
});

Then (/^I should be redirected to the Bilety v kino/, async () => {
    await expect(browser).toHaveUrlContaining("")
    await SecurePage.clickBiletyVKino()
});