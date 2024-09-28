import express from "express"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
// import mongoose from "mongoose"



import User from "./models/User.js"
import UserAddress from "./models/Address.js"
import connectDB from "./connectDatabase/db.js"

const app = express()

app.use(express.json())
app.use(cookieParser())
dotenv.config()

const PORT = process.env.PORT || 5000;

//id, firstName, lastName, address, city, state, country

app.post("/register", async (req, res) => {
    const { id, name, address, city, state, country } = req.body

    const addressId = id + 100;

    const user = await User.findOne({ name })
    // console.log(user)

    if (user) {
        if (user.name === name || user.id === id) {
            return res.json("User Already Exits!")
        }
    }



    try {
        User.create({ id, name })
        UserAddress.create({ id: addressId, userId: id, address, city, state, country })
    } catch (error) {
        return res.status(400).json("Invalid user data!")
    }

    res.json({ user_Id: id, name, address, city, state, country })
})

connectDB()


app.listen(PORT, () => {
    console.log(`Server running on ${PORT} port Successfully!!`)
})