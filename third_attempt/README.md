# Production-Grade Notes API (Third Attempt)

A clean, production-grade REST API built using Node.js, Express, MongoDB/Mongoose, and modern ES Modules (`import`/`export`). This attempt includes a full MVC architecture structure and implements the `DELETE` API endpoint.

---

## Folder Structure

```text
third_attempt/
├── src/
│   ├── config/
│   │   └── db.js          # MongoDB database connection configuration
│   ├── controllers/
│   │   └── noteController.js # Handles request logic for Note resources
│   ├── models/
│   │   └── noteModel.js   # Mongoose Note Schema and validations
│   ├── routes/
│   │   └── noteRoutes.js  # Mounts note API endpoints to controller actions
│   ├── utils/
│   │   └── asyncHandler.js# Helper to catch asynchronous endpoint errors
│   └── app.js             # Express app setup and middleware routing configuration
├── .env                   # Environment configurations
├── .gitignore             # Git ignored files configuration
├── package.json           # Node scripts and project dependencies
└── server.js              # Server entry point
```

---

## Getting Started

### Prerequisites
* Node.js installed
* MongoDB connection URI (configured via `.env`)

### Installation & Execution
1. Navigate to the `third_attempt` directory:
   ```bash
   cd third_attempt
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure the `.env` variables (e.g. `PORT`, `NODE_ENV`, `MONGO_URI`).
4. Start the application in development mode:
   ```bash
   npm run dev
   ```

---

## API Documentation

### 1. Create a Note
* **URL:** `/api/notes`
* **Method:** `POST`
* **Headers:** `Content-Type: application/json`
* **Request Body:**
  ```json
  {
    "title": "Shopping List",
    "description": "Buy groceries, milk, and eggs for this week.",
    "category": "personal"
  }
  ```
* **Success Response (201 Created):**
  ```json
  {
    "success": true,
    "data": {
      "_id": "603d277717f9fb18a02c8152",
      "title": "Shopping List",
      "description": "Buy groceries, milk, and eggs for this week.",
      "category": "personal",
      "isCompleted": false,
      "createdAt": "2026-05-27T17:00:24.000Z",
      "updatedAt": "2026-05-27T17:00:24.000Z",
      "__v": 0
    }
  }
  ```

### 2. Get All Notes
* **URL:** `/api/notes`
* **Method:** `GET`
* **Success Response (200 OK):**
  ```json
  {
    "success": true,
    "count": 1,
    "data": [
      {
        "_id": "603d277717f9fb18a02c8152",
        "title": "Shopping List",
        "description": "Buy groceries, milk, and eggs for this week.",
        "category": "personal",
        "isCompleted": false,
        "createdAt": "2026-05-27T17:00:24.000Z",
        "updatedAt": "2026-05-27T17:00:24.000Z"
      }
    ]
  }
  ```

### 3. Get Note By ID
* **URL:** `/api/notes/:id`
* **Method:** `GET`
* **Success Response (200 OK):**
  ```json
  {
    "success": true,
    "data": {
      "_id": "603d277717f9fb18a02c8152",
      "title": "Shopping List",
      "description": "Buy groceries, milk, and eggs for this week.",
      "category": "personal",
      "isCompleted": false,
      "createdAt": "2026-05-27T17:00:24.000Z",
      "updatedAt": "2026-05-27T17:00:24.000Z"
    }
  }
  ```

### 4. Update Note (Partial Update)
* **URL:** `/api/notes/:id`
* **Method:** `PATCH`
* **Headers:** `Content-Type: application/json`
* **Request Body:**
  ```json
  {
    "isCompleted": true,
    "description": "Buy groceries, milk, eggs, and bread for this week."
  }
  ```
* **Success Response (200 OK):**
  ```json
  {
    "success": true,
    "data": {
      "_id": "603d277717f9fb18a02c8152",
      "title": "Shopping List",
      "description": "Buy groceries, milk, eggs, and bread for this week.",
      "category": "personal",
      "isCompleted": true,
      "createdAt": "2026-05-27T17:00:24.000Z",
      "updatedAt": "2026-05-27T17:15:30.000Z"
    }
  }
  ```

### 5. Delete Note
* **URL:** `/api/notes/:id`
* **Method:** `DELETE`
* **Success Response (200 OK):**
  ```json
  {
    "success": true,
    "message": "Note deleted successfully"
  }
  ```
