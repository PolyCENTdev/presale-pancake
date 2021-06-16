import React, { useMemo, useState, useCallback, useEffect } from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import UnlockButton from 'components/UnlockButton'
import { Heading, Text, BaseLayout, Button } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { provider } from 'web3-core'
import { useWallet } from '@binance-chain/bsc-use-wallet'

import { usePayPresale } from 'hooks/useApprove'
import { getContract } from 'utils/erc20'
import { Contract } from 'web3-eth-contract'
import { useMasterchef, useMulticall } from '../../hooks/useContract'
import { usePresaleAllowance, usePresaleContractAllowance } from '../../hooks/useAllowance'




const HomeSingle: React.FC = () => {
  const TranslateString = useI18n()
  const { account, connect } = useWallet()
  const [amountSend, setAmountSend] = useState('')
  const masterChefContract = useMasterchef()
  const multicallContract = useMulticall()
  const allowance = usePresaleAllowance(masterChefContract);
  const allowanceContract = usePresaleContractAllowance(multicallContract);
  const percentSale = `${Math.round(parseFloat(allowanceContract) * 100 / 500000).toString()}%`;
  const poolSupply = (500000).toLocaleString('en-US');
  const amountLeft = (500000 - allowanceContract).toLocaleString('en-US');
  useEffect(() => {
    if (!account && !window.localStorage.getItem('accountStatus')) {
      connect('injected')
      window.localStorage.setItem('accountStatus', "1");
    }
  }, [account, connect, masterChefContract])
  const [requestedApproval, setRequestedApproval] = useState(false)
  
  const { onApprove } = usePayPresale(amountSend)


  const handleAmount = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setAmountSend(e.currentTarget.value)
    },
    [setAmountSend],
  )

  const handleSend = async () => {
    if(amountSend !== "")
    {
      handleApprove(amountSend);
    }
    else
    {
      alert("Debe seleccionar un monto valido")
    }
  }

  const handleApprove = useCallback(async (ammount) => {
    try {
        if (window.localStorage.getItem('accountStatus')) {
          setRequestedApproval(true)
          await onApprove()
          setRequestedApproval(false)
        }
        else
        {
          alert("Debe conectar su billetera")
        }
      
    } catch (e) {
      console.error(e)
    }
  }, [onApprove])
  return ( 
    <header>

    <img className="logo-header" src="/images/PEN_383.png" alt="" />
    <div className="title-logo"><h1>PolyEarn</h1></div>

    
    <section id="principal">
        <div className="row m-5 justify-content-md-center">
          <div className="col col-md-9">
           <div className="header-logo"><h1 className="titulo">  PolyEarn</h1></div>
            <h1 className="text-center">PEN Token Sale</h1>
            <div className="subtitle">PolyEarn Finance is a DeFi portal on the Polygon network that will allow you to earn tokens and save yourself from market crashes</div>
            <div className="ml-7 clock" />
            <div className="left-text">left until the presale ends</div>
            <div className="pbar row">
              <div className="col-2 col-md-1 text-right">
                <span className="spAmount"> 0 </span>
              </div>
              <div className="col-8 col-md-10">
                <div className="progress">
                  <div className="progress-bar bg-gradient" role="progressbar" style={{width: percentSale}}>.</div>
                </div>
              </div>
              <div className="col-2 col-md-1 text-left">
                <span className="spAmount"> 500,000 </span>
              </div>
              
            </div>
            <div className="info row text-center">
              <div className="col">
                <h6 className="text-info">
                  TOKEN RATIO
</h6>
                <h3 className="display-5 mb-5" id="txtRelationPenMatic">1 PEN = 5 MATIC</h3>
              </div>
              <div className="col">
                <h6 className="text-info">
                  AMOUNT LEFT NOW
</h6>
                <h3 id="txtAmountLeft" className="display-5 mb-5">{amountLeft}</h3>
              </div>
              <div className="col">
                <h6 className="text-info">
                  POOL SUPPLY
</h6>
                <h3 id="txtPoolSupply" className="display-5 mb-5">{poolSupply}</h3>
              </div>
            </div>
            <div className="row m-5 justify-content-md-center youhave backgrund">
              You have {allowance} PENs bought
            </div>
            <div className="row m-5 justify-content-md-center">
              <div className="divparentcoin">
                  <img className="img_coin imgmatic" src="images/matic.png" width="45" alt="" />
                  <input className="pp form-control" onChange={handleAmount} value={amountSend} id="matictxt" type="number" placeholder="Enter Matic Amount" />
              </div>
              <div className="text-center mx-3 my-2">
                <i className="fa fa-arrows-alt-h arrow" />
              </div>
              <div className="divparentcoin">
                <img className="img_coin imgpen" src="images/pen.png" width="45" alt="" />
                  <input className="pp form-control"  id="pentxt" type="number" placeholder="Enter PEN Amount" />
              </div>  
						</div>
            <div className="row m-5 justify-content-md-center">
              <Button mt="8px" className="btn btnbuy" disabled={requestedApproval} onClick={handleSend}>
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </section>
     </header>  
  )
}

export default HomeSingle
