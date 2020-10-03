const Page = require('./page');

class homepages extends Page {


    get all_protofoilheader(){ return $("//section//ul[1]//li[1]//a[1]") }
    get imagecontainer(){ return $("//body/div/section/div/div/div/div[1]/ul[1]/div[2]/div[1]/div[1]/div[1]")}
 get  Explore_Investment_ideas_button(){return $("//a[@id='btn-explore79']")}
    getprotofileheadertext(){

        let text=this.all_protofoilheader.getText();
         console.log(text);
       
    }

    getimageText(){
          let imageText =this.imagecontainer.getText();
          console.log(imageText)

    }

moveto(element){
element.waitForDisplayed()
element.moveTo()}


open () {
    return super.open('model-portfolio');
}

}



module.exports = new homepages();