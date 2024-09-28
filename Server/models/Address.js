import mongoose from "mongoose"

const addressSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    userId: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)

const UserAddress = mongoose.model("UserAddress", addressSchema)

export default UserAddress;