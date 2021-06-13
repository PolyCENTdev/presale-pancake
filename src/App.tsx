import React, { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { ResetCSS } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js'
import { useFetchPublicData } from 'state/hooks'
import GlobalStyle from './style/Global'
import Menu from './components/Menu'
import PageLoader from './components/PageLoader'
import Header from './views/Components/Header'

const Home = lazy(() => import('./views/Home'))
const HomeSingle = lazy(() => import('./views/HomeSingle'))
const NotFound = lazy(() => import('./views/NotFound'))

// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  const { account, connect } = useWallet()
  useEffect(() => {
    if (!account && window.localStorage.getItem('accountStatus')) {
      connect('injected')
    }
  }, [account, connect])


  return (
    <div className="App">
      
      <Router>
        <ResetCSS />
        <GlobalStyle />
      
          <Suspense fallback={<PageLoader />}>
            <Switch>
              <Route path="/" exact>
                <HomeSingle />
              </Route>
              <Route component={NotFound} />
            </Switch>
          </Suspense>
      
        {/* <NftGlobalNotification /> */}
      </Router>
    </div>
  )
}

export default React.memo(App)
