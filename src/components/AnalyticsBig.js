import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AnalyticsBig() {

  const [allCollectionThirty, setAllCollectionThirty] = useState(null);
    const [allCollectionHour, setAllCollectionHour] = useState(null);
    const [allCollectionOneDay, setAllCollectionOneDay] = useState(null);
    const [allCollectionThreeDay, setAllCollectionThreeDay] = useState(null);
    const [allCollectionSevenDay, setAllCollectionSevenDay] = useState(null);



    // useEffect(() => {

    //   if(!allCollectionHour) {
    //     axios.get('http://localhost:4000/all-collection-analytics/oneDay')
    //     .then((response) => {
    //       //console.log(response);
    //       setAllCollectionHour(response.data)
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     })
    //   }

    // }, [])


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
          <button className="collectionInfoBig">COLLECTION</button>
          <button className="infoBig">FLOOR PRICE</button>
          <button className="infoBig">SALES</button>
          <button className="infoBig">AVERAGE</button>
          <button className="infoBig">VOLUME</button>
          <button className="infoBig">MARKET CAP</button>
        </div>
        {
          allCollectionHour ?
          <>
            {allCollectionHour.map((collection) => {
              return (
                <Link to={`/collection-details/${collection.collectionAddress}`} key={collection._id}>

                <div className="analyticsBigRow">
                  <div className="analyticsStartBig">
                    <img src={collection.collectionLogo} alt='collection logo'/>
                    <div className="nameAndSupplyBig">
                      <h2>{collection.collectionName}</h2>
                      <h2 className="supplyBig">TOTAL SUPPLY: {collection.tokenSupply}</h2>
                    </div>
                  </div>
                  <div className="analyticsFloorPriceBig">
                    <h2>{collection.floorPrice}</h2>
                    <h2 className="usdBig">${collection.floorPriceUSD}</h2>
                  </div>

                  <h2 className="salesBig">{collection.totalSales}</h2>

                  <div className="analyticsAverageBig">
                    <h2>{collection.averageSalePriceEth}</h2>
                    <h2 className="usdBig">${collection.averageSalePriceUsd}</h2>
                  </div>

                  <div className="analyticsVolumeBig">
                    <h2>{collection.volumeEth}</h2>
                    <h2 className="usdBig">${collection.volumeUsd.toFixed(2)}</h2>
                  </div>

                  <div className="analyticsCapBig">
                    <h2>{collection.marketCapEth}</h2>
                    <h2 className="usdBig">${collection.marketCapUsd}</h2>
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
  
  export default AnalyticsBig;