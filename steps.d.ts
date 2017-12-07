
type ICodeceptCallback = (i: CodeceptJS.I) => void;

declare const actor: () => CodeceptJS.I;
declare const Feature: (string: string) => void;
declare const Scenario: (string: string, callback: ICodeceptCallback) => void;
declare const Before: (callback: ICodeceptCallback) => void;
declare const After: (callback: ICodeceptCallback) => void;
declare const within: (selector: string, callback: Function) => void;

declare namespace CodeceptJS {
  export interface I {
    amOutsideAngularApp: () => any; 
    amInsideAngularApp: () => any; 
    waitForElement: (locator, sec=null) => any; 
    waitUntilExists: (locator, sec=null) => any; 
    waitForClickable: (locator, sec=null) => any; 
    waitForVisible: (locator, sec=null) => any; 
    waitForInvisible: (locator, sec=null) => any; 
    waitForStalenessOf: (locator, sec=null) => any; 
    waitForText: (text, sec=null, context=null) => any; 
    moveTo: (path) => any; 
    refresh: () => any; 
    haveModule: (modName, fn) => any; 
    resetModule: (modName) => any; 
    setCookie: (cookie) => any; 
    amOnPage: (url) => any; 
    click: (click) => any; 
    doubleClick: (doubleClick) => any; 
    moveCursorTo: (moveCursorTo) => any; 
    see: (text, context=null) => any; 
    dontSee: (text, context=null) => any; 
    selectOption: (selectOption) => any; 
    fillField: (field, value) => any; 
    pressKey: (key) => any; 
    attachFile: (attachFile) => any; 
    seeInField: (field, value) => any; 
    dontSeeInField: (field, value) => any; 
    appendField: (field, value) => any; 
    clearField: (field, value) => any; 
    checkOption: (checkOption) => any; 
    seeCheckboxIsChecked: (field) => any; 
    dontSeeCheckboxIsChecked: (field) => any; 
    grabTextFrom: (locator) => any; 
    grabValueFrom: (locator) => any; 
    grabAttributeFrom: (locator, attr) => any; 
    seeInTitle: (seeInTitle) => any; 
    dontSeeInTitle: (dontSeeInTitle) => any; 
    grabTitle: (grabTitle) => any; 
    seeElement: (seeElement) => any; 
    dontSeeElement: (dontSeeElement) => any; 
    seeElementInDOM: (seeElementInDOM) => any; 
    dontSeeElementInDOM: (dontSeeElementInDOM) => any; 
    seeInSource: (seeInSource) => any; 
    dontSeeInSource: (dontSeeInSource) => any; 
    executeScript: (fn) => any; 
    executeAsyncScript: (fn) => any; 
    seeInCurrentUrl: (url) => any; 
    dontSeeInCurrentUrl: (url) => any; 
    seeCurrentUrlEquals: (seeCurrentUrlEquals) => any; 
    dontSeeCurrentUrlEquals: (dontSeeCurrentUrlEquals) => any; 
    saveScreenshot: (saveScreenshot) => any; 
    clearCookie: (cookie=null) => any; 
    seeCookie: (name) => any; 
    dontSeeCookie: (name) => any; 
    grabCookie: (name) => any; 
    resizeWindow: (width, height) => any; 
    closeOtherTabs: (closeOtherTabs) => any; 
    wait: (sec) => any; 
    debug: (msg) => any; 
    debugSection: (section, msg) => any; 
    addMochawesomeContext: (context) => any; 
    say: (msg) => any; 

  }
}

declare module "codeceptjs" {
    export = CodeceptJS;
}
