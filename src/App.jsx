import { useState, useContext, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import { ProductsContext } from "./context/ProductsContext";
import InputForm from "./components/InputForm";

import { saveAs } from "file-saver";

function App() {
  const { connectWallet, currentAccount, productIDforQR } =
    useContext(ProductsContext);

  const downloadQR = () => {
    saveAs(
      `https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${productIDforQR}`,
      `QR code (${productIDforQR}) .png`
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          {!currentAccount && (
            <button type="button" onClick={connectWallet}>
              Connect to Wallet
            </button>
          )}
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
        <InputForm />
        <div>
          {productIDforQR ? (
            <button onClick={downloadQR}>Download QR code</button>
          ) : null}
        </div>
      </header>
    </div>
  );
}

export default App;
