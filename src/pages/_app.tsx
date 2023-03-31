import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ContextProvider, useContextState } from '@/contexts/ContextProvider'

export default function App({ Component, pageProps }: AppProps) {
  return   <ContextProvider><Component {...pageProps} /></ContextProvider>
}
