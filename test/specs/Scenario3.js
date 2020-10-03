const { expect } = require('chai');
const hompage = require('.bin/test/pageobjects/home');
const SecurePage = require('.bin/test/pageobjects/secure.page');
const weatherpage = require('.bin/test/pageobjects/weather')

describe('Thisis to  verify the 3rd scenario', () => {
  it('This is to verify the tab available in desktop and mobile mode', () => {

    hompage.open();
    browser.maximizeWindow();
    let Title = browser.getTitle()
    console.log(Title);
    expect(Title).equals("WeInvest | Simple, Smart, Transparent Investing")
    hompage.getprotofileheadertext();
    let text = hompage.getimageText();
    //  console.log("inviewport",hompage.Explore_Investment_ideas_button.isDisplayedInViewport())
    let x = $('*=3 Portfolio recommen');
    let x1 = console.log(x.getText());
    let y = $('*=15 other portfolio c');
    y.click();
    let y1 = console.log(y.getText());
    browser.pause(2000)
    browser.setWindowSize(376, 667)
    browser.pause(4000)
    let x2 = $('=Recommended (3)');
    console.log(x2.getText());
    let y2 = $('=Others (15)');
    y2.click();
    console.log(y2.getText());


  });
});


