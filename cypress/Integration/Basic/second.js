describe('Orange Suite', () => {
    it('Login test', () => {
        
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[type="password"]').type('admin123')
        cy.get('[type="submit"]').click();
    });
});