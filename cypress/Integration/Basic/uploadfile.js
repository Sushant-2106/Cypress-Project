describe('Upload File', () => {
    it('Upload test', () => {

        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').selectFile('C:/Users/pjha0/OneDrive/Desktop/WhatsApp Image 2024-09-10 at 22.07.20_928d8f88.jpg');
        cy.get('#file-submit').click();
        
    });
});