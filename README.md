# Railway Management System API 🚂

A simple API for managing train bookings and schedules. Built with Node.js, Express, and MySQL.

## Prerequisites

### 1. Install MySQL
- Download and install MySQL from [official website](https://dev.mysql.com/downloads/)
- Start MySQL service
- Create database:
```sql
CREATE DATABASE railway_db;
```

### 2. Set Up Environment
Create a `.env` file and add these details:
```env
# Database 
DB_HOST=localhost
DB_USER=root         
DB_PASS=yourpassword  
DB_NAME=railway_db    

# API 
PORT=5000
JWT_SECRET=your_jwt_secret
ADMIN_API_KEY=your_admin_api_key


## Project Setup

1. Create project folder:
```bash
mkdir railway-api && cd railway-api
```

2. Create these folders:
```bash
mkdir config models routes middlewares
```

3. Create main files:
```bash
touch server.js .env README.md
```

Your project will look like this:
```
railway-api/
├── config/        
├── models/        
├── routes/        
├── middlewares/   
└── server.js      # Main file
```

## Installation

1. Install Dependencies
```bash
npm install express mysql2 sequelize dotenv jsonwebtoken bcryptjs body-parser cors helmet morgan
```

2. Start Server
```bash
node server.js
```

## Testing Guide

**1)Download Postman in your PC**
**2)Click New on Top left Corner n Select HTTP to test requests**
**3)Select Method Type (POST,GET)**
**4)Paste the Url Provided**
**5)Change Headers n Body accordingly [Body is in json paste it as raw]**
**6)Send the Methods**



### 1. Register a User
```bash
 POST http://localhost:5000/api/auth/register \
 "Content-Type: application/json" \
   '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password",
    "role": "user"
}'
```

### 2. Login to Get Token
```bash
 POST http://localhost:5000/api/auth/login \
"Content-Type: application/json" \
'{
    "email": "john@example.com",
    "password": "password"
}'
```
Response:
```json
{
    "token": "your_jwt_token_here"
}
```

### 3. Add a Train (Admin Only)
```bash
 POST http://localhost:5000/api/trains \
"Content-Type: application/json" \
"admin-api-key: your_admin_api_key" \
-'{
    "name": "Express 101",
    "source": "City A",
    "destination": "City B",
    "totalSeats": 50
}'
```

### 4. Book a Seat
```bash
POST http://localhost:5000/api/bookings/1
"Content-Type: application/json" 
"Authorization: your_jwt_token_here"
```

### 5. View Your Bookings
```bash
GET http://localhost:5000/api/bookings 
"Authorization: your_jwt_token_here"
```

## API Endpoints Summary

### Users
- `POST /api/auth/register` - Create new account
- `POST /api/auth/login` - Login to account

### Trains
- `GET /api/trains` - View available trains
- `POST /api/trains` - Add new train (Admin only)

### Bookings
- `POST /api/bookings/:trainId` - Book a ticket
- `GET /api/bookings` - View your bookings

## Troubleshooting
- Make sure MySQL service is running
- Check if database credentials in `.env` are correct
- Ensure all required ports are free (default: 5000)



