import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const connectToDB = async () => {
  const connectURL = process.env.MONGO_URL
  await mongoose
    .connect(connectURL)
    .then(() => {
      console.log('connected to database successfully')
    })
    .catch((error) => {
      console.log(error)
    })
}

export default connectToDB
