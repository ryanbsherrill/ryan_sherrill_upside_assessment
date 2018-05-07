## To Run Tests Locally:

#### 1. Install TestCafe
`npm install -g testcafe`

#### 2. Clone GitHub repository
`git clone https://github.com/ryanbsherrill/upside_assessment.git`

#### 3. Change directories into project folder
`cd upside_assessment`

#### 4. Run tests: ```<testcafe + browser + test file>```
`testcafe chrome ui_tests.js || testcafe safari ui_tests.js || testcafe firefox ui_tests.js`
____________________________________________________________________________________________

## Test Cases

#### Verify that...

- [x] 1. User can navigate to upside.com
- [x] 2. User can navigate to **How it works** page via **How Upside Works** link
- [x] 3. **You get choices** section appears on **How it works** page
- [x] 4. **You get choices** section has text appearing
- [x] 5. User can click **Book Now** and it takes them to upside.com/travel web form
- [x] 6. upside.com/travel web form has text inputs for origin and destination of flight
- [x] 7. User can fill out upside.com/travel web form and click **Get Started**
____________________________________________________________________________________________

## Quality Check

#### Verify that...

- [x] Tests are clear
- [ ] Tests are reliable: Reliable with Chrome and Safari, issues with Firefox
- [x] Tests are maintainable