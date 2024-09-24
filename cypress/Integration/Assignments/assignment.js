describe('Books Tosca Website Automation', () => {
    const baseUrl = 'http://books.toscape.com'; 
  
    // Test Case 1: Verify page title
    it('Testcase 1: Verify page title is "My Score"', () => {
      cy.visit(baseUrl); // Open the website
      cy.title().should('eq', 'My Score'); // Verify the page title is "My Score"
    });
  
    // Test Case 2: Non-fiction link click functionality
    it('Testcase 2: Verify Non-fiction link and its results page', () => {
      cy.visit(baseUrl); // Open the website
      cy.get('a:contains("Non fiction")').click(); // Click on the Non-fiction link
      cy.url().should('include', '/non-fiction'); // Verify the Non-fiction page is displayed by checking URL
      cy.get('h1').should('contain.text', 'Non Fiction'); // Ensure the correct page is displayed by checking page heading
    });
  
    // Test Case 3: Add a product to the basket
    it('Testcase 3: Add a product to the basket', () => {
      cy.visit(baseUrl); // Open the website
      cy.get('a:contains("Non fiction")').click(); // Click on the Non-fiction link
      cy.get('.product-item').first().click(); // Click on the first product
      cy.get('button:contains("Add to Basket")').click(); // Click "Add to Basket"
      cy.get('.basket-count').should('contain.text', '1'); // Verify the product is added by checking basket count
    });
  });
  