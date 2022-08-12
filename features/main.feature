Feature: The Kinopoisk side menu

  @main
  Scenario: Side menu is displayed when user lands on the main page
    Given I am on the "main" page
    Then  I should see a side menu

#  @OnlineMovie
#  Scenario : As a user, when I click on "OnlineMovie" the https://hd.kinopoisk.ru/ is opened
#    Given I am on the "main" page
#    When  I expand main menu and click on "OnlineMovie" button
#    Then  I should be redirected to the OnlineMovie
#
#  @Filmy
#  Scenario : As a user, when I click on "Filmy" the https://www.kinopoisk.ru/lists/categories/movies/1/ is opened
#    Given I am on the "main" page
#    When  I expand main menu and click on "Filmy" button
#    Then  I should be redirected to the Filmy
#
#  @Serialy
#  Scenario : As a user, when I click on "Serialy" the https://www.kinopoisk.ru/lists/categories/movies/3/ is opened
#    Given I am on the "main" page
#    When  I expand main menu and click on "Serialy" button
#    Then  I should be redirected to the Serialy
#
#  @BiletyVKino
#  Scenario : As a user, when I click on "Bilety v kino" the https://www.kinopoisk.ru/afisha/new/city/182/ is opened
#    Given I am on the "main" page
#    When  I expand main menu and click on "Bilety v kino" button
#    Then  I should be redirected to the Bilety v kino


