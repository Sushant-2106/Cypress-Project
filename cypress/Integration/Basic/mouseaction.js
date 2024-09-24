
describe('Mouse test', () => {
    it('Right click test', () => {

        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
        cy.xpath("//*[contains(text(),'right click me')]").rightclick();
        cy.xpath("//span[contains(text(),'Quit')]").click();
        cy.get('[ondblclick="myFunction()"]').click();
        
    });
});