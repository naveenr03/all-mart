import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://admin:admin@cluster0.bwqouux.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Grocery').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.