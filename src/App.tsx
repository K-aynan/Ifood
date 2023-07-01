import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { GlobalStyle } from "./styles/GlobalStyle";
import Home from "./pages/Home/Home";
import Restaurant from "./pages/Restaurant/Restaurant";
import Modal from "./components/Modal/Modal";
import { Product } from "./store/type";

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleBuyButtonClick = (product: Product) => {
    setModalOpen(true);
    setModalContent(
      <div>
        <h2>{product.nome}</h2>
        <p>{product.descricao}</p>
        <p>Price: ${product.preco}</p>
      </div>
    );
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };

  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant/:id" element={<Restaurant />} />
        </Routes>
        {data.map((restaurant) => (
          <div key={restaurant.id}>
            <h2>{restaurant.nome}</h2>
            <p>{restaurant.descricao}</p>
            <img src={restaurant.capa} alt={restaurant.nome} />
            {restaurant.cardapio.map((product: Product) => (
              <div key={product.id}>
                <h3>{product.nome}</h3>
                <p>{product.descricao}</p>
                <p>Price: ${product.preco}</p>
                <button onClick={() => handleBuyButtonClick(product)}>
                  Buy
                </button>
              </div>
            ))}
          </div>
        ))}
        <Modal isOpen={modalOpen} onClose={closeModal} content={modalContent} />
      </Router>
    </Provider>
  );
};

export default App;
