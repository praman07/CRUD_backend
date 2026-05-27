# Kodex Notes API (Second Attempt)

A clean, production-ready REST API built with Node.js, Express, and MongoDB, adhering to the ES modules standard.

---

## Folder Structure

```text
second_attempt/
├── src/
│   ├── config/
│   │   └── db.js         # MongoDB connection config
│   ├── models/
│   │   └── notes.model.js # Notes Mongoose schema & model
│   └── app.js            # Express app configuration & API routes
├── .gitignore            # Git ignore configuration
├── package.json          # Node dependencies & project script definitions
└── server.js             # API server startup entry point
```

---

## Getting Started

### Prerequisites
* Node.js installed
* MongoDB local instance running at `mongodb://localhost:27017`

### Installation & Run
1. Clone the repository and navigate to the directory:
   ```bash
   cd second_attempt
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server (runs nodemon):
   ```bash
   npm run dev
   ```

---

## API Endpoints

### 1. Create a Note
* **URL:** `/api/notes`
* **Method:** `POST`
* **Headers:** `Content-Type: application/json`
* **Request Body:**
  ```json
  {
    "title": "My Note Title",
    "description": "This is a detailed description of my note."
  }
  ```
* **Success Response (201 Created):**
  ```json
  {
    "message": "Note created successfully",
    "note": {
      "_id": "603d277717f9fb18a02c8152",
      "title": "My Note Title",
      "description": "This is a detailed description of my note.",
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
    "message": "Notes fetched successfully",
    "notes": [
      {
        "_id": "603d277717f9fb18a02c8152",
        "title": "My Note Title",
        "description": "This is a detailed description of my note.",
        "__v": 0
      }
    ]
  }
  ```

### 3. Update a Note
* **URL:** `/api/notes/:id`
* **Method:** `PATCH`
* **Headers:** `Content-Type: application/json`
* **Request Body:**
  ```json
  {
    "description": "This is an updated description that is long enough."
  }
  ```
* **Success Response (200 OK):**
  ```json
  {
    "message": "Note updated successfully",
    "note": {
      "_id": "603d277717f9fb18a02c8152",
      "title": "My Note Title",
      "description": "This is an updated description that is long enough.",
      "__v": 0
    }
  }
  ```
