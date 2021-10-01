import mongoose from 'mongoose'

const {Schema,model} = mongoose

const Accomodation = new Schema({
    
    name:{type:String,required:true},
    host:{type:Schema.Types.ObjectId,required:true,ref:"user"},
    description:{type:Text,required:true},
    maxGuests:{type:Number,required:true},
    city:{type:String,required:true}
},
{
    timestamps:true
})

const AccomodationModel =   model('Accomodation', Accomodation)

export default AccomodationModel