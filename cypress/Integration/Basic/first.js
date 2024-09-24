describe('Login Tests', () => {
    it('LoginTest1', () => {
        cy.visit('https://google.com/')
    });
});

it('Heroku login test', () => {

    cy.visit('https://the-internet.herokuapp.com/login')

    // username
    cy.get('#username').type('tomsmith')
    // password
    cy.get('#password').type('SuperSecretPassword!')
    // login
    cy.get('.radius').click();
    
    
});