import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  const times = [1, 2, 3, 4, 5, 6];
  return (
    <ProductList>
      {times.map(() => (
        <li>
          <img
            src="https://imgcentauro-a.akamaihd.net/900x900/93008651/tenis-adidas-baseline-k-infantil-img.jpg"
            alt="Tênis"
          />
          <strong>
            Tênis muito legal, porém muito muito grande pra um mero título Tênis
            muito legal, porém muito muito grande pra um mero título
          </strong>
          <span>R$ 129,90</span>

          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#fff" /> 3
            </div>
            <span>ADICIONAR AO CARRIONHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
