# CRUD Notes/Todo Backend API Workspace

Welcome to the production-grade CRUD Notes/Todo API learning workspace. This project illustrates the step-by-step development journey, starting from initial configurations up to modern production-ready architectures using Express, MongoDB, and Mongoose with ES Modules.

---

## 📂 Workspace Structure

This workspace is organized into three progressive implementations (attempts) detailing different coding patterns:

### 1. [First Attempt](./first_attempt) & [Second Attempt](./second_attempt)
* **Architecture Pattern:** Flat/Monolithic routing inside `src/app.js` with manual request validations.
* **ES Modules (`import`/`export`)**: Supported.
* **Database Connection:** Connected to local MongoDB instance (`mongodb://localhost:27017/kodex`).
* **CRUD Operations:** Implements `POST` (create), `GET` (fetch all), and `PATCH` (update) endpoints.
* **Delete Route:** Excluded (following specific repository constraints).

### 2. [Third Attempt](./third_attempt)
* **Architecture Pattern:** Complete **MVC (Model-View-Controller)** pattern.
* **ES Modules (`import`/`export`)**: Supported.
* **Database Connection:** Dynamic environment config (`dotenv`) support for MongoDB Atlas / Local MongoDB.
* **Robust Exception Handling:** Implements an `asyncHandler` wrapper utility to catch asynchronous controller exceptions and pass them clean to Express.
* **CRUD Operations:** Implements all endpoints: `POST` (create), `GET` (fetch all/single), `PATCH` (update), and `DELETE` (delete).
* **Timestamps:** Automated `createdAt` and `updatedAt` tracking.

---

## 🛠️ Tech Stack
* **Runtime:** Node.js
* **Framework:** Express.js (v5+)
* **Database:** MongoDB
* **ODM (Object Document Mapper):** Mongoose (v9+)
* **Process Manager:** Nodemon (for development reloading)
* **Environment variables:** dotenv

---

## 🚀 How to Run the Projects

Choose the attempt folder you wish to run:

```bash
# Navigate to the chosen implementation directory
cd third_attempt # or first_attempt / second_attempt

# Install all workspace dependencies
npm install

# Start the dev server with Nodemon
npm run dev
```

---

## 🧪 Postman API Endpoints Cheat Sheet

| Endpoint | Method | Payload Example | Description |
| :--- | :---: | :--- | :--- |
| `/api/notes` | `POST` | `{"title": "Note Title", "description": "At least 10 chars", "category": "work"}` | Creates a new note |
| `/api/notes` | `GET` | *None* | Fetches list of all notes |
| `/api/notes/:id` | `GET` | *None* | Fetches a single note details by its ID |
| `/api/notes/:id` | `PATCH` | `{"description": "Updated description at least 10 chars"}` | Updates details of a specific note |
| `/api/notes/:id` | `DELETE` | *None* | Removes a note by its ID (Third Attempt only) |

---

For directory-specific configurations, please refer directly to their individual `README.md` documents:
* [First Attempt README](./first_attempt/README.md)
* [Third Attempt README](./third_attempt/README.md)
