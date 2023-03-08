import { Link } from "react-router-dom";
import logo from "../images/SnipeLogo.png"

function Footer() {
    return (
      <div className="footerContainer">
        <div className="footerProfile">
            <img src={logo} alt="logo"/>
            <div className="footerFollow">
                <p>Follow Us</p>
                <a href="">Instagram</a>
                <a href="">Twitter</a>
            </div>
        </div>

        <div className="footerRoutes">
            <h4>Analytics</h4>
            <Link to={'/collection-analytics'}>Collections</Link>
            <Link to={'/top-sales'}>Sales</Link>
            <Link to={'/blog'}>Forum</Link>
        </div>

        <div className="footerNews">
            <h4>News</h4>
            <a href="https://decrypt.co/">Decrypt</a>
            <a href="https://cointelegraph.com/">CoinTelegraph</a>
            <a href="https://www.coindesk.com/">Coindesk</a>
        </div>

        <div className="footerResources">
            <h4>Resources</h4>
            <a href="https://etherscan.io/">Etherscan</a>
            <a href="https://www.alchemy.com/">Alchemy</a>
            <a href="https://www.cryptocompare.com/">CryptoCompare</a>
        </div>

        <div className="footerTools">
            <h4>Built With</h4>
            <a href="https://expressjs.com/">Express</a>
            <a href="https://reactjs.org/">React</a>
            <a href="https://www.mongodb.com/">MongoDB</a>
        </div>

      </div>
    );
  }
  
  export default Footer;