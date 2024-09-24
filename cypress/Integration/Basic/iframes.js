describe('iFrames', () => {
    it('iFrame test', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.frameLoaded('#courses-iframe')
    //Using iFrame() if i need to check for a blog element and then clicking on it
    cy.iframe().contains('Blog').click();
    });

    it('test2', () => {

        cy.visit('https://v1.training-support.net/selenium/iframes')
        //cy.frameLoaded('iframe[src="/selenium/frame1"]')
        cy.iframe('iframe[src="/selenium/frame1"]').find('#actionButton').first().click();
        
    });
});