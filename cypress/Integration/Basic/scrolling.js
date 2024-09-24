describe('Scrolling', () => {
    it('Scroll testcase', () => {

        cy.visit('https://www.google.com/')
        cy.get('[aria-label="Search"]').type('Masai{enter}')

        //x is horizontal cordinate and y is vertical

        cy.scrollTo(0,2000); //scroll down
        cy.scrollTo(0,-2000); //scroll up by -ve value

        cy.contains('Maasai_people').scrollIntoView().click();
        
    });
});