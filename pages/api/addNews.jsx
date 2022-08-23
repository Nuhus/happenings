import connectDb from "../../utils/dbConnection";
import { newsModel } from "../../utils/models/newsmodel";
var mv = require('mv')
let path = require('path')
import {IncomingForm} from "formidable";


export default async (req, res)=>{
    try{
        const form = new IncomingForm()
        form.parse(req, (err, fields, files) => {
            if(err) console.log(err)
            const oldpath = files.picturesId.filepath
            const now = Date.now();
            const extension = path.extname(files.picturesId.originalFilename)
            const fileName = now + extension
            const newPath = "./public/newsImages/" + now + extension
            mv(oldpath, newPath, (()=>{
                connectDb()
    .then(()=>{
        console.log("connected successfully")
        const newsObj = {
            title:fields.title,
            newsBody: fields.newsBody,
            picturesId: fileName,
            category:fields.category
        }
        newsModel.create(newsObj)
        .then((resp)=>{
            res.status(200).json({
                message: "news added successfully"
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    })
    .catch((error)=>{
        console.log(error)
    })
            }))
        })
    }catch(err){
        console.log(err)
    }
}
export const config ={
    api:{
        bodyParser: false
    }
}