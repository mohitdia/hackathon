# GenAI Hackathon

This project aims to build a web application to expose ChatGPT like interface in order for users to ask questions about a dataset.

## Tech stack

The web application would be served by Flask framework in python. The frontend is written in Angular. The Flask app uses a python library to interface with a Large Language Model(LLM).

## Build steps

* Install Flask framework by following directions [here](https://flask.palletsprojects.com/en/3.0.x/installation/)
* Navigate to hackathon-ui directory `cd hackathon-ui`
* Install node modules `npm i`
* Build the Angular application to output static files by running `npm run build`
* Navigate to the server directory `cd .. && cd server`
* Run `flask --app index run` to start the Flask server which would display the Angular application.
