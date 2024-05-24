import { cartItemsState, uncheckedItemIdsState } from './atoms';

import { CartItem } from '../type';
import { selector } from 'recoil';

export const checkedItemsState = selector<CartItem[]>({
  key: 'checkedItemState',
  get: ({ get }) => {
    const cartItems = get(cartItemsState);
    const uncheckedItemIds = get(uncheckedItemIdsState);

    const result = cartItems.reduce((arr, item) => {
      if (uncheckedItemIds.includes(item.id)) return arr;
      arr.push(item);
      return arr;
    }, [] as CartItem[]);

    return result;
  },
});

export const deliveryFeeState = selector<number>({
  key: 'deliveryFeeState',
  get: ({ get }) => {
    const checkedItem = get(checkedItemsState);
    const orderAmount = checkedItem.reduce(
      (acc, item) => acc + item.quantity * item.product.price,
      0,
    );
    return orderAmount >= 100000 || checkedItem.length === 0 ? 0 : 3000;
  },
});
