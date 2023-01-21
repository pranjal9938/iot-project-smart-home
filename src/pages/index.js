import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import data from '@/assets/data'

const inter = Inter({ subsets: ['latin'] })

const ControlContainer = ({name,onLink,offLink}) => {
  return(
    <div className={styles.singleControlContainer}>
      <h3 className={styles.roomName}>{name}</h3>
      <div className={styles.buttonContainer}>
        {onLink && <a href={onLink} target="_blank" rel="noopener noreferrer" className={styles.bn62}>
          On
        </a>}
        {offLink && <a href={offLink} target="_blank" rel="noopener noreferrer" className={styles.bn62}>
          Off
        </a>}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>IOT Project</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Smart House Controller</h1>
          {
            data.map((data,index)=><ControlContainer key={index} name={data.roomName} onLink={`${data.roomLink}on`} offLink={`${data.roomLink}off`} />)
          }
          <ControlContainer name="Gate" onLink="http://192.168.1.14/gateopen" offLink={null}/>
        </div>
      </main>
    </>
  )
}
