import Head from 'next/head'
import dynamic from 'next/dynamic'

import { useCallback, useEffect, useState } from 'react'
import type {
  ConnectEventPayload,
  PluggyConnect as PluggyConnectType,
} from 'react-pluggy-connect'
import type { Item } from 'pluggy-sdk'

import styles from '../styles/Home.module.css'

const PluggyConnect = dynamic(
  () =>
    (import('react-pluggy-connect') as any).then((mod) => mod.PluggyConnect),
  { ssr: false }
) as typeof PluggyConnectType

export default function Home() {
  const [withSandbox, setSandbox] = useState<boolean>(false)
  const [connectToken, setConnectToken] = useState<string>()
  const [connecting, setConnecting] = useState<boolean>(false)
  const [item, setItem] = useState<Item | null>(null)

  const generateToken = useCallback(async (itemId?: string) => {
    const response = await fetch('/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // you can pass an itemId to generate a token to update that specific item or use
      // the same connect token that creates the item you want to update see https://docs.pluggy.ai/docs/updating-an-item
      body: JSON.stringify({ itemId }),
    })

    const { accessToken } = await response.json()
    setConnectToken(accessToken)
  }, [])

  const handleOpenConnectInUpdateMode = useCallback(async () => {
    if (!item) {
      // nothing to update -> just return
      return
    }
    await generateToken(item.id)
    setConnecting(true)
  }, [item])

  useEffect(() => {
    // generate a token to be used in the Pluggy Connect when component is mounted
    generateToken()
  }, [generateToken])

  const onSuccess = useCallback((itemData: { item: Item }) => {
    console.log('Yaaay, we got an item: ', itemData.item)
    setItem(itemData.item)
  }, [])

  const onError = useCallback((error) => {
    console.log('Oops, there was an error: ', error)
  }, [])

  const handleEvent = useCallback((payload: ConnectEventPayload) => {
    const { event } = payload

    console.log('[event]', event)
  }, [])

  const handleCheckboxChange = useCallback((event) => {
    setSandbox((previous) => !previous)
  }, [])

  const handleClose = useCallback(() => {
    setConnecting(false)
  }, [])

  const handleOpenConnectInCreateMode = useCallback(async () => {
    // if there is an item, we remove it from the state
    // to be able to open the Pluggy Connect widget in create mode
    if (item) {
      setItem(undefined)
    }

    setConnecting(true)
  }, [item])

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
          <a
            href="https://github.com/vercel/next.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>
        </p>

        <div className={styles.sandboxCheckbox}>
          <label>
            <input
              type="checkbox"
              checked={withSandbox}
              onChange={handleCheckboxChange}
              className={styles.input}
            />
            Include{' '}
            <a
              href="https://docs.pluggy.ai/#sandbox"
              target="_blank"
              rel="noopener noreferrer"
            >
              sandbox connectors
            </a>
          </label>
        </div>

        <div className={styles.grid}>
          <button onClick={handleOpenConnectInCreateMode}>
            Connect an account
          </button>
          <button
            className={`secondary ${!item ? 'disabled' : ''}`}
            onClick={item ? handleOpenConnectInUpdateMode : undefined}
          >
            Update last connection
          </button>
          {connecting && (
            <PluggyConnect
              updateItem={item?.id}
              connectToken={connectToken}
              includeSandbox={withSandbox}
              onSuccess={onSuccess}
              onError={onError}
              onClose={handleClose}
              onEvent={handleEvent}
            />
          )}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/logo.png" alt="Pluggy Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
