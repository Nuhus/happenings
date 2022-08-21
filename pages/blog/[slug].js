import {useRouter} from 'next/router'
import Link from 'next/link'
import styles from './[slug].module.css'
import { useSelector } from 'react-redux'
import Image from 'next/image'
export default function BlogPost(){
    const news = useSelector((state)=>{
        return state.currentNews
    })
   /*  const router = useRouter()
    const {slug} = router.query */
    const currentnews = news.currentNews && news.currentNews[0]
    return(
        <div className={styles.container}>
            <div className={styles.newsTitle} >{news.currentNews && currentnews.title}</div>
            <div className={styles.imageContainer}>
                <Image src = {`/newsImages/${news.currentNews && currentnews.picturesId}`} width={100} height={100} />
            </div>
                {news.currentNews && news.currentNews[0].newsBody}      
        </div>
    )
}