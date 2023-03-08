import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function TopSalesBig() {

    //const [currentSales, setCurrentSales] = useState(null);

    const [allSaleThirty, setAllSaleThirty] = useState(null);
    const [allSaleHour, setAllSaleHour] = useState(null);
    const [allSaleOneDay, setAllSaleOneDay] = useState(null);
    const [allSaleThreeDay, setAllSaleThreeDay] = useState(null);
    const [allSaleSevenDay, setAllSaleSevenDay] = useState(null);

    useEffect(() => {

        if(!allSaleHour) {
          axios.get('/sales-all-collections/hour')
          .then((response) => {
            setAllSaleHour(response.data)
          })
          .catch((err) => {
            console.log(err);
          })
        }
  
      }, [])


    return (
      <div className="analyticsBigContainer">
        <div className="timeBoxBig">
          <button>30m</button>
          <button>1h</button>
          <button>24h</button>
          <button>3d</button>
          <button>7d</button>
        </div>


        <div className="infoRowBig">
          <button className="collectionInfoBig">NFT ITEM</button>
          <button className="infoBig">TIME</button>
          <button className="infoBig">PRICE</button>
          <button className="infoBig">TRANSFER</button>
          <button className="infoBig">TX HASH</button>
          <button className="infoBig">MARKET CAP</button>
        </div>
        {
          allSaleHour ?
          <>
            {allSaleHour.map((sale) => {
              return (
                <Link to={`/nft-details/${sale.collectionAddress}/${sale.tokenId}`} key={sale._id}>

                <div className="analyticsBigRow">
                  <div className="analyticsStartBig">
                    <img src={sale.nftTokenObject.imageUrl} alt='collection logo'/>
                    <div className="nameAndSupplyBig">
                      <h2>{sale.tokenName}</h2>
                      <h2 className="supplyBig">#{sale.tokenId}</h2>
                    </div>
                  </div>
                  <div className="analyticsFloorPriceBig">
                    <h2>{sale.tokenName}</h2>
                    <h2 className="usdBig">${sale.tokenId}</h2>
                  </div>

                  <h2 className="salesBig">{sale.transactionTimeStamp}</h2>

                  <div className="analyticsAverageBig">
                    <h2>{sale.salePriceUsd}</h2>
                    <h2 className="usdBig">${sale.salePriceEth}</h2>
                  </div>

                  <div className="analyticsVolumeBig">
                    <h2>{sale.seller}</h2>
                    <h2 className="usdBig">{sale.buyer}</h2>
                  </div>

                  <div className="analyticsCapBig">
                    <h2>{sale.transactionHash}</h2>
                    <h2 className="usdBig">{sale.transactionHash}</h2>
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