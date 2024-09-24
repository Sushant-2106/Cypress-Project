describe('', () => {

beforeEach(() => {
    
        
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[type="password"]').type('admin123')
        cy.get('[type="submit"]').click();
});



    it('Admin test', () => {

        cy.contains('Admin').click();
        cy.url().should('include','admin')
        

    });
    it('Leave test', () => {
        cy.contains('Leave').click();
        cy.url().should('include','leave')
        
    });
    afterEach(() => {
        cy.wait(2000)
        cy.get('.oxd-userdropdown-img').click()
        cy.contains('Logout').click()
    });
});
