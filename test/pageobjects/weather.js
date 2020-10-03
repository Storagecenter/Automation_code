const Page = require('./page');

class weather extends Page {

  // get tabs_name(){return browser.$("//a[@data-toggle='tab']")}
    get custoimze_button_text(){ return $('=Customize Portfolio') }

    get custoimze_button_link(){ return $("//body/div[3]/div[2]/section[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[3]") }

    get text_in_firstrow(){return $("//body/div[3]/div[2]/section[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[2]/div[3]")}

    get slider(){return $("//body/div[3]/div[2]/section[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[2]/div[2]/div[1]")}
    
    get slidevalue(){ return $("//body/div[3]/div[2]/section[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[2]/div[2]/div[1]")}
  
    get rebalance_button(){return $("//a[contains(text(),'Rebalance')]")}
    get inverst_now_button(){return $("//a[contains(text(),'Invest Now')]")}


    get text_of_income(){return $("//div[contains(text(),'CASH')]")}

    get add_stock(){return $("//body/div[3]/div[2]/section[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[6]/div[1]/div[1]/div[4]/div[1]/a[1]")}

    get verifyprotofiletext(){return $("//span[contains(text(),'SPDR S&P500 ETF Trust')]")}
    get profilevalu(){return $("//*[@id='suggestion-page-body']/div/div/div[4]/div[2]/div/div/ul/li[1]/div/div/div[3]")}

    get stock_text(){return $('=SPDR Gold Shares')}

    get add_stock_button(){return $("//button[@data-allocation-name='CASH' and @data-isin='GLD']")}

    get add_stock_done_button(){ return $("//body/div[3]/div[2]/section[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[6]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[3]/button[1]")}

    get GLD_in_row(){return $("//body/div[3]/div[2]/section[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[6]/div[1]/div[3]/div[3]")}
}




module.exports = new weather();