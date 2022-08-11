import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
  <>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary">Left</button>
          <button type="button" className="btn btn-primary">Middle</button>
          <button type="button" className="btn btn-primary">Right</button>
        </div>
  </>
    
  )
}
