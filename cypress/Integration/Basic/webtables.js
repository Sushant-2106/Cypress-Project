describe('Webtables', () => {
    it('Webtable test', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.xpath('//table[@name="courses"]/tbody/tr[8]/td[2]').then(($ele=>{

            // cy.log is used to print something in the console of cypress
            cy.log($ele.text());


        }))
        
    });

    it('', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.xpath('//table[@name="courses"]/tbody/tr[8]/td').each($ele=>{ // $ele is the j query element so it is converting it for cypress
            if ($ele.text().includes('Bugzilla')){
                // next() will point out to the next element
                cy.wrap($ele).next().then((num)=>{ // cy.wrap is used 
                    cy.log(num.text())
                })
            }

            
            
    });
});


});
