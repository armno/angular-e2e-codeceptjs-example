
Feature('Home Page');

Scenario('Displaying welcome message', (I) => {
  I.amOnPage('/');
  I.see('Welcome to app!');
  I.seeElement('img[alt="Angular Logo"]');
});
