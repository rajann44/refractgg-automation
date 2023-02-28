import action from "../utils/Action";

class LoginPage {

    axis = "[id='menu-item-4377']";
    aboutus = "[id='menu-item-4378']";
    newsnmedia = "[id='menu-item-4379']";
    careers = "[id='menu-item-4382']";
    contactus = "[id='menu-item-4381']";
    career = "a[href='http://refract.gg/#wearehiring']";

    open(){
        action.navigateTo('/')
    }
    
}

export default new LoginPage();