import { before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


// Given block in step defination
Given('Open browser enter simple form url',()=>{

    cy.visit('https://v1.training-support.net/selenium/simple-form')
})

// When block in step defination
When ('User enters firstname, lastname, email, contact',()=>{

cy.xpath('//input[@placeholder="First Name"]').type('Sushant')
cy.xpath('//input[@placeholder="Last Name"]').type('Mishra')
cy.xpath('//input[@id="email"]').type('sushantmishra2110@gmail.com')
cy.xpath('//input[@id="number"]').type('8240196250')
cy.xpath('//textarea[@rows="2"]').type('Hey Buddy')

})

// And block in step defination
And ('Click on submit button',()=>{
    cy.xpath('//input[@type="submit"]').click();
})

// Then block in step defination
Then ('Successful alert should be displayed with a message',()=>{

    cy.on('window:confirm',(alert2)=>{
        expect(alert2).to.contains('Thank You for reaching out to us, Sushant Mishra')

        // return true
        return false;
    })
})

