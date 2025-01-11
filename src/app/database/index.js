// mongodb+srv://gruhanicooks:<db_password>@cluster1.n5d86.mongodb.net/
import mongoose from 'mongoose'
async function connectToDb() {
  const connectionURL =
    'mongodb+srv://gruhanicooks:Aw1bSjZDMNtRPrwd@cluster1.n5d86.mongodb.net'
  try {
    mongoose
      .connect(connectionURL)
      .then(() => {
        console.log('Connected to the database')
      })
      .catch((error) => {
        console.log('Error connecting to the database', error)
      })
  } catch (error) {
    console.log('Error connecting to the database', error)
  }
}

export default connectToDb
