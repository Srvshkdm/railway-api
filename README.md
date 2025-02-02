# railway-api


Welcome to the Railway API project! This API provides various endpoints to manage and retrieve information about railway operations.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Contributing](#contributing)

## Introduction

The Railway API allows users to interact with railway data, including train schedules, station information, and ticket bookings.
1. Register a User
   Create an endpoint for registering a user.
2. Login User
   Provide the ability to the user to log into his account
3. Add a New Train
   An endpoint for the admin to create a new train with a source and destination
4. Get Seat Availability
   Create an endpoint for the users where they can enter the source and destination and fetch all the trains between that route with their availabilities.
5. Book a Seat
   Create an endpoint for the users to book a seat on a particular train
6. Get Specific Booking Details
   Create an endpoint for the users to book a seat on a particular train


## Installation

To install the Railway API, follow these steps:

1. Clone the repository:
    bash
    git clone https://github.com/Srvshkdm/railway-api
    
2. Navigate to the project directory:
    bash
    cd railway-api
    
3. Install the dependencies:
    bash
    npm install
    

## Usage

To start the server, run:

npm start


The API will be available at http://localhost:5000.

## Endpoints

### Get Train Schedules

- URL: /api/trains
- Method: GET
- Description: Retrieve a list of train schedules.

### Get Station Details

- URL: /api/stations/:id
- Method: GET
- Description: Get details of a specific station by ID.

### Book Ticket

- URL: /api/tickets
- Method: POST
- Description: Book a new ticket.

### Cancel Ticket

- URL: /api/tickets/:id
- Method: DELETE
- Description: Cancel a ticket by ID.


