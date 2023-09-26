import React, { useState } from 'react';
import { Button } from '../button/Button';
import '../scss/in-cart-button.scss';
import { useStore } from 'src/store/state';

type propsInCartButton = {
  productId: number;
};
export const InCartButton = (props: propsInCartButton) => {
  const { productId } = props;
  const toBucket = useStore((state) => state.setBucket);

  const InCart = () => {
    return (
      <div className="button-in-cart">
        <Button label="В корзину" backgroundColor="#1ea7fd" />
      </div>
    );
  };

  const Input = () => {
    const backgroundColor = '#1ea7fd';
    const [count, setCount] = useState(0);
    return (
      <div className="card-count-input">
        <Button label={'-'} backgroundColor={backgroundColor} onClick={() => setCount(count - 1)} />
        <input
          value={count}
          onChange={(e) => {
            setCount(parseInt(e.target.value));
          }}
        />
        <Button label={'+'} backgroundColor={backgroundColor} onClick={() => setCount(count + 1)} />
      </div>
    );
  };
  return (
    <div className="add-to-cart-button">
      <div className="card-count-input">
        <Input />
      </div>
      <InCart />
    </div>
  );
};
