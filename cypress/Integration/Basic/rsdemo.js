describe('Radio', () => {
    it('Radio Test', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('[value="radio1"]').should('not.be.checked').click().should('be.checked');
        cy.get('[value="radio2"]').click().should('be.checked');
        cy.get('[value="radio3"]').click().should('be.checked');
        
    });
    it('Radio Test', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#dropdown-class-example').select('option3').should('have.value','option3');
    cy.get('#dropdown-class-example').select('option2').should('have.value','option2');
    cy.get('#dropdown-class-example').select('option1').should('have.value','option1');
    cy.get('#dropdown-class-example').select('').should('have.value','');
});

it('Radio Test', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#dropdown-class-example').select('Option1').should('have.value','option1');
    cy.get('#dropdown-class-example').select('Option2').should('have.value','option2');
    cy.get('#dropdown-class-example').select('Option3').should('have.value','option3');
    cy.get('#dropdown-class-example').select('Select').should('have.value','');
});
it.only('Radio Test', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#dropdown-class-example').select(3).should('have.value','option3');
    cy.get('#dropdown-class-example').select(2).should('have.value','option2');
    cy.get('#dropdown-class-example').select(1).should('have.value','option1');
    cy.get('#dropdown-class-example').select(0).should('have.value','');
});

    it.only('Radio Test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('[placeholder="Type to Select Countries"]').type('ind');
        cy.get('.ui-menu-item').each(($ele)=>{
            if ($ele.text()=='India'){
                cy.wrap($ele).click();
            }

        })

        cy.get('[placeholder="Type to Select Countries"]').clear().type('ch');
        cy.get('.ui-menu-item').contains("China").click()

});
});
