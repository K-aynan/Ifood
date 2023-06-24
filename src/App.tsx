import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { GlobalStyle } from "./styles/GlobalStyle";
import Home from "./pages/Home/Home";
import Restaurant from "./pages/Restaurant/Restaurant";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant/:id" element={<Restaurant />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
