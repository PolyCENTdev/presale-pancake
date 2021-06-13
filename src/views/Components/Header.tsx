import React, {useEffect} from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'
import Menu from '../../components/Menu'

const Header: React.FC = () => {
    const TranslateString = useI18n()
    const { account, connect } = useWallet()
    useEffect(() => {
      if (!account && window.localStorage.getItem('accountStatus')) {
        connect('injected')
      }
    }, [account, connect])
    
    return (
      <header>

        &nbsc;
        </header>
    )
}
export default Header