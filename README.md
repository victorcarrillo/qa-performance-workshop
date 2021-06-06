1. Project Overview : 
    - This repository explains a way to test perfomance on a website. In this case, we will be using todoist app.

2. Instructions and preconditions to run the project :
    - npm init : To initialize a npm project.
    - npm install --save-dev artillery : To install locally Artillery libraries.
    - You must have an active account in https://todoist.com/app/today  in order to retrieve a token of authentication to interact with the application.
    - export TOKEN=<<the number of your token>> in order to have a session token in your system and with that you avoid to hardcode your token into the code.
    - npm i faker : To generate and support a file that will create random data.

3. Project Structure : 
    This project has a basic structure :
    |-.gitignore : Contains files that will be ignore through the submission in git.
    |-package.json : This File has  instructions, versions and application contained in this project
    |-qa-challenge.yml : Contains the instructions that artillery will be running to execute the challenge.
    |-randomData.js : This file has supportive libraries using Faker.js to generate random data.


4. Running the project : 
    The Following scripts have been loaded to run the project :
    * npm run test-challenge : This script will run qa-challenge.yml file to test the perfomance of the application.
    * npm run test-challenge-report : This will run the same yml but it will create a json report to have a better overview of the execution status.



