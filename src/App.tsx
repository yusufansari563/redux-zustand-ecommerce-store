import React from 'react';
import ReactDOM from 'react-dom';
import { useStore } from './store';
import './index.scss';
import { Product } from './scene/product/product';
import Container from './components/Container';

const App = () => {
  return (
    <Container>
      <Product />
    </Container>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
