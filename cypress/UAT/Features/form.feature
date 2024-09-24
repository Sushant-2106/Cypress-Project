Feature: Simple Form
Scenario: To verify the form is working for all mandatory fields
Given Open browser enter simple form url
When User enters firstname, lastname, email, contact
And Click on submit button
Then Successful alert should be displayed with a message

    