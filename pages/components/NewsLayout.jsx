import styles from './newslayout.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentNews } from '../../utils/Redux/slices/newsSlice'
function NewsLayout(){
    const dispatch = useDispatch()
    const setNews = (currentNews) =>{
       
        dispatch(setCurrentNews(currentNews._id))
    }
    const news = useSelector((state)=>{
        return state.allNews.news
    })
    return(
        <div className={styles.container}>
            {news && news.map((anews, key)=>{
                return(
                    <div key={key} className={styles.container}>
                    <div key={key} className={styles.textContent}>
                <div className={styles.title}>
                    {anews.title}
                </div>
                <div className={styles.incite} onClick={(()=>{setNews(anews)})}>
                <Link href={`/blog/${anews._id}`}>
                <a>
                {anews.newsBody}
                </a>
                </Link>
                </div>
            </div>
            <div className ={styles.picture}>
                <Image src={`/newsImages/${anews.picturesId}`} width = {"100%"} height={"90%"} />
            </div>
            </div>
                )
            })}
            
        </div>
    )
}
export default NewsLayout