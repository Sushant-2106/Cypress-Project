describe('Web interaction test', () => {
    it('Handles dynamic loading, tables, and alerts', () => {
        // Visit the dynamic loading page and wait for the "Hello World" text
        cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1');
        cy.contains('Start').click();
        cy.contains('Hello World', { timeout: 10000 }).should('be.visible'); // waits up to 10 seconds

        // Visit the tables page and fetch required values
        cy.visit('https://the-internet.herokuapp.com/tables');
        cy.get('table#table1 tbody tr:nth-child(4) td:nth-child(3)').then($cell => {
            console.log('Value from Table 1, Row 4, Column 3:', $cell.text());
        });
        cy.get('table#table2 tbody tr:nth-child(2) td:last-child').then($cell => {
            console.log('Value from Table 2, Row 2, Last Column:', $cell.text());
        });

        // Visit the window manipulation page and handle new window
        cy.visit('https://the-internet.herokuapp.com/windows');
        cy.contains('Click Here').click();
        cy.get('h3', { timeout: 10000 }).should('contain', 'New Window');

        // Visit the alerts page and handle alerts
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.contains('Click for JS Alert').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am a JS Alert');
        });
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('I am a JS Confirm');
            return true; // click 'OK'
        });
        cy.contains('Click for JS Prompt').click();
        cy.window().then($win => {
            cy.stub($win, 'prompt').returns('Cypress Test');
        });
    });
});
