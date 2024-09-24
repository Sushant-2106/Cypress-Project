class Links{

    //Method to click on a link.

    ClickOnLink(LinkText){
        // I am passing the text of the link from IT block and in this method i am clicking on the link.
        cy.contains(LinkText).click();
    }
}
export default Links;