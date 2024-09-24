class Logout{

    // Re-usable method for logout operation.
    LogoutOfApp(){
    cy.get('.oxd-userdropdown-name').click();
    cy.wait(2000);
    cy.get('.oxd-dropdown-menu').find('[role="menuitem"]').each(($ele)=>{
        if($ele.text()=='Logout') {

            cy.wrap($ele).click();
        }
})
    }
}
export default Logout;