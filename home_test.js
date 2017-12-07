/// <reference path="./steps.d.ts" />

Feature('Home Page');

Scenario('Displaying home page', (I) => {
  I.amOnPage('/');
  I.see('Welcome to app!');
  I.seeElement('img[alt="Angular Logo"]');
});

Scenario('Adding Context', (I) => {
  I.amOnPage('/');
  I.see('Tour');

  I.addMochawesomeContext('WOW, JUST WOW');
  I.addMochawesomeContext('https://media.giphy.com/media/2xgzOPvrWW7hm/giphy.gif');
});
