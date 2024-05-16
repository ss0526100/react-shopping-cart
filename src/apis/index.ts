import { generateBasicToken } from '../utils/auth';
import { CartItem } from '../type';
import API_CONFIG from './config';

const API_URL = API_CONFIG.API_URL;
const USER_ID = API_CONFIG.USER_ID;
const USER_PASSWORD = API_CONFIG.USER_PASSWORD;

const CART_ITEMS = 'cart-items';

export async function fetchCartItems(): Promise<CartItem[]> {
  const token = generateBasicToken(USER_ID, USER_PASSWORD);
  const response = await fetch(`${API_URL}/${CART_ITEMS}`, {
    method: 'GET',
    headers: { Authorization: token },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch cart items');
  }

  const data = await response.json();
  return data.content;
}

export async function addCartItem(productId: number): Promise<void> {
  const token = generateBasicToken(USER_ID, USER_PASSWORD);
  const response = await fetch(`${API_URL}/${CART_ITEMS}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({ productId }),
  });

  if (!response.ok) {
    throw new Error('Failed to add cart item');
  }
}

export async function removeCartItem(cartItemId: number): Promise<void> {
  const token = generateBasicToken(USER_ID, USER_PASSWORD);
  const response = await fetch(`${API_URL}/${CART_ITEMS}/${cartItemId}`, {
    method: 'DELETE',
    headers: {
      Authorization: token,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to remove cart item');
  }
}

export async function updateCartItemQuantity(cartItemId: number, quantity: number): Promise<void> {
  const token = generateBasicToken(USER_ID, USER_PASSWORD);
  const response = await fetch(`${API_URL}/${CART_ITEMS}/${cartItemId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({ quantity }),
  });

  if (!response.ok) {
    throw new Error('Failed to add cart item');
  }
}
