import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        alt="amazon banner"
        src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2019/Other/RB-1424_AcquisitionHolidayAssets/GW_DesktopHero_RB-1424_PV-AcquisitionHolidayAssets_1500x600._CB451871227_.jpg"
      />

      <div className="home__row">
        <Product
          id="123431234"
          title="User Friendly: How the Hidden Rules of Design Are Changing the Way We Live, Work, and Play"
          price={14.99}
          rating={5}
          image="https://books.google.com/books/content/images/frontcover/orVuDwAAQBAJ?fife=w200-h300"
        />
        <Product
          id="143543245"
          title="Aucma Stand Mixer,6.5-QT 660W 6-Speed Tilt-Head Food Mixer, Kitchen Electric Mixer with Dough Hook, Wire Whip & Beater (6.5QT, Champagne)"
          price={118.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61FLLaPm-QL._AC_SL1001_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="314231245"
          title="Espresso Machine 3.5 Bar 4 Cup Espresso Maker Cappuccino Machine with Steam Milk Frother and Carafe"
          price={59.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61EDSS9hnJL._AC_SL1500_.jpg"
        />
        <Product
          id="1324543254"
          title="Logitech MX Master 3 Advanced Wireless Mouse - Graphite"
          price={99.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61wtRwxd%2BIL._AC_SL1500_.jpg"
        />
        <Product
          id="543235230"
          title="Apple Watch Series 3 (GPS, 38mm) - Space Gray Aluminum Case with Black Sport Band"
          price={169.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71EqEnW8CdL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123431233"
          title="LG 34WN80C-B 34 inch 21:9 Curved UltraWide WQHD IPS Monitor with USB Type-C Connectivity sRGB 99% Color Gamut and HDR10 Compatibility, Black (2019)"
          price={505.41}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81WBbFOEHwL._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
