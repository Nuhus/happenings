import mongoose from 'mongoose'
const connectDb = async () =>{
await mongoose.connect("mongodb://Nsadiq:Sadiq57563@cluster0-shard-00-00.xjthd.mongodb.net:27017,cluster0-shard-00-01.xjthd.mongodb.net:27017,cluster0-shard-00-02.xjthd.mongodb.net:27017/?ssl=true&replicaSet=atlas-qa727v-shard-0&authSource=admin&retryWrites=true&w=majority")

}
export default connectDb