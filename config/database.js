import mongoose from "mongoose";

export const conectarDB = async () => {
  
    try{
        await mongoose.connect(process.env.DB_URL,{dbName:"pruebatecnica2"});
        console.log("Database is connected")
    }catch (error) {
        console.log("Database is NOT connected", error);
    }
};
