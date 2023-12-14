import mongoose from "mongoose";
const companyCollection  = 'company'

const companySchema = new mongoose.Schema({

    name:       {type: String, required: true},
    phone:      {type: String, required: true},
    email:      {type: String, required: true, unique:true},
    dni_admin:  {type: String, required: true, unique:true},
    admin:      {type: String, required: true},    
    password:   {type: String, required: true},

}, {timestamps: true })

mongoose.set('strictQuery', false)

const companyModel = mongoose.model(companyCollection, companySchema)

export default companyModel


