import express from "express";
import { config } from "dotenv";
import userRoutes from "./routes/userRoute.js";


// Config for env file
config();


const app = express();

app.use(express.json());



// Routes
app.use("/api/v1/user", userRoutes)


export default app;