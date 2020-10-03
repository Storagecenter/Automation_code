# Automation_code
This project contains the code of the Assesment sceanrio's
This code was written using Java script & Webdriverio using Mocha Frame work
Chai is used for Assertion
Report is generated as Allure report

#Pre -Request

1.Install node js in local system
2.Install git 
3.Pull code from Git 
4.Install NPM 

#To run the code

1.Redirect to the test folder
2.Run comments in a terminal to get over all result -wdio wdio.conf.js
3.Run individual spec file - wdio wdio.conf.js --spec test/specs/**.js
4.To run all the test inside spec file -wdio wdio.conf.js --spec

#To generate allure report -use following commands in terminal

1.allure generate [report directory]/.bin/allure-results
2.To open graphical report -allure open
3.To rerun the  allure report - allure generate --clean allure reports


