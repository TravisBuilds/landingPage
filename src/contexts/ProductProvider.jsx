import React, { createContext, useReducer } from 'react';
// import { McdPlugin } from '@makerdao/dai'; // makerdao is a library that allows for interaction with the DAI coin.
import { ethers } from 'ethers';
import ProductReducer from './ProductReducer';
import kalonCard from '../assets/product1.png';
import loreal from '../assets/product2.png';
import mystery from '../assets/product3.png';
import lvmh from '../assets/product4.png';
import kalonfeature from '../assets/kalon.png';
import lvmhfeature from '../assets/lvmh.png';
import lorealfeature from '../assets/loreal.png';
import randomfeature from '../assets/randomfeature.png';

// import ProductToken.sol
// Initial Placeholder
const initialState = {
  products: [
    {
      name: 'Kalon Tea',
      ticker: 'KLT',
      price: 12,
      supply: 500, // tokenInstance.getSupply()
      available: 500, // tokenInstance.getAvailability()
      img: kalonCard,
      tagline: 'Essence of Nature',
      blurb: "Nature's first green is gold, infused in a liquor that will make it truly last forever",
      feature: kalonfeature
    },
    {
      name: "L'Oréal ",
      ticker: 'OREAL',
      price: 20,
      supply: 2500, // etc.
      available: 2500,
      img: loreal,
      tagline: "Because you're worth it ",
      blurb: "Be the star that you were always meant to be, L'oreal, because you're worth it",
      feature: lorealfeature
    },
    {
      name: 'Mystery Box',
      ticker: 'RAND',
      price: 15,
      supply: 1000,
      available: 1000,
      img: mystery,
      tagline: 'Try Me',
      blurb: 'buy me for the chance to redeem anything in our entire catalog',
      feature: randomfeature
    },
    {
      name: 'LVMH',
      ticker: 'LVMH',
      price: 122,
      supply: 3000,
      available: 3000,
      img: lvmh,
      tagline: 'Making it Real',
      blurb: 'A timeless first and a vibrant way to touch up both your digital and IRL identity',
      feature: lvmhfeature
    }
  ]
};

// Create Context
const ProductContext = createContext(initialState);

// Provider Component
const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  // Actions
  async function tokenBuy(product) {
    // const a = await retrieveTokenByName(product.name);
    // await buy(a).then((result) => {
    //   console.log(result);
    //   dispatch({
    //     type: 'TOKEN_BOUGHT',
    //     product,
    //     result
    //   });
    // }).catch((e) => {
    //   console.log(e);
    // });
  }

  async function tokenSell(product) {
    // const a = await retrieveTokenByName(product.name);
    // await sell(a).then((result) => {
    //   console.log(result);
    //   dispatch({
    //     type: 'TOKEN_SOLD',
    //     product,
    //     result
    //   });
    // }).catch((e) => {
    //   console.log(e);
    // });
  }

  async function tokenRedeem(product) {
    // const a = await retrieveTokenByName(product.name);
    // await tradeIn(a).then((result) => {
    //   console.log(result);
    //   dispatch({
    //     type: 'TOKEN_REDEEMED',
    //     product,
    //     result
    //   });
    // }).catch((e) => {
    //   console.log(e);
    // });
  }

  async function tokenAvailable(product) {
    // const a = await retrieveTokenByName(product.name);
    // await getAvailability(a).then((available) => {
    //   dispatch({
    //     type: 'TOKEN_AVAILABLE',
    //     product,
    //     available
    //   });
    // }).catch((e) => {
    //   console.log(e);
    // });
  }

  async function tokenPrice(product) {
    // const a = await retrieveTokenByName(product.name);
    // await getPrice(a).then((price) => {
    //   dispatch({
    //     type: 'TOKEN_PRICE',
    //     product,
    //     price
    //   });
    // }).catch((e) => {
    //   console.log(e);
    // });
  }

  return (
    <ProductContext.Provider value={{
      products: state.products,
      tokenAvailable,
      tokenPrice,
      tokenBuy,
      tokenSell,
      tokenRedeem
    }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.context = ProductContext;

export default ProductProvider;
