import { config } from "dotenv";

//dotenv configuration
config();

import express, { Request, Response } from "express"
import db, { Error } from "mongoose"
import routes from "./routes";
import { json, urlencoded } from "body-parser";
import cors from "cors";

//Create the express app
const app = express();

const allowOrigins = ["http://localhost:3000"];

app.use(
    cors({
      origin: (origin, callback) => {
        if (allowOrigins.indexOf(origin!) !== -1 || !origin) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
    })
  );

app.use(json());

// if you are receiving url-encoded data in request-body
app.use(urlencoded({ extended: true }));

// Mount the routes at /resourse URL path
app.use("/", routes);

// error handling middleware
app.use((error: Error,req: Request,res: Response)=>{
    return res.status(500).json({message: error.message});
});

db.connect(process.env.MONGO_DB_URL!)
.then (() =>{
    console.log("Database Connected");

    app.listen(process.env.PORT, () =>{
        console.log("Server up port :4000")
      })
}).catch((error) =>{
    console.log("failed to connect MongoDB Server :",error.message)
})