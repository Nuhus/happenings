import { createSlice } from "@reduxjs/toolkit";
const NewsSlice = createSlice({
    name:"allNews",
    initialState:{
        news:[],
        currentNews:null
    },
    reducers:{
        initialize:((state, action)=>{
            state.news = action.payload
        }),
        setCurrentNews:((state, action)=>{
            const id = action.payload
            state.currentNews = state.news.filter(anews=>anews._id == id)
        })

    }

})
export const {initialize, setCurrentNews} = NewsSlice.actions
export default NewsSlice