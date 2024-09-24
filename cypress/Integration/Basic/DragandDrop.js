/// reference types = "cypress-xpath"/>
describe('Drag & Drop', () => {
    it('Drag test', () => {

        cy.visit('https://v1.training-support.net/selenium/drag-drop')
        //{which:1}  That means i want to work with left mouse button
        //{which:2} That means i want to work with middle mouse button
        //{which:3} That means i want to work with right mouse button
        cy.get('#draggable').trigger('mousedown',{which:1}) 

        // mousemove means we are telling the cypress to move the mouse from 1 point to another
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true})

        cy.get('#draggable').trigger('mousedown',{which:1}) 
        cy.get('#dropzone2').trigger('mousemove').trigger('mouseup', {force:true})
        
    });
});


