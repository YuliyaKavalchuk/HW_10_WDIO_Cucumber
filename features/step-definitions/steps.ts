import {Given, When, Then} from '@wdio/cucumber-framework'
import MainPage from "../pageobjects/Main.page";
import SecurePage from "../pageobjects/secure";
import onlineMoviesPage from "../pageobjects/onlineMovies.page";
import filmyPage from "../pageobjects/filmy.page";
import serialyPage from "../pageobjects/serialy.page";
import biletyVKinoPage from "../pageobjects/biletyVKino.page";

const pages: any = {
    main: MainPage
}

const buttons: any = {
    OnlineMovie: onlineMoviesPage,
    Filmy: filmyPage,
    Serialy: serialyPage,
    BiletyVKino: biletyVKinoPage
}

Given (/^I am on the "(\w+)" page$/, async (page) => {
    await pages [page].open()
});

When (/^I expand main menu and click on "(.+)" button/, async (button) => {
    await buttons [button].click()
});


Then (/^I should see a side menu/, async () => {
    await SecurePage.checkSideMenu()
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
    await SecurePage.clickBiletyVKino()
});