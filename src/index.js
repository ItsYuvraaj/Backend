// require('dotenv').config({path: './env'})

import dotenv from "dotenv"
import connectDB from "./db/index.js"

//after using import syntax for dotenv we need to config it to work and give it a path of env variable
//config() is a method which takes an object and inside that object we'll provide the path
//or you can use the require syntax also
dotenv.config({
    path: './env'
})

connectDB()

/* The below is one of the approch followed by devs in production environment
* The DB connection and its error handling is written inside an IIFE
*/
// import mongoose from "mongoose"
// import { DB_NAME } from "./constants"
// import express from "express"
// const app = express()
 
// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//         // Sometimes devlopers also write the below code in the index file
//         // express has many listeners one of them is on() which can listen for
//         // error event foreg: what if the db is connected but the express is unable to connect/
//         // talk to db, in such case it is handled using on() listener
        
//         app.on("error", (err) => {
//             console.log("ERROR: ", err)
//             throw err
//         })
        
//         // below app will listen on the port provided in .env file
//         // app.listen(process.env.PORT, () => {
//         //     console.log(`App is listening on port: ${process.env.PORT}`);
//         // })

//     } catch (error) {
//         console.error("ERROR: ", error)
//         throw error
//     }
// } )()
