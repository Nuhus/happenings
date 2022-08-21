import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import connectDb from '../utils/dbConnection'
import { newsModel } from '../utils/models/newsmodel'
import { Carousel } from 'react-responsive-carousel'
import { carouselDetail } from '../utils/navaItems'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import NewsLayout from './components/NewsLayout'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initialize } from '../utils/Redux/slices/newsSlice'
export default function Home({allnews}) {
  const dispatch = useDispatch()
  dispatch(initialize(allnews))
  const news = useSelector((state)=>{
    //console.log(state.allNews.news)
    return state.allNews.news
  })
  const [desc, setDesc] = useState(null)
  return (
    <div className={styles.container}>
      <div>
      <Carousel
       showStatus={false}
       showThumbs={false} 
       autoPlay 
       emulateTouch 
       infiniteLoop 
       showArrows={false} 
       transitionTime={3000} 
       interval={6000} 
       onChange={((index, item)=>{setDesc(carouselDetail[index].description)})}
       >
        {carouselDetail.map((carousel, key)=>{
          return(
            <div key={key}>
              <Image src={`${carousel.path}`} width={"1500px"} height={"500px"}/>
            </div>
          )
        })}
      </Carousel>
      </div>
      <div className={styles.legend}>{desc}</div>
      <hr />
      <div className={styles.trendingNewsContainer} >
        <div className={styles.mainTrend}>
          <div className={styles.maintTrendImage}>
            <img src={`/newsImages/${news[0].picturesId}`} className={styles.mainTrendPic}  />
        </div>
        <div className={styles.mainTrendText} >
          {news[0].newsBody}
        </div>
        </div>
        <div className={styles.otherTrendingContainer}>
          <div className={styles.otherTrendinItemsContainer}>
            <div className={styles.otherTrendItems}>
            <div className={styles.otherTrendingItemsImage}>
            <img src={`/newsImages/${news[1].picturesId}`} className={styles.otherTrendPic}/>
            </div>
            <div className={styles.otherTrendingItemsText}>
            {news[1].newsBody}
            </div>
          </div>
          </div>
          <div className={styles.otherTrendinItemsContainer}>
          <div className={styles.otherTrendItems}>
          <div className={styles.otherTrendingItemsImage}>
            <img src={`/newsImages/${news[2].picturesId}`} className={styles.otherTrendPic} />
            </div>
            <div className={styles.otherTrendingItemsText}>
            {news[2].newsBody}
            </div>
            </div>
          </div>
          <div className={styles.otherTrendinItemsContainer}>
          <div className={styles.otherTrendItems}>
          <div className={styles.otherTrendingItemsImage}>
            <img src={`/newsImages/${news[3].picturesId}`} className={styles.otherTrendPic}/>
            </div>
            <div className={styles.otherTrendingItemsText}>
            {news[3].newsBody}
            </div>
            </div>
          </div>
        </div>
      </div>
      <NewsLayout />        
          
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
export const getServerSideProps=async()=>{
  //const dispatch = useDispatch()
 try{
  await connectDb()
  const allnews = await newsModel.find()
  //dispatch(initialize(JSON.parse(JSON.stringify(allnews))))
  return{
    props:{
      allnews:JSON.parse(JSON.stringify(allnews))
    }
  }
 }catch(error){
  console.log(error)
 }
}


