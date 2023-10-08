import mongoose from "mongoose"


const dbConnect=()=>{

 
    mongoose.connect(`${process.env.DB_URI}`)



}

export default dbConnect;

