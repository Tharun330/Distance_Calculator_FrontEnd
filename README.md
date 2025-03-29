## Distance Calculator Frontend

## How to setup project into your machine
1. Download Docker Desktop and install it.
2. Clone this respo into your vsCode.
3. Open terminal, run command Docker-compose up --build
4. Open the navigate to the local path which comes in the logs or try this url (http:localhost:5173) you can find application in your browser, but actually application is running in docker container.
 

## How to use?
Provide two addresses source address, destination address and select the unit of distance like Kilometers, Miles or both 
and click on Calculate distance button, you will get results in distance section. You will find 'View History Queries' button by clicking that you can find your previous search history

## Backend Endpoints
To get the data(qurey history) from DB use /history
example: http://localhost:8080/history

To post new query into the DB /history/new
example: http://localhost:8080/history/new
