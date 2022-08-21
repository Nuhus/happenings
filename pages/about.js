import Link from "next/link";
import Head from 'next/head'
import { useEffect, useState } from "react";

export default function About({myclass}){
    const [data, setData]=useState()
    useEffect(()=>{
        fetch("/api/about")
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            setData(data)
        })
    },[])
    if(!data){
        return <div>no data yet</div>
    }
    return(
        <div>
            <div>
                my name is {data.names}
            </div>
            <div>
                my class is {myclass}
            </div>
            <Head>
                <title>
                    ABOUT PAGE
                </title>
            </Head>
            hello from about page
            <div>
                <Link href={"/blog/555"}>
                    <a>post 555</a>
                </Link>
            </div>
        </div>
    )
}
export function getServerSideProps(){
    return{
        props:{
            myclass: "phd student"
        }
    }
}