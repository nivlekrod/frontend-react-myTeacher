import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../src/components/header/header'
import { ThemeProvider } from '@mui/material'
import themes from '../src/themes/themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={themes}>
        <Header></Header>
        <Component {...pageProps} />
      </ThemeProvider>
    </>

  )
}

export default MyApp
