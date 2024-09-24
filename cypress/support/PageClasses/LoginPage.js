class LoginPage{

    // In this class we need to write the cypress commands as re-usable methods.

    Enterurl(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    LoginToApp(){
        cy.get('[name="username"]').type('Admin') //hard coded coded
        cy.get('[type="password"]').type('admin123')
        cy.get('[type="submit"]').click();
    }

    ForgotPassword(){
        cy.get('.orangehrm-login-forgot').click();
        cy.get('[name="username"]').type('RandomUser');
        cy.get('.orangehrm-forgot-password-button--reset').click();
    }
} // end of class

export default LoginPage;