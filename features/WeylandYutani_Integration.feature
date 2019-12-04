@GitHub @UserLogin @shoppingcart
Feature: Weyland-Yutani Integration
    WebOrders

  @GitHub @UserLogin @Authentication @Sprint-1
  Scenario Outline: Login (<hiptest-uid>)
    We want to login to the Awesome Web Store
    Given navigation to the URL of the WebOrders has been successful
    And the username of "<username>" is inputted into the username field
    And the password of "<password>" is inputted into the password field
    And the 'Login' button is clicked
    Then a successful login will take place
    And the value is from the "= database"
    And this is a "= test "

    Examples:
      | username | password | hiptest-uid |
      | alice@localhost | password |  |
      | bob@localhost | password |  |
      | eve@localhost | password |  |
      |  |  |  |

  @Authentication @Sprint-1
  Scenario: Logout
    When I click the logout button
    Then I'm returned to the login window

  @Sprint-2
  Scenario: Purchasing a Blueray Player
    Given I have logged in
    And I can go to the "item" product page
    When I click 'Add to Cart'
    Then my cart contains one of "item"

  Scenario: Login2
    Given I have logged in
    When I click the logout button
    Then I click the logout button

  Scenario: Better Login
    Given i can access the website
    And I use "my" good credentials
    Then I can log in successfully

  Scenario: Verify Our Order is for the Correct Product
    Given we have an Operation to get Order Info
    When we ask about an Order
    Then the correct details are given
