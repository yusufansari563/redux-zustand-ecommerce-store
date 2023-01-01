import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { useStore } from './store';
import './index.scss';
// import { Product } from './Presentation/scene/product/product';
import Container from './Presentation/components/Container';
import Loader from './Presentation/components/Loader/Loader';

const Product = React.lazy(
  () => import('./Presentation/scene/product/product')
);



const App = () => {
  return (
    <Container>
      <Suspense fallback={<Loader />}>
        <Product />
      </Suspense>
    </Container>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
