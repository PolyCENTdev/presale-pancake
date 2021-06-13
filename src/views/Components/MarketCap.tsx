import React from 'react'
import useI18n from 'hooks/useI18n'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { getPenAddress } from 'utils/addressHelpers'
import CardValue from '../Home/components/CardValue'
import { useFarms, usePricePenBusd } from '../../state/hooks'

const MarketCap: React.FC = () => {
    const TranslateString = useI18n()
    const totalSupply = useTotalSupply()
    const burnedBalance = useBurnedBalance(getPenAddress())
    const penPrice = usePricePenBusd();
    const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
    const penSupply = getBalanceNumber(circSupply);
    const marketCap = penPrice.times(circSupply);
  
    return (
        <div className="card">
            <div className="title">
                Market Cap
            </div>
            <div className="desc">
                <CardValue fontSize="28px" value={getBalanceNumber(marketCap)}  prefix="$" decimals={2}/>
            </div>
        </div>
    )
}
export default MarketCap