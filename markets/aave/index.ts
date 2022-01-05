import { oneRay, ZERO_ADDRESS } from '../../helpers/constants';
import { IAaveConfiguration, eEthereumNetwork } from '../../helpers/types';

import { CommonsConfig } from './commons';
import {
  strategyBUSD,
  strategyDAI,
  strategySUSD,
  strategyTUSD,
  strategyUSDC,
  strategyUSDT,
  strategyAAVE,
  strategyBAT,
  strategyZRX,
  strategyKNC,
  strategyLINK,
  strategyMANA,
  strategyMKR,
  strategyREN,
  strategySNX,
  strategyUNI,
  strategyWBTC,
  strategyWETH,
  strategyYFI,
  strategyXSUSHI,
  strategyENJ,
} from './reservesConfigs';

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const AaveConfig: IAaveConfiguration = {
  ...CommonsConfig,
  MarketId: 'Aave genesis market',
  ProviderId: 1,
  ReservesConfig: {
    AAVE: strategyAAVE,
    BAT: strategyBAT,
    BUSD: strategyBUSD,
    DAI: strategyDAI,
    ENJ: strategyENJ,
    KNC: strategyKNC,
    LINK: strategyLINK,
    MANA: strategyMANA,
    MKR: strategyMKR,
    REN: strategyREN,
    SNX: strategySNX,
    SUSD: strategySUSD,
    TUSD: strategyTUSD,
    UNI: strategyUNI,
    USDC: strategyUSDC,
    USDT: strategyUSDT,
    WBTC: strategyWBTC,
    WETH: strategyWETH,
    YFI: strategyYFI,
    ZRX: strategyZRX,
    xSUSHI: strategyXSUSHI,
  },
  ReserveAssets: {
    [eEthereumNetwork.buidlerevm]: {},
    [eEthereumNetwork.hardhat]: {},
    [eEthereumNetwork.coverage]: {},
    [eEthereumNetwork.kovan]: { //duke 这些地址都是AAVE自己水龙头的地址
    //   AAVE: '0xB597cd8D3217ea6477232F9217fa70837ff667Af',
    //   BAT: '0x2d12186Fbb9f9a8C28B3FfdD4c42920f8539D738',
    //   BUSD: '0x4c6E1EFC12FDfD568186b7BAEc0A43fFfb4bCcCf',
      DAI: '0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD',
    //   ENJ: '0xC64f90Cd7B564D3ab580eb20a102A8238E218be2',
    //   KNC: '0x3F80c39c0b96A0945f9F0E9f55d8A8891c5671A8',
    //   LINK: '0xAD5ce863aE3E4E9394Ab43d4ba0D80f419F61789',
    //   MANA: '0x738Dc6380157429e957d223e6333Dc385c85Fec7',
    //   MKR: '0x61e4CAE3DA7FD189e52a4879C7B8067D7C2Cc0FA',
    //   REN: '0x5eebf65A6746eed38042353Ba84c8e37eD58Ac6f',
    //   SNX: '0x7FDb81B0b8a010dd4FFc57C3fecbf145BA8Bd947',
    //   SUSD: '0x99b267b9D96616f906D53c26dECf3C5672401282',
    //   TUSD: '0x016750AC630F711882812f24Dba6c95b9D35856d',
    //   UNI: '0x075A36BA8846C6B6F53644fDd3bf17E5151789DC',
    //   USDC: '0xe22da380ee6B445bb8273C81944ADEB6E8450422',
    //   USDT: '0x13512979ADE267AB5100878E2e0f485B568328a4',
    //   WBTC: '0xD1B98B6607330172f1D991521145A22BCe793277',
    //   WETH: '0xd0a1e359811322d97991e03f863a0c30c2cf029c',
    //   YFI: '0xb7c325266ec274fEb1354021D27FA3E3379D840d',
    //   ZRX: '0xD0d76886cF8D952ca26177EB7CfDf83bad08C00C',
    },
    [eEthereumNetwork.ropsten]: {
      AAVE: '',
      BAT: '0x85B24b3517E3aC7bf72a14516160541A60cFF19d',
      BUSD: '0xFA6adcFf6A90c11f31Bc9bb59eC0a6efB38381C6',
      DAI: '0xf80A32A835F79D7787E8a8ee5721D0fEaFd78108',
      ENJ: ZERO_ADDRESS,
      KNC: '0xCe4aA1dE3091033Ba74FA2Ad951f6adc5E5cF361',
      LINK: '0x1a906E71FF9e28d8E01460639EB8CF0a6f0e2486',
      MANA: '0x78b1F763857C8645E46eAdD9540882905ff32Db7',
      MKR: '0x2eA9df3bABe04451c9C3B06a2c844587c59d9C37',
      REN: ZERO_ADDRESS,
      SNX: '0xF80Aa7e2Fda4DA065C55B8061767F729dA1476c7',
      SUSD: '0xc374eB17f665914c714Ac4cdC8AF3a3474228cc5',
      TUSD: '0xa2EA00Df6d8594DBc76b79beFe22db9043b8896F',
      UNI: ZERO_ADDRESS,
      USDC: '0x851dEf71f0e6A903375C1e536Bd9ff1684BAD802',
      USDT: '0xB404c51BBC10dcBE948077F18a4B8E553D160084',
      WBTC: '0xa0E54Ab6AA5f0bf1D62EC3526436F3c05b3348A0',
      WETH: '0xc778417e063141139fce010982780140aa0cd5ab',
      YFI: ZERO_ADDRESS,
      ZRX: '0x02d7055704EfF050323A2E5ee4ba05DB2A588959',
    },
    [eEthereumNetwork.main]: {
      AAVE: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9',
      BAT: '0x0d8775f648430679a709e98d2b0cb6250d2887ef',
      BUSD: '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
      DAI: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      ENJ: '0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c',
      KNC: '0xdd974D5C2e2928deA5F71b9825b8b646686BD200',
      LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
      MANA: '0x0F5D2fB29fb7d3CFeE444a200298f468908cC942',
      MKR: '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2',
      REN: '0x408e41876cCCDC0F92210600ef50372656052a38',
      SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
      SUSD: '0x57Ab1ec28D129707052df4dF418D58a2D46d5f51',
      TUSD: '0x0000000000085d4780B73119b644AE5ecd22b376',
      UNI: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
      USDC: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      USDT: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      WBTC: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
      WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      YFI: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
      ZRX: '0xE41d2489571d322189246DaFA5ebDe1F4699F498',
      xSUSHI: '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272',
    },
    [eEthereumNetwork.tenderly]: {
      AAVE: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9',
      BAT: '0x0d8775f648430679a709e98d2b0cb6250d2887ef',
      BUSD: '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
      DAI: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      ENJ: '0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c',
      KNC: '0xdd974D5C2e2928deA5F71b9825b8b646686BD200',
      LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
      MANA: '0x0F5D2fB29fb7d3CFeE444a200298f468908cC942',
      MKR: '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2',
      REN: '0x408e41876cCCDC0F92210600ef50372656052a38',
      SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
      SUSD: '0x57Ab1ec28D129707052df4dF418D58a2D46d5f51',
      TUSD: '0x0000000000085d4780B73119b644AE5ecd22b376',
      UNI: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
      USDC: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      USDT: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      WBTC: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
      WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      YFI: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
      ZRX: '0xE41d2489571d322189246DaFA5ebDe1F4699F498',
      xSUSHI: '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272',
    },
  },
};

export default AaveConfig;
