describe('Using data driven approach', () => {

    
        //define before hook
        before(() => {
            //code to connect with the external file- example.json.
            cy.fixture('example.json').then((data)=>{
                //initialize my code(data), i have to make it a global instance.
                globalThis.data=data;
                
            })
        });

    it('test1', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type(data.Username)
        cy.get('[type="password"]').type(data.password)
        cy.get('[type="submit"]').click();

        
    });

    it('test2', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type(data.InvalidUsername)
        cy.get('[type="password"]').type(data.Invalidpassword)
        cy.get('[type="submit"]').click();

        
    });
});