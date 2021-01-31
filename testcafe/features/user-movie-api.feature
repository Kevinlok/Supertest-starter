Feature: testen van de user movie api

Scenario: get healthcheck failed
    Given I am doing a healthcheck on the user movie api "without" an key
    Then I expect a response status 401
    And expect that the error contains "message" "Invalid API key"

Scenario: get healthcheck
    Given I am doing a healthcheck on the user movie api "with" an key
    Then I expect a response status 200
    And expect that the body contains "STATUS" "Good to go!"

Scenario: Register user
    Given I make a post request to register a user
    Then I expect a response status 201
    And expect that the body contains the user email

@Register
Scenario: Login user
    Given I login with the user
    Then I expect a response status 200
    And expect that the body contains a token

@Register @Login
Scenario: Add movie
    Given I add a movie with a random title
    Then I expect a response status 201
    And expect that the body contains the title 
    And expect that the body contains movie year

