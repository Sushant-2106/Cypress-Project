describe('Handle Iframe and Click Join Now', () => {
    it('should switch to the iframe and click the Join Now link', () => {
      // Visit the webpage
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
  
      // Load the iframe using the cypress-iframe plugin
      cy.frameLoaded('#courses-iframe'); // The iframe has an ID of 'courses-iframe'
  
      // Switch to the iframe and click the 'Join now' link
      cy.iframe().find('a[href*="sign_in"]').contains('Join now').click();
  
      // Add a wait to observe the result
      cy.wait(2000); // This is optional, just to see the action being performed
    });
  });
  