describe('Rahul shetty Academy', () => {
    it('Navigation', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[class=blinkingText]').click();
        cy.get(':nth-child(4) > .new-navbar-highlighter').click({force:true})
        cy.wait(2000)
        cy.go('back');
        cy.go('forward');
        cy.reload('');
    });
});