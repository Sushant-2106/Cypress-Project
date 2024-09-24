describe('Login and Dashboard Test', () => {
    it('should login successfully and check dashboard elements', () => {
      // Visit the login page
      cy.visit('/login');
  
      // Enter the username and password
      cy.get('input[name="username"]').type('yourUsername');
      cy.get('input[name="password"]').type('yourPassword');
  
      // Click the login button
      cy.get('button[type="submit"]').click();
  
      // Assertion: Check if the URL has changed to /dashboard
      cy.url().should('include', '/dashboard');
  
      // Assertion: Check if the welcome message is displayed with the user's name
      cy.contains('Welcome Sushant').should('be.visible');
  
      // Assertion: Check if the logout button is visible
      cy.get('button#logout').should('be.visible');
  
      // Assertion: Check if recent activities list is loaded and has at least 3 items
      cy.get('.recent-activities-list')
        .should('be.visible')
        .find('li')
        .should('have.length.at.least', 3);
    });
  });
  