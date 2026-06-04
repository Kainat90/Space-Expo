# SpaceExpo Launch Control API

## Overview

SpaceExpo Launch Control is a simple RESTful CRUD API built with NestJS, Prisma, and MySQL for managing rockets and their mission information. The API allows users to create, retrieve, update, and delete rocket records while providing interactive API documentation through Swagger.

---

## Features

* Create new rockets
* Retrieve all rockets
* Retrieve a rocket by ID
* Update existing rockets
* Delete rockets
* Swagger API documentation
* MySQL database integration using Prisma ORM

---

## Technology Stack

* NestJS
* Prisma ORM
* MySQL
* TypeScript
* Swagger (OpenAPI)

---

## Project Structure

```text
src/
├── rockets/
│   ├── rockets.controller.ts
│   ├── rockets.service.ts
│   ├── rockets.module.ts
│   └── create-rockets.dto.ts
├── prisma.service.ts
├── app.module.ts
└── main.ts
```

---

## Rocket Model

| Field       | Type    |
| ----------- | ------- |
| id          | Integer |
| name        | String  |
| status      | String  |
| launch      | String  |
| destination | String  |

---

## API Endpoints

### Create Rocket

```http
POST /rockets
```

Request Body:

```json
{
  "name": "Eagle908",
  "status": "Active",
  "launch": "2020",
  "destination": "Mars"
}
```

---

### Get All Rockets

```http
GET /rockets
```

---

### Get Rocket By ID

```http
GET /rockets/{id}
```

Example:

```http
GET /rockets/1
```

---

### Update Rocket

```http
PUT /rockets/{id}
```

Request Body:

```json
{
  "name": "Eagle909",
  "status": "Active",
  "launch": "2021",
  "destination": "Moon"
}
```

---

### Delete Rocket

```http
DELETE /rockets/{id}
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd spaceexpo-launch-control
```

Install dependencies:

```bash
npm install
```

Configure your database connection in the Prisma configuration.

Run database migrations:

```bash
npx prisma migrate dev
```

Generate Prisma Client:

```bash
npx prisma generate
```

Start the application:

```bash
npm run start:dev
```

---

## Swagger Documentation

After starting the application, Swagger UI can be accessed at:

```text
http://localhost:3000/api
```

This interface allows users to explore and test all available API endpoints directly from the browser.

---

## Author

Developed as part of the SpaceExpo Launch Control project using NestJS, Prisma, MySQL, and Swagger.
