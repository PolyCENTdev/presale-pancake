import React from 'react'
import useI18n from 'hooks/useI18n'
import { useTotalValue } from '../../state/hooks'
import CardValue from '../Home/components/CardValue'

const CardTVL: React.FC = () => {
    const TranslateString = useI18n()
    const totalValue = useTotalValue();
  
    return (
        <div className="card">
            <div className="title">
                TVL
            </div>
            <div className="desc">
                <CardValue fontSize="28px" value={totalValue.toNumber()} prefix="$" decimals={2}/>
            </div>
        </div>
    )
}
export default CardTVL