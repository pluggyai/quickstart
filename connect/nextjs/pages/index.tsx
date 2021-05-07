import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import type { PluggyConnect as PluggyConnectType } from 'react-pluggy-connect'

import styles from '../styles/Home.module.css'

const PluggyConnect = dynamic(
  () => (import('react-pluggy-connect') as any).then((mod) => mod.PluggyConnect),
  { ssr: false }
) as typeof PluggyConnectType

export default function Home() {
  const [withSandbox, setSandbox] = useState<boolean>(false)
  const [connectToken, setConnectToken] = useState<string>()
  const [connecting, setConnecting] = useState<boolean>(false)

  useEffect(() => {
    if (!connectToken) {
      const fetchToken = async () => {
        const response = await fetch('/api/token')
        const { accessToken } = await response.json()
        setConnectToken(accessToken)
      }

      fetchToken()
    }
  })

  const onSuccess = (itemData) => {
    console.log(itemData.item)
  }

  const onError = (error) => {
    console.log('There was an error: ', error)
  }

  const handleCheckboxChange = (event) => {
    setSandbox(!withSandbox)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Pluggy - Next.js Example</title>
        <link rel="icon" sizes="96x96" href="/favicon-96x96.ico" />
        <link rel="icon" sizes="32x32" href="/favicon-32x32.ico" />
        <link rel="icon" sizes="16x16" href="/favicon-16x16.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Pluggy Connect</h1>

        <p className={styles.description}>
          Quickstart application to run Pluggy Connect with{' '}
          <a href="https://github.com/vercel/next.js" target="_blank" rel="noopener noreferrer">
            Next.js
          </a>
        </p>

        <div className="sandbox-checkbox">
          <input type="checkbox" checked={withSandbox} onChange={handleCheckboxChange} />
          <label>
            Include{' '}
            <a href="https://docs.pluggy.ai/#sandbox" target="_blank" rel="noopener noreferrer">
              sandbox connectors
            </a>
          </label>
        </div>

        <div className={styles.grid}>
          {connecting ? (
            <PluggyConnect
              connectToken={connectToken}
              includeSandbox={withSandbox}
              onSuccess={onSuccess}
              onError={onError}
            />
          ) : (
            <button
              className={styles.card}
              disabled={!connectToken}
              onClick={() => setConnecting(true)}
            >
              <h3>Start here</h3>
              <p>Connect your financial account and see your report.</p>
            </button>
          )}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/logo.png" alt="Pluggy Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
