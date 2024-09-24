///reference.types="cypress" />
describe('v1 Test', () => {
    it('TestCSSselectors', () => {
        cy.visit('https://v1.training-support.net/selenium/simple-form')
       cy.get('#firstName').type('Sushant') 
       cy.get('#lastName').type('Mishra')
       cy.get('#email').type('sushantmishra2110@gmail.com')
       cy.get('#number').type('8240196250')
       cy.get('[rows="2"]').type('Hey Buddy how are you')
       cy.get('[value="submit"]').click();


    });
    
    it('TestCSSselectors', () => {
        cy.visit('https://v1.training-support.net/selenium/simple-form')
        cy.xpath('//input[@placeholder="First Name"]').type('Sushant')
        cy.xpath('//input[@placeholder="Last Name"]').type('Mishra')
        cy.xpath('//input[@id="email"]').type('sushantmishra2110@gmail.com')
        cy.xpath('//input[@id="number"]').type('8240196250')
        cy.xpath('//textarea[@rows="2"]').type('Hey Buddy')
        cy.xpath('//input[@type="submit"]').click();

});

});

