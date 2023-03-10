import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ethLogo from "../images/EthLogo.png"
import { baseUrl } from "../services/baseUrl";

function TopSalesSmall() {

    const [allSaleData, setAllSaleData] = useState(null);
    const [currentFrame,setCurrentFrame] = useState('24h');

    const handleThirtyMinutes = () => {
        axios.get(`${baseUrl}/sales-all-collections/thirtyMinutes`)
          .then((response) => {
            //console.log(response.data);
            let newArr = response.data.slice(0,8)
            setAllSaleData(newArr)
            setCurrentFrame('30m')
          })
          .catch((err) => {
            console.log(err);
          })
  
      }
  
      const handleHour = () => {
        axios.get(`${baseUrl}/sales-all-collections/hour`)
          .then((response) => {
            //console.log(response.data);
            let newArr = response.data.slice(0,8)
            setAllSaleData(newArr)
            setCurrentFrame('1h')
          })
          .catch((err) => {
            console.log(err);
          })
        
      }
  
      const handleOneDay = () => {
        axios.get(`${baseUrl}/sales-all-collections/oneDay`)
          .then((response) => {
            //console.log(response.data);
            let newArr = response.data.slice(0,8)
            setAllSaleData(newArr)
            setCurrentFrame('24h')
          })
          .catch((err) => {
            console.log(err);
          })
        
      }
  
      const handleThreeDay = () => {
        axios.get(`${baseUrl}/sales-all-collections/threeDay`)
          .then((response) => {
            //console.log(response.data);
            let newArr = response.data.slice(0,8)
            setAllSaleData(newArr)
            setCurrentFrame('3d')
          })
          .catch((err) => {
            console.log(err);
          })
        
      }
  
      const handleSevenDay = () => {
        axios.get(`${baseUrl}/sales-all-collections/sevenDay`)
          .then((response) => {
            //console.log(response.data);
            let newArr = response.data.slice(0,8)
            setAllSaleData(newArr)
            setCurrentFrame('7d')
          })
          .catch((err) => {
            console.log(err);
          })
        
      }

    useEffect(() => {

        if(!allSaleData) {
          axios.get(`${baseUrl}/sales-all-collections/oneDay`)
          .then((response) => {
            let newArr = response.data.slice(0,8)
            setAllSaleData(newArr)
          })
          .catch((err) => {
            console.log(err);
          })
        }
  
      }, [])



    return (
        <div className="smallAnalyticContainer">
        <div className="topNavigationSmall">
          <div className="timeBoxSmall">
            <button onClick={handleThirtyMinutes}>30m</button>
            <button onClick={handleHour}>1h</button>
            <button onClick={handleOneDay}>24h</button>
            <button onClick={handleThreeDay}>3d</button>
            <button onClick={handleSevenDay}>7d</button>
          </div>
          <p className="currentFrameAnalytics">{currentFrame}</p>
          <Link className="seeMoreSmall" to={'/top-sales'}>Top Sales</Link>
        </div>


        <div className="infoRowSmall">
          <button className="collectionInfoSmallTwo">NFT ITEM</button>
          <button className="infoSmallTwo">PRICE</button>
          <button className="infoSmallTwo">TIME</button>
        </div>
        {
          allSaleData ?
          <>
            {allSaleData.map((sale) => {
              return (
                <Link to={`/nft-details/${sale.collectionAddress}/${sale.tokenId}`} key={sale._id}>

                <div className="salesSmallRow">
                  <div className="salesStartSmall">
                    <img src={sale.nftTokenObject.imageUrl} alt='collection logo'/>
                    <div className="nameAndSupplyBig">
                      <h2>{sale.tokenName}</h2>
                      <h2 className="supplyBig">#{sale.tokenId}</h2>
                    </div>
                  </div>
                  <div className="salesPriceSmall">
                    <div className="ethSalePriceBig">
                      <img className="ethLogoTwo" src={ethLogo} alt="eth logo"/>
                      <h2>{sale.salePriceEth.toFixed(2)}</h2>
                    </div>
                    <h2 className="usdBig">${sale.salePriceUSD}</h2>
                  </div>

                  <h2 className="salesTimeSmall">{sale.transactionTimeStamp}</h2>



                </div>
                </Link>

              )
            })}

          </>




          : <h4>Loading...</h4>
        }
    </div>
    );
  }
  
  export default TopSalesSmall;