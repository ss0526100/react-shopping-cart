import CartContainer from '../components/CartContainer/CartContainer';
import ConfirmButton from '../components/ConfirmButton/ConfirmButton';
import Header from '../components/Header/Header';
import { Suspense } from 'react';
import TitleContainer from '../components/TitleContainer/TitleContainer';
import styled from '@emotion/styled';

export default function ShoppingCartPage() {
  return (
    <>
      <Header>SHOP</Header>
      <Content>
        <TitleContainer title="장바구니" />
        <Suspense>
          <CartContainer />
        </Suspense>
      </Content>
      <Suspense>
        <ConfirmButton />
      </Suspense>
    </>
  );
}

const Content = styled.section({
  padding: '36px 24px',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  flex: '1 0 auto',
});
