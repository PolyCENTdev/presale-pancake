import React from 'react'
import useI18n from 'hooks/useI18n'
import BigNumber from 'bignumber.js/bignumber'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { getPenAddress } from 'utils/addressHelpers'
import { useTotalValue, usePricePenBusd } from '../../state/hooks'
import CardValue from '../Home/components/CardValue'

const TotalMinted: React.FC = () => {
    const TranslateString = useI18n()
    
    const totalSupply = useTotalSupply()
    const burnedBalance = useBurnedBalance(getPenAddress())
    const penPrice = usePricePenBusd();
    const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  
    const test1 = getBalanceNumber(circSupply);
    const test2 = getBalanceNumber(totalSupply);
    const result = test2-test1;

    return (
        <div className="card">
            <div className="title"> 
            Circulating Supply
            </div>
            <div className="desc">
                <CardValue fontSize="28px" value={test1} prefix="" decimals={2}/>
            </div>
        </div>
    )
}
export default TotalMinted