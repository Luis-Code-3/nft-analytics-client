import { useState, useEffect } from "react";
import axios from "axios";


function AnalyticsSmall() {

    //const [currentAnalytics, setCurrentAnalytics] = useState(null);

    // const [allCollectionThirty, setAllCollectionThirty] = useState(null);
    // const [allCollectionHour, setAllCollectionHour] = useState(null);
    // const [allCollectionOneDay, setAllCollectionOneDay] = useState(null);
    // const [allCollectionThreeDay, setAllCollectionThreeDay] = useState(null);
    // const [allCollectionSevenDay, setAllCollectionSevenDay] = useState(null);



    // useEffect(() => {

    //   if(!allCollectionHour) {
    //     axios.get('sales-all-collections/hour')
    //     .then((response) => {
    //       setAllCollectionHour(response.data)
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     })
    //   }

    // }, [])


    return (
      <div>
        {/* {
          allCollectionHour ?
          <>
            {allCollectionHour.map((collection) => {
              return (
                <>
                  <img src={collection.collectionLogo} alt='collection logo'/>
                  <h2>{collection.collectionName}</h2>
                  <h2>{collection.tokenSupply}</h2>
                  <h2>{collection.floorPrice}</h2>
                  <h2>{collection.floorPriceUSD}</h2>
                  <h2>{collection.totalSales}</h2>
                  <h2>{collection.averageSalePriceEth}</h2>
                  <h2>{collection.averageSalePriceUsd}</h2>
                  <h2>{collection.volumeEth}</h2>
                  <h2>{collection.volumeUsd}</h2>
                  <h2>{collection.marketCapEth}</h2>
                  <h2>{collection.marketCapUsd}</h2>
                  <br></br>
                </>

              )
            })}

          </>




          : <h4>Loading...</h4>
        } */}


      </div>
    );
  }
  
  export default AnalyticsSmall;