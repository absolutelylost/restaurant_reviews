import express, { application } from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js"

const app = express()//makes server

//apply middleware

app.use(cors())
app.use(express.json())//can accept jsonin body of request. can read json

app.use("/api/v1/restaurants", restaurants)//inital url, route
//route they go to another route that isnt there
app.use("*", (req, res) => res.status(404).json({error: "not found}"}))

export default app
