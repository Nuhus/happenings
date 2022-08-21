import styles from "./components/addNews.module.css"
import Image from "next/image"
import { useState } from "react"
export default function AddNews(){
    const [title, setTitle]=useState("")
    const [newsBody, setNewsBody]=useState("")
    const [pic, setPic]=useState("")
    const [cat, setCat] =useState("")
    const saveNews = () =>{
        const formdata = new FormData()
        formdata.append("title", title)
        formdata.append("newsBody", newsBody)
        formdata.append("picturesId", pic)
        formdata.append("category", cat)
        
        /* const newsObj = {
            title: title,
            picturesId: "00113",
            newsBody: "arsenal is in a red hot form"
        } */
        fetch("api/addNews",{
            method:"POST",
            body:formdata,
            
        })
        .then((response)=>{
            response.json()
            .then((data)=>{
                console.log(data)
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return(
        <div className={styles.container}>
            
            <form>
            <div className={styles.newsForm}>
            <div className={styles.formHeading}>CREATE NEWS</div>
                <input className={styles.formControls} type = "text" name="title" placeholder="enter news title" value={title} onChange={((e)=>{setTitle(e.target.value)})}/>
                <textarea className={styles.formControls} name="newsBody" placeholder="put news body here" value={newsBody} onChange={((e)=>{setNewsBody(e.target.value)})}/>
                <select name="cat" value={cat} onChange={((e)=>{setCat(e.target.value)})}>
                    <option>...select category...</option>
                    <option value="sport">Sport</option>
                    <option value="politics">Politics</option>
                    <option value="entertainment">entertainment</option>
                    <option value="health">health</option>
                    <option value="science">science</option>
                    <option value="weather">weather</option>
                </select>
                <input type="file" className={styles.formControls} name="pictures" onChange={((e)=>{setPic(e.target.files[0])})}/>
                <button className={styles.formControls} type="button" onClick={()=>{saveNews()}}>Save News</button>
            </div>
            </form>
            <div className={styles.picPreview}>
                <Image src = {pic && URL.createObjectURL(pic)} width={150} height={150} />
            </div>
            
        </div>
    )
}