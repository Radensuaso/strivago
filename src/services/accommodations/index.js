import express from 'express'
import AccommodationModel from '../../../schemas/Accommodation'

const accommodationRouter = express.Router()


accommodationRouter.route('/')
.get(async(req,res,next)=>{
    try {
        const allAccommodation = AccommodationModel.find().populate('user')
        res.send(allAccommodation)
    } catch (error) {
        next(error)
    }
})
.post(async(req,res,next)=>{
    try {
        const newAccommodation = new AccommodationModel(req.body)
        const accommodation = newAccommodation.save()
        res.send(accommodation)
    } catch (error) {
        next(error)
    }
})

