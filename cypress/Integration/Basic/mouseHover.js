describe('Mouse Hover', () => {
    it('mouse', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#mousehover').invoke('show'); // invoke will show the hidden elements. related to html.
        cy.contains('Top').click({force: true});
        cy.url().should('include', 'top');
        
    });

    it('Test 2', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#mousehover').trigger('mouseover');
        cy.contains('Reload').click({force: true});
        cy.url().should('include', 'AutomationPractice');
        
    });
});