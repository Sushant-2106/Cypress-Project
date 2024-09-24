describe('Automated Test Script', () => {
    it('performs actions as specified in the image', () => {
      // Handle iFrame
      cy.visit('https://the-internet.herokuapp.com/iframe')
        .then($iframe => {
          const body = $iframe.contents().find('body');
          cy.wrap(body).click();
        });
  
      // Perform Double click
      cy.visit('http://jqueryui.com/doubleclick')
        .get('.double').dblclick();
  
      // Perform Right Click
      cy.visit('https://the-internet.herokuapp.com/context_menu')
        .get('#hot-spot').rightclick();
  
      // Perform Mouse Hover
      cy.visit('https://the-internet.herokuapp.com/hovers')
        .get('.figure').first().trigger('mouseover');
  
      // Perform Drag and Drop
      cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
        .get('#column-a').drag('#column-b');
  
      // Perform Data driven Testing into the login form using Excel or any other data sources
      // This step requires additional context such as the structure of the Excel file or data source.
      
    });
  });
  