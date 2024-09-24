// 1.   jQuery is primarily used for manipulating the DOM and does not have built-in assertion capabilities. 
    // However, you can use jQuery to check if an element contains specific text.
    // Example-

    // jQuery example to check if an element contains specific text
if ($('#elementId').text().includes('expected text')) {
    console.log('Text found');
  } else {
    console.log('Text not found');
  }
// Cypress:

// Cypress is a testing framework that includes built-in assertions.  

// Cypress example to check if an element contains specific text
cy.get('#elementId').should('contain.text', 'expected text');

// 2. jQuery does not have built-in error handling for elements that might not be immediately available.
// /You often need to use custom logic or additional libraries.

// jQuery example with custom error handling
function checkElement() {
    if ($('#elementId').length) {
      console.log('Element found');
    } else {
      console.log('Element not found');
    }
  }
  setTimeout(checkElement, 1000); // Retry after 1 second
// Cypress automatically retries commands until the element is found or a timeout occurs.

// Cypress example with built-in retry mechanism
// cy.get('#elementId', { timeout: 10000 }).should('be.visible'); // Wait up to 10 seconds

// Q3: Key Differences Between jQuery Methods and Cypress Commands
Functionality:

// jQuery: Primarily used for DOM manipulation and event handling.
// Cypress: Used for end-to-end testing with built-in commands for assertions, waiting, and more.
// Execution Flow:

// jQuery: Executes synchronously.
// Cypress: Executes commands asynchronously with automatic retries.
// Example of Button Click:

// jQuery:

// jQuery example to click a button
$('#buttonId').click();
// Cypress example to click a button
cy.get('#buttonId').click();
