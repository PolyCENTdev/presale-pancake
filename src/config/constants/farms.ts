import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'PEN',
    isTokenOnly: true,
    lpAddresses: {
      137: '0x4c7b992fb450419fc0fdc95636137b0179b5c769'
    },
    tokenSymbol: 'PEN',
    tokenAddresses: {
      137: '0xb0d11ed9e814c0b1cd7b605fe5cbf35e48b12cc9'
    },
    quoteTokenSymbol: QuoteToken.PEN,
    quoteTokenAdresses: contracts.pen,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'USDC-WMATIC',
    isTokenOnly: false,
    lpAddresses: {
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827'
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      137: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'PEN-USDC',
    isTokenOnly: false,
    lpAddresses: {
      137: '0x4c7b992fb450419fc0fdc95636137b0179b5c769'
    },
    tokenSymbol: 'PEN',
    tokenAddresses: {
      137: '0xB0D11Ed9E814C0b1CD7b605Fe5CBF35e48B12CC9'
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 5,
    lpSymbol: 'WMATIC',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0xd1b59d11316e87c3a0a069e80f590ba35cd8d8d3',
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
      137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 4,
    risk: 5,
    lpSymbol: 'WBTC',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0xd1b59d11316e87c3a0a069e80f590ba35cd8d8d3',
      137: '0xf6a637525402643b0654a54bead2cb9a83c8b498', 
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
      137: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6'
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 5,
    risk: 5,
    lpSymbol: 'WETH',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0xd1b59d11316e87c3a0a069e80f590ba35cd8d8d3',
      137: '0x853ee4b2a13f8a742d64c8f088be7ba2131f670d', 
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
      137: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619'
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 6,
    risk: 5,
    lpSymbol: 'QUICK',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0xd1b59d11316e87c3a0a069e80f590ba35cd8d8d3',
      137: '0x1f1e4c845183ef6d50e9609f16f6f9cae43bc9cb', 
    },
    tokenSymbol: 'QUICK',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
      137: '0x831753dd7087cac61ab5644b308642cc1c33dc13'
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 7,
    risk: 5,
    lpSymbol: 'USDT',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0xd1b59d11316e87c3a0a069e80f590ba35cd8d8d3',
      137: '0x2cf7252e74036d1da831d11089d326296e64a728', 
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
      137: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f'
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 8,
    risk: 5,
    lpSymbol: 'USDC',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0xd1b59d11316e87c3a0a069e80f590ba35cd8d8d3',
      137: '0x2cf7252e74036d1da831d11089d326296e64a728', 
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
      137: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174'
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 9,
    risk: 5,
    lpSymbol: 'DAI',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0xd1b59d11316e87c3a0a069e80f590ba35cd8d8d3',
      137: '0xf04adbf75cdfc5ed26eea4bbbb991db002036bdd', 
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
      137: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063'
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }
]

export default farms
