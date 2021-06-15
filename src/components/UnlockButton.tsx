import React from 'react'
import { Button, useWalletModal } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'

const UnlockButton = (props) => {
  const TranslateString = useI18n()
  const { account, connect, reset } = useWallet()
  const { onPresentConnectModal } = useWalletModal(connect, reset)
  let accountNumber="";
  if(account)
  {
    accountNumber = `${account.substring(0, 4)} ... ${account.substring(account.length - 4)}`;
  }
  return (
    <Button className="btn btnConnect" disabled={account} onClick={onPresentConnectModal} {...props}>
      {!account ? "Connect" : accountNumber}
    </Button>
  )
}

export default UnlockButton
