import { defineStore } from 'pinia';
import product3 from '@/assets/images/products/product3.png';
import product4 from '@/assets/images/products/product4.png';
import product5 from '@/assets/images/products/product5.png';
import product6 from '@/assets/images/products/product6.png';
import product7 from '@/assets/images/products/product7.png';
import product8 from '@/assets/images/products/product8.png';
import product9 from '@/assets/images/products/product9.png';
import product10 from '@/assets/images/products/product10.png';
import product11 from '@/assets/images/products/product11.png';
import product12 from '@/assets/images/products/product12.png';

export const useProductImages = defineStore('productImages', () => {
  const imgUrlsMap = new Map([
    ['product3', product3],
    ['product4', product4],
    ['product5', product5],
    ['product6', product6],
    ['product7', product7],
    ['product8', product8],
    ['product9', product9],
    ['product10', product10],
    ['product11', product11],
    ['product12', product12]
  ]);

  return {
    imgUrlsMap
  };
});
