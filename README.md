# robot-movement

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![node-current](https://img.shields.io/node/v/inquirer)
![npm](https://img.shields.io/npm/v/jest)

![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-944058?style=for-the-badge&logo=jest&logoColor=white)


## <h2 id="description"> Description </h2>

A command line app that simulates a movement of a toy robot on a square tabletop, of dimensions 5 units x 5 units. There are no other obstructions on the table surface.

The robot is free to roam around the surface of the table, based on all valid movement commands.
Any command that would result in the robot falling from the table will not be executed.

This application that will read in commands of the following form -

    PLACE X,Y,facing
    MOVE
    LEFT
    RIGHT
    REPORT
  
Where `PLACE` will put the toy robot on the table in position `X`, `Y` and facing (`facing`) 
`NORTH`, `SOUTH`, `EAST` or `WEST`. `X` and `Y` accept any integer between 0 and 4 inclusive, and the origin (0,0) is considered to be the `SOUTH WEST` most corner of the table.

The first command to the robot that will get executed is a valid PLACE command.
And then, it will execute any sequence of valid commands that follow, including
another PLACE command. The application will discard all commands in the sequence until a valid PLACE command has been executed.

Where `MOVE` will move the toy robot one unit forward in the direction it is currently facing. A `MOVE` that would result in a robot moving off the table is considered valid, but the robot will not move on such command. 

Where `LEFT` and `RIGHT` will rotate the robot 90 degrees in the specified
direction without changing the position of the robot.

Where `REPORT` will announce the `X`, `Y` and `facing` of the robot. 

The application will read all the commands from a `.txt` file and log all valid commands and report its position on console. 


## <h2 id="table-of-contents"> Table of Contents </h2>

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution Guidelines](#contribution)
- [Tests](#tests)
- [Future Features](#future)
- [License](#license)


## <h2 id="installation"> Installation </h2>
[(Back to top)](#table-of-content)

To use this project, first clone the repo on your device using the commands below:

    git clone https://github.com/Supasiti/robot-movement.git

First, install NodeJS if you haven't already. You can download it from [here](https://nodejs.org/en/). Then install all the required libraries by running the follow command

    npm i 


## <h2 id="usage"> Usage </h2>
[(Back to top)](#table-of-content)

Type all the commands in an `/input.txt` file with a line separated between commands. For example:

    PLACE 0,0,NORTH
    MOVE
    REPORT

    PLACE 0,0,NORTH
    LEFT
    REPORT

    PLACE 1,2,EAST
    MOVE
    MOVE
    LEFT
    MOVE
    REPORT

Then run

    node index.js /relative_path_to/input.txt

and follow all the prompts. The output will be printed on the screen
Still confused? Follow a walkthrough [here](https://youtu.be/8h2MWKSXwrg).

## <h2 id="tests"> Tests </h2>
[(Back to top)](#table-of-content)

This project uses [Jest](https://jestjs.io) testing framework. This can be set up by running the following command:

    npm i --save-dev

Once the framework is downloaded, To test, run

    npm run test

Follow a video instruction [here](https://youtu.be/xZ06UrFN0Do);

## <h2 id="future"> Future Features</h2>
[(Back to top)](#table-of-content)

It would be very cool if the following features are implemented:
- graphical interface indicating where the robot is after each valid command; and
- command line prompt, which would make it interactive.

## <h2 id="license"> License </h2>
[(Back to top)](#table-of-content)

Licensed under the [MIT](https://opensource.org/licenses/MIT) license.
