import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './GlobalStyles.styled';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './Redux/store';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <BrowserRouter basename="/PicsWorld-Team-frontend">
          <App />
        </BrowserRouter>
      </Provider>
      <Toaster position="top-right" reverseOrder={false} gutter={8} />
    </PersistGate>
    <GlobalStyles />
  </React.StrictMode>
);
