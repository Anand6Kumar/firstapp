import './App.css';
import Home from './Home';

function App() {
  return (
    <div >

      <body>

        <nav class="navbar">
          <div class="nav">
            <img src="https://w7.pngwing.com/pngs/11/552/png-transparent-online-shopping-mobile-phone-shopping-phone-icon-coffee-shop-shopping-bags-trolleys-thumbnail.png"
              class="brand-logo" alt="Shopping Cart" />
            <div class="nav-items">
              <div class="search">
                <input type="text" class="search-box" placeholder="search brand, product" />
                <button class="search-btn">search</button>
              </div>
              <a href="#"><img
                src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png"
                alt="user" /></a>
              <a href="#"><img
                src="https://w7.pngwing.com/pngs/15/271/png-transparent-computer-icons-online-shopping-shopping-cart-service-shopping-cart-icon-text-service-retail-thumbnail.png"
                alt="cart" /></a>
            </div>
          </div>
          <ul class="links-container">
            <li class="link-item"><a href="#" class="link">home</a></li>
            <li class="link-item"><a href="#" class="link">women</a></li>
            <li class="link-item"><a href="#" class="link">men</a></li>
            <li class="link-item"><a href="#" class="link">accessories</a></li>
          </ul>
        </nav>
        <div id="productData"> </div>

        {/* <!-- <div class="test">
        <div class="card">
            <img src="https://w7.pngwing.com/pngs/462/672/png-transparent-feature-phone-smartphone-cellular-network-phone-gadget-phone-icon-mobile-phone-thumbnail.png"
                alt="Denim Jeans" style="width:100%">
            <h1>Samsung Phone</h1>
            <p class="price">$350</p>
            <p>32GB Slim Samsung mobile Never Settle Down </p>
            <p><button>Add to Cart</button></p>
        </div> -->

    <!-- <div class="card">
            <img
                src="https://w7.pngwing.com/pngs/723/143/png-transparent-shoe-nike-free-air-force-nike-shoes-image-file-formats-fashion-outdoor-shoe-thumbnail.png">
            <h1>Nike Shoes</h1>
            <p class="price">$85</p>
            <p>Comfort Nike Shoes for Casual Wear </p>
            <p><button>Add to Cart</button></p>
        </div> --> */}



      </body>

      < Home />

    </div>
  );
}

export default App;
