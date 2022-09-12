import './App.css';
import Home from './Home';

function App() {
  return (
    <div >

      <body>

        <nav className="navbar">
          <div className="nav">
            <img src="https://w7.pngwing.com/pngs/11/552/png-transparent-online-shopping-mobile-phone-shopping-phone-icon-coffee-shop-shopping-bags-trolleys-thumbnail.png"
              className="brand-logo" alt="Shopping Cart" />
            <div className="nav-items">
              <div className="search">
                <input type="text" className="search-box" placeholder="search brand, product" />
                <button className="search-btn">search</button>
              </div>
              <a href="#"><img
                src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png"
                alt="user" /></a>
              <a href="#"><img
                src="https://w7.pngwing.com/pngs/15/271/png-transparent-computer-icons-online-shopping-shopping-cart-service-shopping-cart-icon-text-service-retail-thumbnail.png"
                alt="cart" /></a>
            </div>
          </div>
          <ul className="links-container">
            <li className="link-item"><a href="#" className="link">home</a></li>
            <li className="link-item"><a href="#" className="link">women</a></li>
            <li className="link-item"><a href="#" className="link">men</a></li>
            <li className="link-item"><a href="#" className="link">accessories</a></li>
          </ul>
        </nav>
        <div id="productData"> </div>

      </body>

      < Home />

    </div>
  );
}

export default App;
