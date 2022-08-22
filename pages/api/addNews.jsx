import connectDb from "../../utils/dbConnection";
import { newsModel } from "../../utils/models/newsmodel";
import nextConnect from "next-connect";
const multer = require('multer')
let path = require('path')


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public')
    },
    filename: function(req, file, cb){
        cb(null, Date.now()+path.extname(file.originalname))
    }
})
    const upload = multer({storage})
    const apiRoute = nextConnect({
        onError(error, req, res){
            res.status(501).json({error:`something went wrong ${error.message}`})
        },
        onNoMatch(req, res){
            res.status(405).json({error:`method not allowed`})
        }
    })
    apiRoute.use(upload.single("picturesId"))
    apiRoute.post((req, res)=>{
        connectDb()
    .then(()=>{
        console.log("connected successfully")
        const newsObj = {
            title: req.body.title,
            newsBody: req.body.newsBody,
            picturesId: req.file.filename,
            category:req.body.category
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
    })
    export default apiRoute
    export const config ={
        api:{
            bodyParser: false
        }
    }