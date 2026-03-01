import mongoose from "mongoose";



const connectDB = async () => {


    try {


        const conn = await mongoose.connect(process.env.MONGO_URL)

        console.log(`Server Connected Suucessfully ${conn.connection.host}`);


    } catch (error) {

        console.log('error occurs', error);



    }

}


export default connectDB