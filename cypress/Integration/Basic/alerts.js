describe('Alert', () => {
    it('alert check', () => {
        var name= 'Sushant'

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#name').type(name)
        cy.get('#alertbtn').click();
        cy.on('window:alert', (text)=>{
            expect(text).to.contains(name)

        cy.get('#confirmbtn').click();
        cy.on('window:confirm',(alert2)=>{
            expect(alert2).to.contains('Hello , Are you sure you want to confirm?')

            // return true
            return false;
        })

        })
        
    });
});