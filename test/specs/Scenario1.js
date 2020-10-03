const { expect } = require('chai');
const hompage= require('.bin/test/pageobjects/home');
const SecurePage = require('.bin/test/pageobjects/secure.page');
const weatherpage =require('.bin/test/pageobjects/weather')
//A signle test case have been created for single flow

describe('Thisis to  verify the 1st scenario', () => {
    it('This will launch browser and verify the modified profilevalue', () => {
       
        hompage.open();
        browser.maximizeWindow();
        let Title =browser.getTitle()
        console.log(Title);
        expect(Title).equals("WeInvest | Simple, Smart, Transparent Investing")
        hompage.getprotofileheadertext();
        let text =hompage.getimageText();             
        console.log("inviewport",hompage.Explore_Investment_ideas_button.isDisplayedInViewport())
        hompage.Explore_Investment_ideas_button.scrollIntoView();
        hompage.Explore_Investment_ideas_button.click();
        weatherpage.custoimze_button_text.click();
        browser.setTimeout({
            'pageLoad': 600000})
        console.log("inviewport",weatherpage.custoimze_button_link.isDisplayedInViewport())
    //weatherpage.custoimze_button_link.scrollIntoView();  
    weatherpage.custoimze_button_link.click();
    browser.setTimeout({
        'pageLoad': 6000000})
        
    console.log("inviewport",weatherpage.text_in_firstrow.isDisplayedInViewport())
    
   // weatherpage.text_in_firstrow.scrollIntoView();
    let word=weatherpage.text_in_firstrow.getText();
    console.log(word);

    const elem = $("//input[@type='range'and @data-isin='SPY']")
//elem.scrollIntoView();
console.log("inviewport",elem.isDisplayedInViewport());
   const value= elem.getValue();
   console.log(value)
   const setval=elem.setValue('elem',50)
   const value2=elem.getValue()
   console.log(value2)

      //console.log("inviewport",weatherpage.inverst_now_button.isDisplayedInViewport())
   //weatherpage.inverst_now_button.scrollIntoView();
   weatherpage.rebalance_button.click();
   weatherpage.inverst_now_button.click();

   const textinprofile = weatherpage.verifyprotofiletext.getText()
   console.log(textinprofile);
   let expectedtext ="SPDR S&P500 ETF Trust";
  // if( expectedtext == textinprofile)
  //  console.log("This is valid text")
    const text1 = weatherpage.profilevalu.getText();
    console.log(text1)

    expect(value2).to.equal(text1)



   
        
        
    });
});


