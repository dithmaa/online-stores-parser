

function App({name = "Alpen Gold", price = 3000, image="https://irecommend.ru/sites/default/files/product-images/1064357/5YwJG6L9XSIFR0uS7ZkXQ.jpg", storeName = "Абсолют"}) {
  return (
    <div className="App">
      <div className="container">
        <div className="cards d-flex flex-wrap">
          <div className="card">
            <div className="cardStoreName">
              <h2>{storeName}</h2>
            </div>
            <div className="cardImage">
              <img src={image} alt="" />
            </div>
            <div className="cardName"><h3>{name}</h3></div>
            <div className="cardPrice">{price} р</div>
          </div>
          <div className="card">
            <div className="cardStoreName">
              <h2>{storeName}</h2>
            </div>
            <div className="cardImage">
              <img src={image} alt="" />
            </div>
            <div className="cardName"><h3>{name}</h3></div>
            <div className="cardPrice">{price} р</div>
          </div>
          <div className="card">
            <div className="cardStoreName">
              <h2>{storeName}</h2>
            </div>
            <div className="cardImage">
              <img src={image} alt="" />
            </div>
            <div className="cardName"><h3>{name}</h3></div>
            <div className="cardPrice">{price} р</div>
          </div>
          <div className="card">
            <div className="cardStoreName">
              <h2>{storeName}</h2>
            </div>
            <div className="cardImage">
              <img src={image} alt="" />
            </div>
            <div className="cardName"><h3>{name}</h3></div>
            <div className="cardPrice">{price} р</div>
          </div>
          <div className="card">
            <div className="cardStoreName">
              <h2>{storeName}</h2>
            </div>
            <div className="cardImage">
              <img src={image} alt="" />
            </div>
            <div className="cardName"><h3>{name}</h3></div>
            <div className="cardPrice">{price} р</div>
          </div>
          <div className="card">
            <div className="cardStoreName">
              <h2>{storeName}</h2>
            </div>
            <div className="cardImage">
              <img src={image} alt="" />
            </div>
            <div className="cardName"><h3>{name}</h3></div>
            <div className="cardPrice">{price} р</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
