import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Spinner from './components/Spinner/Spinner'
import './index.css'
const AppLazy = React.lazy(() =>import('./App'))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Suspense fallback={<Spinner/>}>
  <AppLazy />
  </Suspense>
   
  </BrowserRouter>
);


