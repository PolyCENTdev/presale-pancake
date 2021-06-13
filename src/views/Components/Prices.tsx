import React, {useEffect, useState} from 'react'
import useI18n from 'hooks/useI18n'
import CardValue from '../Home/components/CardValue'
import useRefresh from '../../hooks/useRefresh'

const Prices: React.FC = () => {
    const[btcValue, setBtcValue] = useState(0)
    const[ethValue, setEthValue] = useState(0)
    const[polyValue, setPolyValue] = useState(0)
    const[btcColor, setBtcColor] = useState("")
    const[ethColor, setEthColor] = useState("")
    const[polyColor, setPolyColor] = useState("")
    const { fastRefresh } = useRefresh()
    
    const TranslateString = useI18n()
    useEffect(() => {
        const getValues = () => {
            fetch("https://api.nomics.com/v1/currencies/ticker?key=0aeb528d3cff391cb06407949a6ad938f080272f&ids=BTC,ETH,MATIC&interval=1d,30d&convert=USD&per-page=100&page=1")
            .then((response) => response.json())
            .then((data) => {
                if(data[0].price !== btcValue)
                {
                    if(data[0].price < btcValue)
                    {
                        setBtcColor("red")
                    }
                    else
                    {
                        setBtcColor("green")
                    }
                }
                if(data[1].price !== ethValue)
                {
                    if(data[1].price < ethValue)
                    {
                        setEthColor("red")
                    }
                    else
                    {
                        setEthColor("green")
                    }
                }
                if(data[2].price !== polyValue)
                {
                    if(data[2].price < polyValue)
                    {
                        setPolyColor("red")
                    }
                    else
                    {
                        setPolyColor("green")
                    }
                }
                setBtcValue(data[0].price)
                setEthValue(data[1].price)
                setPolyValue(data[2].price)
            });
        }
        getValues();
        }, [btcValue, ethValue, polyValue, fastRefresh]);

  
    return (
        <div className="prices">
          <div className="card2">
              <img src="/images/bitcoin.png" alt="polygon" width="30px" />
              <br />
              <CardValue fontColor={btcColor} fontSize="28px" value={btcValue} prefix="$" decimals={2}/>
            </div>
            <div className="card2">
              <img src="/images/ether.png" alt="polygon" width="30px" />
              <br />
              <CardValue fontColor={ethColor} fontSize="28px" value={ethValue} prefix="$" decimals={2}/>
            </div>
            <div className="card2">
              <img src="/images/polygon.png" alt="polygon" width="30px" />
              <br />
              <CardValue fontColor={polyColor} fontSize="28px" value={polyValue} prefix="$" decimals={2}/>
            </div>
          </div>
    )
}
export default Prices