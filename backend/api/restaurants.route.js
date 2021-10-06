import express from "express" 

const router = express.Router() //access express router. create routes people can go to

router.route("/").get((req, res) => res.send("hello world"))// create route

export default router
