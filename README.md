# GenAI Hackathon

This project aims to build a web application to expose ChatGPT like interface in order for users to ask questions about a dataset.

## Tech stack

The web application would be served by Flask framework in python. The frontend is written in Angular. The Flask app uses a python library to interface with a Large Language Model(LLM).

## Building the application

* Install Flask framework by following directions [here](https://flask.palletsprojects.com/en/3.0.x/installation/)
* Navigate to hackathon-ui directory `cd hackathon-ui`
* Install node modules `npm i`
* Build the Angular application to output static files by running `npm run build`

## Running the application

After the application dependencies are installed follow the steps below to run the application:
* Navigate to server directory `cd server`
* Activate the virtual environment which allows a user to create a sandbox environment in python using `. .venv/bin/activate`
* Run the flask application - `flask --app index run`
* Navigate to the Angular application directory - `cd hackathon-ui`
* Run the Angular application - `npm start`
