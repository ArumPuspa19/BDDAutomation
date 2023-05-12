$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Sales.feature");
formatter.feature({
  "line": 2,
  "name": "SalesFlow",
  "description": "As a user  I want to buy something",
  "id": "salesflow",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Sales"
    }
  ]
});
formatter.before({
  "duration": 10818294000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User make a purchase with 2 item",
  "description": "",
  "id": "salesflow;user-make-a-purchase-with-2-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User already on website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User input \"standard_user\" as userName and input \"secret_sauce\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User already on sales page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User sort product list by \"Name (Z to A)\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User pick 2 item from the basket Sauce Labs Onesie and Sauce Labs Bike Light",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click chart button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verify Chart Page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User Remove 1 item",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User click Checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User input \"Arum\" as firstName , input \"Puspa\" as lastName and input \"19293\" as posCode",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Verify button finish",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyLandingPage()"
});
formatter.result({
  "duration": 943685600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 50
    }
  ],
  "location": "LoginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 1030536700,
  "status": "passed"
});
formatter.match({
  "location": "SalesSteps.verifySalesPage()"
});
formatter.result({
  "duration": 263367100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (Z to A)",
      "offset": 27
    }
  ],
  "location": "SalesSteps.sortProduct(String)"
});
formatter.result({
  "duration": 344573900,
  "status": "passed"
});
formatter.match({
  "location": "SalesSteps.click2Product()"
});
formatter.result({
  "duration": 304484800,
  "status": "passed"
});
formatter.match({
  "location": "SalesSteps.clickChart()"
});
formatter.result({
  "duration": 190273800,
  "status": "passed"
});
formatter.match({
  "location": "SalesSteps.verifyChartPage()"
});
formatter.result({
  "duration": 82135000,
  "status": "passed"
});
formatter.match({
  "location": "SalesSteps.removeItem()"
});
formatter.result({
  "duration": 146492500,
  "status": "passed"
});
formatter.match({
  "location": "SalesSteps.checkout()"
});
formatter.result({
  "duration": 159857200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Arum",
      "offset": 12
    },
    {
      "val": "Puspa",
      "offset": 40
    },
    {
      "val": "19293",
      "offset": 70
    }
  ],
  "location": "SalesSteps.inputCredential(String,String,String)"
});
formatter.result({
  "duration": 937138800,
  "status": "passed"
});
formatter.match({
  "location": "SalesSteps.clickFinish()"
});
formatter.result({
  "duration": 156528200,
  "status": "passed"
});
formatter.after({
  "duration": 4239868600,
  "status": "passed"
});
});