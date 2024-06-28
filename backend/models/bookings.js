import mongoose, { Mongoose } from "mongoose";
const schema=mongoose.Schema({
    Userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users'
    },
    Trainid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Trains'
    },
    Bookingdate:{
        type:Date,
        default:Date.now()
    },
    Destination:{
        type:String,
        required:true
    },
    ArrivalTime:{
        type:Date,
        required:true,
        default:Date.now()
    },
    DepartureTime:{
        type:Date,
        required:true,
        default:Date.now()
    },
    Fare:{
        type:Number,
        required:true,
    },
    SeatAvailability:{
        type:Number,
        required:true,
    }
})
const Bookings=mongoose.model('Bookings',schema);
export default Bookings;