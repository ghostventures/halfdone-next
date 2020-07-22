import { AppProps } from 'next/app'
import { MetaTags, ConfigCtxProvider, AppLayout } from '@components'
import 'styles/global.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

const App = ({ Component, pageProps }: AppProps) => (
  <ConfigCtxProvider>
    <MetaTags />
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  </ConfigCtxProvider>
)

export default App
