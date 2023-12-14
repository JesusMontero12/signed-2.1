import mongoose from "mongoose";
const usersCollection  = 'users'

const userSchema = new mongoose.Schema({

    dni:        {type: String, required: true, unique:true},
    name:       {type: String, required: true},
    email:      {type: String, required: true, unique:true},
    password:   {type: String, required: true},
	role:       {type: String, required: true},
    modality:   {type: String, required: true},

}, {timestamps: true })

mongoose.set('strictQuery', false)

const userModel = mongoose.model(usersCollection, userSchema)

export default userModel


