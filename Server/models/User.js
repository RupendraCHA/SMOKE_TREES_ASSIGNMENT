import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)

const User = mongoose.model("User", userSchema)

export default User;