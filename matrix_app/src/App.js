import React, { useEffect, useState } from "react";
import "./App.css";

function formatAddress(address) {
  if (typeof address === "string" && address.length >= 4) {
    return `#${address.slice(-4)}`;
  }
  return address;
}

function App() {
  const [tokenData, setTokenData] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
    )
      .then((response) => response.json())
      .then((data) => {
        setTokenData(data.pairs);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="app">
      <div className="container">
        <div className="sidebar">
          <h1 className="nftify">nftify</h1>
        </div>

        <div className="content">

   
<div className="search-bar">
  <input type="text" placeholder="Search..." />
  <div className="search-icon">&#128269;</div>
</div>



          <h2>Token Search Results</h2>
          <div className="token-grid">
            {tokenData.map((pair, index) => (
              <div key={index} className="token-card">
                <div className="token-info">
                  <h2>Basic Info</h2>
                  <p>Pair Created At: {pair.baseToken.name}</p>
                  <p>Symbol: {pair.baseToken.symbol}</p>
                  <p>Dex ID: {pair.dexId}</p>
                  <p>Pair Address: {formatAddress(pair.pairAddress)}</p>
                </div>
                <div className="token-info">
                  <h2>Base Token</h2>
                  <p>Name: {pair.baseToken.name}</p>
                  <p>Symbol: {pair.baseToken.symbol}</p>
                  <p>Address: {formatAddress(pair.baseToken.address)}</p>
                </div>
                <div className="token-info">
                  <h2>Quote Token</h2>
                  <p>Name: {pair.quoteToken.name}</p>
                  <p>Symbol: {pair.quoteToken.symbol}</p>
                  <p>Address: {formatAddress(pair.quoteToken.address)}</p>
                </div>
                <div className="token-info">
                  <h2>Token Price</h2>
                  <p>Native Price: {pair.priceNative}</p>
                  <p>USD Price: {pair.priceUsd}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer">{/* pink footerbar */}</div>
    </div>
  );
}

export default App;
