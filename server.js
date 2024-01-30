import app from "./app.js";
import connectionDB from "./config/dbConnection.js";



app.listen(process.env.PORT, async () => {
    await connectionDB();      // Database Connection
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
})