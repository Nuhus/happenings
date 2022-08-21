import Link from "next/link";
import styles from './nav.module.css'
import { Items, rightItems } from "../../utils/navaItems";
import Image from 'next/image'
export default function Navbar(){
    const setSubMenu = (item) =>{
      
        if(item.subMenu){
        var submenu
        submenu = item.subMenu.map((sub, key)=>{
                 
           return (
                <div key={key} className={styles.submenulinks}>
                    {sub.subNavName}
                </div>
            )
            
        })
    }
    return submenu
}

    return(
        <div className={styles.navContainer}>
            
            <div className={styles.leftMenuContainer}>
            <div className={styles.logoContainer}>
                <Image src="/logo.png" width={50} height={50}/>
            </div>
            {Items.map((item, key)=>{
                return(
                    <div key={key} className={styles.menuItemContainer}>
                    <div key={item.navName} className={styles.menuitem}>
                        <Link href={item.subMenu ? "#" : item.link} key={key + item.navName}>
                            {item.navName}
                        </Link>
                        </div>
                        <div className={item.subMenu && styles.subMenuContainer}>
                        {
                            setSubMenu(item)
                        }
                        </div>
                   </div>
                )
            })}
            </div>
            <div className={styles.rightMenuContainer}>
            {rightItems.map((item, key)=>{
                return(
                    <span key={item.navName}><Link href={item.link}>{item.navName}</Link></span>
                )
            })} 
            </div>
        </div>
    )
}