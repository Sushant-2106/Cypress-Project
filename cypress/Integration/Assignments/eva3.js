describe('ebay', () => {
    it('evaluation', () => {

        //Visit the website
        cy.visit('https://www.ebay.com/');
        // clicked on Advanced
        cy.get('[href="https://www.ebay.com/sch/ebayadvsearch"]').click();
        // Enetering minimum value
        cy.get('[name="_udlo"]').type('1000');
        //Entering maximum value
        cy.get('[name="_udhi"]').type('10000')
        //removing the pop up function
        cy.get('[href="/help/buying/search-tips/advanced-search?id=4049"]').invoke('removeAttr','target').click();
        
        cy.go('back')
        //coming on home page
        cy.get('#gh-logo').click()
     
        cy.get('[fdprocessedid="g52e7e"]').click();
        cy.contains('No exact matches found').should('be.visible')
        
        cy.get('#gh_ac').type('nonexistentitem');
        cy.get('#fss').check()
        cy.get('#gh-btn').click();
        cy.contains('0 results for onexistentitem').click();
        cy.window().then((win)=>{
            win.close();
        })
        
        
        
        
    });

});