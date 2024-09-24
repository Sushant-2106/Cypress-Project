describe('Automation Test Store', () => {
    it('Add to cart functionality', () => {
        // visiting the profile
        cy.visit('https://automationteststore.com/')
        // selecting the Apparel and Accessories
        cy.get('a[href*="product/category&path"]').contains('Apparel & accessories').click()
        // selecting the tshirt option
        cy.get('[alt="T-shirts"]').click();
        // selecting the colour option
        cy.get('#option343').select('White');
        // selecting the size
        cy.get('#option344').select('Medium');
        // selecting the quantity
        cy.get('#product_quantity').clear().type('2')
        // selecting add to cart
        cy.get('button[title="Add to cart"]').click();
        // selecting checkout option
        cy.get('a[title="checkout"]').click();
        // selecting option as guest
        cy.get('input[value="guest"]')
        // slecting the register option
        cy.get('#accountFrmbutton[type="submit"]').click();
        // Entering the details
        cy.get('#guestFrm_firstname').type('Sushant');
        cy.get('#guestFrm_lastname').type('Mishra');
        cy.get('guestFrm_email').type('sushantmishra2110@gmail.com')
        cy.get('guestFrm_telephone').type(8240196250);
        cy.get('#guestFrm_fax').type(712248);
        cy.get('guestFrm_company').type('Taj Hotels');
        cy.get('#guestFrm_address_1').type('Zirakpur, Chandigarh')
        cy.get('#guestFrm_address_2').type('Near Punjab');
        cy.get('guestFrm_city').type('Chandigarh')
        cy.get('guestFrm_zone_id').select('Surrey')
        cy.get('#guestFrm_postcode').type(140603);
        cy.get('guestFrm_country_id').select('United Kingdom')
        cy.get('#guestFrm_shipping_indicator').click();
        cy.get([title="Continue"]).click();
        cy.get('loginFrm_password').type('Sushant@123')
        // continue
        cy.get('[fdprocessedid="os3ntv"]').click();
        // Closing the form
        cy.end();

    });
});