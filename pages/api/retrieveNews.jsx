import connectDb from "../../utils/dbConnection";
import {newsModel} from "../../utils/models/newsmodel";
export default  async function RetrieveNews(req, res){
    connectDb()
    .then((connection)=>{
        console.log("connected successfully")
        newsModel.find()
    .then((news)=>{
        console.log(news)
        res.status(200).json({
            news:[{title:"hello"}]
        })
    })
    .catch((error)=>{
        console.log("error here")
    })
    })
    
}