
import { Schema, model, models } from "mongoose";

const characterSchema = new Schema<Result>({
    name: {
        type: String, 
        required:true,
        trim:true,
        maxlength: [40, "The name must have no more than 40 characters long"]
},
    status:{
        type: String, 
        required:true,
        trim:true,
        maxlength: [8, "The name must have no more than 8 characters long"]},
    species:{
        type: String, 
        required:true,
        trim:true,
        maxlength: [40, "The name must have no more than 40 characters long"]},
    gender: {
        type: String, 
        required:true,
        trim:true,
        maxlength: [40, "The name must have no more than 40 characters long"]},
    image: {
        type: String, 
        required:true,
        trim:true},
    url: {
        type: String, 
        required:true,
        trim:true,
        maxlength: [40, "The name must have no more than 40 characters long"]},
    //created: Date,
}, { timestamps: true, versionKey: false})

export default  model<Result>('Character', characterSchema);