import express from "express";
import morgan from "morgan";
import path from "path";
import cors from 'cors'

import routes from "./routes/routes.js";

const app = express();  

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

app.use(cors())

// Routes
app.use("/", routes);   

// Static Files
app.use(express.static(path.resolve("public")));

export default app;
