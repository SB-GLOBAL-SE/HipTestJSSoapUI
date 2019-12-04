module.exports = function () {
    this.Before(function (scenario) {
        this.actionwords = Object.create(require('./actionwords.js').Actionwords);
    });

    this.After(function (scenario) {
        this.actionwords = null;
    });


    this.Given(/^navigation to the URL of the WebOrders has been successful$/, function (callback) {
        this.actionwords.navigationToTheURLOfTheWebOrdersHasBeenSuccessful();
        callback();
    });

    this.Given(/^the username of "(.*)" is inputted into the username field$/, function (user, __datatable, callback) {
        this.actionwords.theUsernameOfUserIsInputtedIntoTheUsernameField(__datatable, user);
        callback();
    });

    this.Given(/^the password of "(.*)" is inputted into the password field$/, function (password, callback) {
        this.actionwords.thePasswordOfPasswordIsInputtedIntoThePasswordField(password);
        callback();
    });

    this.Given(/^the 'Login' button is clicked$/, function (callback) {
        this.actionwords.theLoginButtonIsClicked();
        callback();
    });

    this.Then(/^a successful login will take place$/, function (callback) {
        this.actionwords.aSuccessfulLoginWillTakePlace();
        callback();
    });

    this.When(/^I click the logout button$/, function (callback) {
        this.actionwords.iClickTheLogoutButton();
        callback();
    });

    this.Then(/^I'm returned to the login window$/, function (callback) {
        this.actionwords.imReturnedToTheLoginWindow();
        callback();
    });

    this.Given(/^I have logged in$/, function (callback) {
        this.actionwords.iHaveLoggedIn();
        callback();
    });

    this.Given(/^I can go to the "(.*)" product page$/, function (p1, callback) {
        this.actionwords.iCanGoToTheP1ProductPage(p1);
        callback();
    });

    this.When(/^I click 'Add to Cart'$/, function (callback) {
        this.actionwords.iClickAddToCart();
        callback();
    });

    this.Then(/^my cart contains one of "(.*)"$/, function (p1, callback) {
        this.actionwords.myCartContainsOneOfP1(p1);
        callback();
    });


    this.Then(/^the value is from the "(.*)"$/, function (p1, callback) {
        this.actionwords.theValueIsFromTheP1(p1);
        callback();
    });

    this.Then(/^this is a "(.*)"$/, function (p1, callback) {
        this.actionwords.thisIsAP1(p1);
        callback();
    });

    this.Given(/^i can access the website$/, function (callback) {
        this.actionwords.iCanAccessTheWebsite();
        callback();
    });

    this.Given(/^I use "(.*)" good credentials$/, function (p1, callback) {
        this.actionwords.iUseP1GoodCredentials(p1);
        callback();
    });

    this.Then(/^I can log in successfully$/, function (callback) {
        this.actionwords.iCanLogInSuccessfully();
        callback();
    });

    this.Given(/^we have an Operation to get Order Info$/, function (callback) {
        this.actionwords.weHaveAnOperationToGetOrderInfo();
        callback();
    });

    this.When(/^we ask about an Order$/, function (callback) {
        this.actionwords.weAskAboutAnOrder();
        callback();
    });

    this.Then(/^the correct details are given$/, function (callback) {
        this.actionwords.theCorrectDetailsAreGiven();
        callback();
    });
}
