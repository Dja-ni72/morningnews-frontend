import '../styles/globals.css';
import Head from 'next/head';
import Header from '../components/Header';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import { Provider } from 'react-redux';
import bookmarks from '../reducers/bookmarks'; 
import user from '../reducers/user';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import hiddenArticles from '../reducers/hiddenArticles'



const reducers = combineReducers({ hiddenArticles });

const store = configureStore({
  reducer: { bookmarks, user, hiddenArticles },
});

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Morning News</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
