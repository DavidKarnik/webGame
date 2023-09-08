# Web Game Project

Just for learn TypeScript, Angular and comunication Frontend <-> Backend (Java - Spring) <-> MySQL database. Project of simple Web Game. Event click on targets to Score/Miss. Project is implemented with several tools, IDEs and languages so there is little mess in files atm.

# Main Idea
Simple web game (click on target to get point). <- Frontend, Backend -> Send data to Java Spring boot and manage them. Store them into DATABASE and send Leaderboard to the Frontend.

# Logic
Load main page with score == 0, blank nickname textbox, time set to 10 seconds and svg target in the middle. When target is clicked start time t=10 until t=0 and save nickname to temporary variable. If player click in target radius, add score++. When miss-click target do miss++. After every click change target position. When t=0 stop game, show results (modal), send data to backend, do logic and store them into the MySQL database. Restart.

# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

# Images

Typescript, HTML, CSS

Java Spring Boot
