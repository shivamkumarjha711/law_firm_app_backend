import express from "express";
import { config } from "dotenv";
import userRoutes from "./routes/userRoute.js";
import contactRoutes from "./routes/miscellaneousRoute.js";


// Config for env file
config();


const app = express();

app.use(express.json());



// Routes
app.use("/api/v1/user", userRoutes)
app.use("/api/v1/miscellaneous", contactRoutes)


export default app;