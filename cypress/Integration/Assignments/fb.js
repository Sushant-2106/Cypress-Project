describe('Facebook Signup Automation', () => {

    it('Registers a dummy user on the Facebook signup page and asserts the result', () => {
  
      // Visit the Facebook signup page
      cy.visit('https://en-gb.facebook.com/reg');
  
      // Debug the page to check if elements are loaded
      cy.wait(2000); // Wait for 2 seconds to ensure the page loads completely
      cy.get('body').then(($body) => {
        console.log($body.html()); // Print the page HTML to check if elements are present
      });
  
      // Debug to see if the form fields are present
      cy.get('input[name="firstname"]').should('exist').and('be.visible');
      cy.get('input[name="lastname"]').should('exist').and('be.visible');
  
      // Fill the form fields
      cy.get('input[name="firstname"]').type('Sushant', { force: true }).should('have.value', 'First name');
      cy.get('input[name="lastname"]').type('Mishra', { force: true }).should('have.value', 'Surname');
      cy.get('input[name="reg_email__"]').type('sushantmishra2109@gmail.com, { force: true }).should('have.value','Mobile number or email address');
      cy.get('input[name="reg_passwd__"]').type('Password@123', { force: true }).should('have.value', 'New password');
  
      // Select birthday (day, month, year)
      cy.get('select[name="birthday_day"]').select('1', { force: true }).should('have.value', 'Day');
      cy.get('select[name="birthday_month"]').select('September', { force: true }).should('have.value', 'Month'); // June is 6
      cy.get('select[name="birthday_year"]').select('1996', { force: true }).should('have.value', 'Year');
  
      // Select gender (Male/Female/Custom)
      cy.get('input[name="Male"][value="2"]').check({ force: true }); // 1 for female, 2 for male
  
      // Submit the form
      cy.get('button[name="websubmit"]').click({ force: true });
  
      // Assert the result
      cy.get('.uiHeaderTitle', { timeout: 10000 }).should('contain.text', 'Verify your account').then(() => {
        console.log('Verification message is displayed');
      });
  
    });
  
  });