const { assert } = require('chai');
const hompage= require('.bin/test/pageobjects/home');
const SecurePage = require('.bin/test/pageobjects/secure.page');
const weatherpage =require('.bin/test/pageobjects/weather')

describe('Thisis to  verify the 1st scenario', () => {
    it('This is to verify the flow of add stock', () => {
       
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
        
    //weatherpage.custoimze_button_link.scrollIntoView();  
   // weatherpage.custoimze_button_link.scrollIntoView();
    console.log("inviewport",weatherpage.custoimze_button_link.isDisplayedInViewport())
    const button_text_before_reset=weatherpage.custoimze_button_link.getText();
    console.log(button_text_before_reset)
    weatherpage.custoimze_button_link.click();
    const button_text_after_reset =weatherpage.custoimze_button_link.getText();
    console.log(button_text_after_reset)
    assert.equal(button_text_after_reset,'Reset','Button value changes to reset');
    weatherpage.text_of_income.scrollIntoView();
    const value_of_text=weatherpage.text_of_income.getText() 
    console.log(value_of_text)

    if(value_of_text == "CASH"){

    console.log("This is valid cash linl")
 //  weatherpage.add_stock.scrollIntoView();
    weatherpage.add_stock.click();
    browser.pause(5000)

    const stocktext1= weatherpage.stock_text.getText();
    console.log(stocktext1)

    if(stocktext1 == "SPDR Gold Shares"){

        weatherpage.add_stock_button.click();
        weatherpage.add_stock_done_button.click();
        browser.pause(5000);
        const finaltext =weatherpage.GLD_in_row.getText()
        console.log("The stock added with casd is:",finaltext)
    }
else{
    console.log("the text doesn't match")
}

    }
    else{
        console.log("invalid text")
    }
        
    });
});


