import express from "express";
import cors from "cors";

import ItemRoute from "./routes/itemRoute.js";
import MemberRoute from "./routes/memberRoute.js";

import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import postRoute from "./routes/postRoute.js";

const app = express();
const FRONTEND_URL = "http://34.196.111.214:3221"

// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// allow request from other origin (Frontend which is at different port)
// const corsOptions = {
//     origin: `${FRONTEND_URL}`,
//     credentials: true,
//   };
// app.use(cors(corsOptions));
app.use(cors());

// use routes
app.use("/items", ItemRoute);
app.use("/members", MemberRoute);

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/posts", postRoute);
export default app;