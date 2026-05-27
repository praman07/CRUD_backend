import app from "./src/app.js";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";

// load env variables
dotenv.config();

const PORT = process.env.PORT || 5000;

// connect db then listen
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    });
});
