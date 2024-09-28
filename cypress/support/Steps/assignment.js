import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('User is at the login page', () => {
  // Implement navigation to the login page
});

When('User enters username as {string} and password as {string}', (username, password) => {
  // Implement filling in the login form
});

When('User clicks on login button', () => {
  // Implement clicking the login button
});

Then('User is able to successfully login to the Website', () => {
  // Implement assertions for successful login
});
