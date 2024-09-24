import LoginPage from "../../support/PageClasses/LoginPage";
import Logout from "../../support/PageClasses/Logout";
import Links from "../../support/PageClasses/Links";

describe('OrangeTests', () => {

    //I have to create the object with new variable.

    const loginobj= new LoginPage();
    const logoutobj= new Logout();
    const linksobj= new Links();

    it('test1', () => {

        //enter url.
        loginobj.Enterurl();

        //Login
        loginobj.LoginToApp();


        //click on admin link
        linksobj.ClickOnLink('Admin');

        //logout
        logoutobj.LogoutOfApp();
        
    });
    
});