import { usePricePenBusd } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from './useTickets'

const useLotteryTotalPrizesUsd = () => {
  const totalRewards = useTotalRewards()
  const totalPen = getBalanceNumber(totalRewards)
  const penPriceBusd = usePricePenBusd()

  return totalPen * penPriceBusd.toNumber()
}

export default useLotteryTotalPrizesUsd
