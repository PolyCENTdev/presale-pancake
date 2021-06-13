import React from 'react'
import useI18n from 'hooks/useI18n'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { getPenAddress } from 'utils/addressHelpers'
import { useTotalValue } from '../../state/hooks'
import CardValue from '../Home/components/CardValue'

const TotalBurned: React.FC = () => {
    const TranslateString = useI18n()
    const totalValue = useTotalValue();
    const burnedBalance = useBurnedBalance(getPenAddress())
  
    return (
        <div className="card">
            <div className="title">
            Total Burned
            </div>
            <div className="desc">
                <CardValue fontSize="28px" value={getBalanceNumber(burnedBalance)} prefix="" decimals={0}/>
            </div>
        </div>
    )
}
export default TotalBurned