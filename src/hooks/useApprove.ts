import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { Contract } from 'web3-eth-contract'
import { ethers } from 'ethers'
import addresses from 'config/constants/contracts'
import { getWeb3, getContract } from 'utils/web3'
import useWeb3 from 'hooks/useWeb3'
import BigNumber from 'bignumber.js'
import { useDispatch } from 'react-redux'
import { updateUserAllowance, fetchFarmUserDataAsync } from 'state/actions'
import { approve, receive } from 'utils/callHelpers'
import { useMasterchef, usePen, useSousChef, useLottery } from './useContract'

// Approve a Farm
export const usePayPresale = (amount: string) => {
  const dispatch = useDispatch()
  const { account }: { account: string } = useWallet()
  const masterChefContract = useMasterchef()
  const w3 = useWeb3();
  const handlePayPresale = useCallback(async () => {
    try {   
      let ret = false;   
      const txx = {
        from: account,
        to: addresses.masterChef["137"],
        value:  w3.utils.toWei(amount, 'ether'),
        chain: "137"
      };
      w3.eth.sendTransaction(txx, function(err, transactionHash){
        if (err) { 
          console.log(err); 
          ret = false;
        } else {
            ret = true;
        }
      });
      dispatch(fetchFarmUserDataAsync(account))
      return ret;
    } catch (e) {
      return false
    }
  }, [account, dispatch, w3, amount])

  return { onApprove: handlePayPresale }
}

// Approve a Farm
export const useApprove = (lpContract: Contract) => {
  const dispatch = useDispatch()
  const { account }: { account: string } = useWallet()
  const masterChefContract = useMasterchef()

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, masterChefContract, account)
      dispatch(fetchFarmUserDataAsync(account))
      return tx
    } catch (e) {
      return false
    }
  }, [account, dispatch, lpContract, masterChefContract])

  return { onApprove: handleApprove }
}

// Approve a Pool
export const useSousApprove = (lpContract: Contract, sousId) => {
  const dispatch = useDispatch()
  const { account }: { account: string } = useWallet()
  const sousChefContract = useSousChef(sousId)

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, sousChefContract, account)
      dispatch(updateUserAllowance(sousId, account))
      return tx
    } catch (e) {
      return false
    }
  }, [account, dispatch, lpContract, sousChefContract, sousId])

  return { onApprove: handleApprove }
}

// Approve the lottery
export const useLotteryApprove = () => {
  const { account }: { account: string } = useWallet()
  const penContract = usePen()
  const lotteryContract = useLottery()

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(penContract, lotteryContract, account)
      return tx
    } catch (e) {
      return false
    }
  }, [account, penContract, lotteryContract])

  return { onApprove: handleApprove }
}

// Approve an IFO
export const useIfoApprove = (tokenContract: Contract, spenderAddress: string) => {
  const { account } = useWallet()
  const onApprove = useCallback(async () => {
    try {
      const tx = await tokenContract.methods
        .approve(spenderAddress, ethers.constants.MaxUint256)
        .send({ from: account })
      return tx
    } catch {
      return false
    }
  }, [account, spenderAddress, tokenContract])

  return onApprove
}
