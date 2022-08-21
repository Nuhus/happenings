import {model, Schema, models} from 'mongoose'

const schema = Schema({
    title:String,
    picturesId:String,
    newsBody:String,
    category:String
})

export const newsModel = models.news || model("news", schema)