import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import HomepPage from '../pageobjects/home.page.js';

Given('user is on Login page', async () => {
    await LoginPage.open();
})

Then('user input {string} as username', async (username) => { // given or then tetap bisa jalan
  await LoginPage.inputUsername(username);
})

Then('user input {string} as password', async (password) => { // given or then tetap bisa jalan
  await LoginPage.inputPassword(password);
})

// Then('user input {string} as username and input {string} as password', async (username, password) => { // given or then tetap bisa jalan
//   await LoginPage.inputUsername(username);
//   await LoginPage.inputPassword(password);
// })

When('user click login button', async () => {
  await LoginPage.clickLoginButton();
})

Then('user should be redirected to homepage', async () => {
  await HomepPage.validateonHomePage();
})

When('user login using {string} as username and {string} as password and user click login button', async (username, password) => {
  await LoginPage.inputUsername(username);
  await LoginPage.inputPassword(password);
  await LoginPage.clickLoginButton();
})

Then('user should see error message {string}', async (errorMessage) => {
  await LoginPage.validateWrongPasswordDisplayed(errorMessage);
})


