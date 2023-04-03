import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ContextProvider, useContextState } from '@/contexts/ContextProvider'
import Layout from '@/components/common/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return <ContextProvider> <Layout><Component {...pageProps} /></Layout> </ContextProvider>
}
