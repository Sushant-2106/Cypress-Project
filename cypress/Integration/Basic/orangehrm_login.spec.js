// Describe the test suite for OrangeHRM Login Tests
describe('OrangeHRM Login Tests', () => {
    // Define constants for the URL and credentials
    const url = 'https://opensource-demo.orangehrmlive.com/';
    const validUsername = 'Admin';
    const validPassword = 'admin123';
    const invalidUsername = 'invalidUser';
    const invalidPassword = 'invalidPass';
  
    // Test case for a valid login
    it('Valid Login', () => {
      // Visit the OrangeHRM login page
      cy.visit(url);
      // Enter the valid username
      cy.get('#txtUsername').type('Admin');
      // Enter the valid password
      cy.get('#txtPassword').type('admin123');
      // Click the login button
      cy.get('#btnLogin').click();
      // Verify that the URL includes '/dashboard' indicating a successful login
      cy.url().should('include', '/dashboard');
      // Verify that the "Dashboard" label is visible
      cy.contains('Dashboard').should('be.visible');
    });
  
    // Test case for an invalid login
    it('Invalid Login', () => {
      // Visit the OrangeHRM login page
      cy.visit(url);
      // Enter an invalid username
      cy.get('#txtUsername').type('sherkhan');
      // Enter an invalid password
      cy.get('#txtPassword').type('shekhan258');
      // Click the login button
      cy.get('#btnLogin').click();
      // Verify that an error message indicating invalid credentials is visible
      cy.contains('Invalid credentials').should('be.visible');
    });
  });
  