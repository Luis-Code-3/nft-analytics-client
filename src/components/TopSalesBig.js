import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ethLogo from "../images/EthLogo.png"
import { baseUrl } from "../services/baseUrl";

function TopSalesBig() {

    //const [currentSales, setCurrentSales] = useState(null);

    const [allSaleData, setAllSaleData] = useState(null);
    const [currentFrame,setCurrentFrame] = useState('1h');

    // TIME FRAME FUNCTIONS

    const handleThirtyMinutes = () => {
        axios.get(`${baseUrl}/sales-all-collections/thirtyMinutes`)
          .then((response) => {
            //console.log(response.data);
            setAllSaleData(response.data)
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
            setAllSaleData(response.data)
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
            setAllSaleData(response.data)
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
            setAllSaleData(response.data)
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
            setAllSaleData(response.data)
            setCurrentFrame('7d')
          })
          .catch((err) => {
            console.log(err);
          })
        
      }

    useEffect(() => {

        if(!allSaleData) {
          axios.get(`${baseUrl}/sales-all-collections/hour`)
          .then((response) => {
            setAllSaleData(response.data)
          })
          .catch((err) => {
            console.log(err);
          })
        }
  
      }, [])


    return (
      <div className="analyticsBigContainer">
        <div className="timeBoxContainer">
          <div className="timeBoxBig">
            <button onClick={handleThirtyMinutes}>30m</button>
            <button onClick={handleHour}>1h</button>
            <button onClick={handleOneDay}>24h</button>
            <button onClick={handleThreeDay}>3d</button>
            <button onClick={handleSevenDay}>7d</button>
          </div>

          <p>{currentFrame}</p>
        </div>


        <div className="infoRowBig">
          <button className="collectionInfoBig">NFT ITEM</button>
          <button className="salesInfoBig">PRICE</button>
          <button className="salesInfoBig">TIME</button>
          <button className="salesInfoBig transferInfoBig">TRANSFER</button>
        </div>
        {
          allSaleData ?
          <>
            {allSaleData.map((sale) => {
              return (
                <Link to={`/nft-details/${sale.collectionAddress}/${sale.tokenId}`} key={sale._id}>

                <div className="salesBigRow">
                  <div className="analyticsStartBig">
                    <img src={sale.nftTokenObject.imageUrl} alt='collection logo'/>
                    <div className="nameAndSupplyBig">
                      <h2>{sale.tokenName}</h2>
                      <h2 className="supplyBig">#{sale.tokenId}</h2>
                    </div>
                  </div>
                  <div className="salesPriceBig">
                    <div className="ethSalePriceBig">
                        <img className="ethLogo" src={ethLogo} alt="eth logo"/>
                        <h2>{sale.salePriceEth.toFixed(2)}</h2>
                    </div>
                    <h2 className="usdBig">${sale.salePriceUSD}</h2>
                  </div>

                  <h2 className="salesTimeBig">{sale.transactionTimeStamp}</h2>

                  <div className="salesTransferBig">
                    <h2 className="buyerBig"><span className="sellerTextBig">SELLER:</span> {sale.seller}</h2>
                    <h2 className="buyerBig"><span className="buyerTextBig">BUYER:</span> {sale.buyer}</h2>
                  </div>
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
  
  export default TopSalesBig;