describe('Tab test', () => {
    it('tab test 1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.xpath('//a[@id="opentab"]').invoke('removeAttr','target').click();

        // to work on different url we have to use the cy.origin to navigate on the another url.

        cy.origin('https://www.qaclickacademy.com/',()=>{
            cy.contains('Courses').click();
            cy.log(cy.url()); // It is to log the url.
        })
        
    });
});