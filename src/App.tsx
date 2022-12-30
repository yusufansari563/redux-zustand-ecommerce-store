import React from 'react';
import ReactDOM from 'react-dom';
import { useStore } from './store';
import './index.scss';
import { Product } from './Presentation/scene/product/product';
import Container from './Presentation/components/Container';

const App = () => {
  return (
    <Container>
      <Product />
    </Container>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
