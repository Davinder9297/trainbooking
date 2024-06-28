import Train from "../models/train.js";

export  async function CreateTraindata(req,res,next){
    let {TrainNo,TrainName,Origin,Destination,ArrivalTime,DepartureTime,Fare,SeatAvailability}=req.body;
    try {
        if(!TrainNo || !TrainName || !Origin || !Destination || !ArrivalTime || !DepartureTime || !Fare || !SeatAvailability){
            res.status(400).json({message:"Every field must be filled",success:false});
            next()
        }
        else{
            const traindata=await Train.create(req.body)
            if(traindata){
                res.status(201).json({message:"Train data inserted successfully",success:true});
next()
            }
            else{
                res.status(500).json({message:"Internal server error",success:false});
next()
            }
        }
    } catch (error) {
        res.status(500).json({message:"Internal server error",success:false});
        next()
    }
}

export  async function Getalltraindetails(req,res,next){
try {
    const data=await Train.find({});
    if(data){
        res.status(200).json({data,success:true,message:"Data fetched successfully"});
    }
    else{
        res.status(200).json({data,success:true,message:"No data found"});
    }
} catch (error) {
    res.status(500).json({success:false,message:"Internal server error"});
  
}
}

export async function Updatetrain(req,res,next){
    let {_id,TrainNo,TrainName,Origin,Destination,ArrivalTime,DepartureTime,Fare,SeatAvailability}=req.body;
    try {
        if(!_id || !TrainNo || !TrainName || !Origin || !Destination || !ArrivalTime || !DepartureTime || !Fare || !SeatAvailability){
            res.status(400).json({message:"Every field must be filled",success:false});
            next()
        }
        else{
            const data=await Train.findOne({_id});
            if(data){
                const newdata=await Train.findByIdAndUpdate(_id,req.body,{new: true})
                if(newdata){
                    res.status(200).json({success:true,message:"Data updated successfully",newdata})
                }
                else{
                    res.status(500).json({success:false,message:"Unable to update data"})
                }
            }
            else{
                res.status(500).json({success:false,message:"Train record not found"})
            }
        }
    } catch (error) {
        res.status(500).json({success:false,message:"Internal server error"})

    }
}
export async function Gettraindatabyid(req,res,next){
    let {_id}=req.query;
     try {
        if(!_id){
            res.status(404).json({success:false,message:"Id required"})
        }
        else{
            const data=await Train.find({_id})
            if(!data){
                res.status(404).json({success:false,message:"Train data not found"})

            }
            else{
                res.status(200).json({success:true,message:"Data fetched successfully",data})
  
            }

        }
     } catch (error) {
        res.status(500).json({success:false,message:"Internal server error"})

     }
}
export async function DeleteTrain(req,res,next){
    let {_id}=req.body;
     try {
        if(!_id){
            res.status(404).json({success:false,message:"Id required"})
        }
        else{
            const data=await Train.find({_id})
            if(!data){
                res.status(404).json({success:false,message:"Train data not found"})

            }
            else{
                const response=await Train.findByIdAndDelete(_id)
                    if (!response){ 
                        res.status(404).json({success:false,message:"Unable to delete train"})

                    } 
                    else{ 
                        res.status(200).json({success:true,message:"Train deleted successfully",data:response})
                    } 
              

            }

        }
     } catch (error) {
        res.status(500).json({success:false,message:"Internal server error"})

     }
}