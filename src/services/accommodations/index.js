import express from 'express'
import AccommodationModel from '../../../schemas/Accommodation.js'
import createHttpError from 'http-errors'
const accommodationRouter = express.Router()


accommodationRouter.route('/')
.get(async(req,res,next)=>{
    try {
        const allAccommodation = await AccommodationModel.find().populate('host')
        res.send(allAccommodation)
    } catch (error) {
        next(error)
    }
})
.post(async(req,res,next)=>{
    try {
        const newAccommodation = new AccommodationModel(req.body)
        const accommodation = await newAccommodation.save()
        res.send(accommodation)
    } catch (error) {
        next(error)
    }
})

accommodationRouter.route('/:accId')
.get(async(req,res,next)=>{
    try {
        const oneAccommodation = await AccommodationModel.findById(req.params.accId)
        res.send(oneAccommodation)
    } catch (error) {
        next(error)
    }
})
.put(async(req,res,next)=>{
    try {
        const AccId = req.params.accId
        const updateAccommodation = await AccommodationModel.findByIdAndUpdate(AccId,req.body,{new:true})
        res.send(updateAccommodation)
    } catch (error) {
        next(error)
    }
})
.delete(async(req,res,next)=>{
    try {
        const AccId = req.params.accId
        const deleteAccommodation = await AccommodationModel.findByIdAndDelete(AccId)
        res.send('accommodation deleted ')
    } catch (error) {
        next(error)
    }
})
export default accommodationRouter