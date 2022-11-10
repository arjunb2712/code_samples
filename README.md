# Backend is developed using NodeJs, ExpressJs with MySQL/PostgreSQL/MongoDB


## Steps for deployment
Step1: Set the type of database you are going to use in app.js and controllers/user.controller.js

Step1: Set your PORT, DATABASE details inside your corresponding .env file inside backend/environments/

Step2: Execute any of the below available scripts, as per your requirement

### `npm run local`

Runs the app in our local development system:

Open [http://localhost:5000/api/user] to view it in your browser.


### `npm run demo`

Runs the app in the Capital Number's Demo server:

Open [http://dev80.developer24x7.com:5010/api/user] to view it in your browser.


### `npm run prod`

Runs the app in the Client's staging server:

Open [....] to view it in your browser.



# To setup Database
## PostgreSQL
    On cmd run as Administrator> cd C:\Program Files\PostgreSQL\14\bin
    Now C:\Program Files\PostgreSQL\14\bin>psql -U postgres -d demo < D:/Ipsita/practice/Node-Angular-React-framework/Node-JS/database/PostgreSQL/demo
    Or
    pg_restore -U postgres -d demo D:/Ipsita/practice/Node-Angular-React-framework/Node-JS/database/PostgreSQL demo

## MongoDB
    Step1: Download & Install MongoDB
        https://www.mongodb.com/try/download/community-kubernetes-operator
        https://www.geeksforgeeks.org/how-to-install-mongodb-on-windows/#:~:text=How%20to%20Install%20MongoDB%20on%20Windows%3F%201%20Step,install%20all%20the%20program%20features.%20...%20More%20items
    Step2: Download & Install No-sql booster
    Step3: Create database(demo) through NoSQL booster
    Step4: In postman add a new user through api endpoint. The collection(users) will be automatically created.

## MySQL

