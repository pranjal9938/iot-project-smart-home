import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import data from '@/assets/data'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

const ControlContainer = ({name,onLink,offLink}) => {
  return(
    <div className={styles.singleControlContainer}>
      <h3 className={styles.roomName}>{name}</h3>
      <div className={styles.buttonContainer}>
        {onLink && <a href={onLink} target="_blank" rel="noopener noreferrer" className={styles.bn62}>
          On
        </a>}
        <a href={offLink} target="_blank" rel="noopener noreferrer" className={styles.bn62}>
          Off
        </a>
      </div>
    </div>
  )
}

export default function Home() { 
const [ip,setIp] = useState(null)
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);
  
  useEffect(() => {
    if(showChild){
        let enteredIp = window.prompt("Please enter your pico's IP:");
        if (enteredIp == null || enteredIp == "") {
          alert("Can't proceed without IP Address. Please press ok and reload.");
        } else {
          setIp(enteredIp)
        }
    }
  }, [showChild]);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return <>
    <Head>
      <title>IOT Project</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Smart House Controller</h1>
          {
            ip ?  
            data.map((data,index)=><ControlContainer key={index} name={data.roomName} onLink={`http://${ip}${data.roomLink}on`} offLink={`http://${ip}${data.roomLink}off`} />)
            : <p style={{marginLeft:"6px"}}>Please reload & enter IP Address of Pico to continue using app...</p>
          }
          <ControlContainer name="Gate" onLink={`http://${ip}/gateopen`} offLink={null}/>
      </div>
    </main>
    }
  </>
  }
}

