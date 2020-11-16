
import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom"
import store from "./store"
import Routes from './routes'
import  Header  from './components/Header'
import Footer from './components/Footer';

function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header/>
        <Routes/>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}
export default App;
