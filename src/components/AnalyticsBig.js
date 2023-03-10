import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ethLogo from "../images/EthLogo.png"
import { baseUrl } from "../services/baseUrl";

function AnalyticsBig() {

    const [sortFloorOrder, setSortFloorOrder] = useState('asc')
    const [sortSaleOrder, setSortSaleOrder] = useState('asc')
    const [sortAverageOrder, setSortAverageOrder] = useState('asc')
    const [sortVolumeOrder, setSortVolumeOrder] = useState('asc')
    const [sortMarketCapOrder, setSortMarketCapOrder] = useState('asc')

    const [currentFrame,setCurrentFrame] = useState('1h');

    const [allCollectionData, setAllCollectionData] = useState(null);


    const sortFloorPrice = () => {
      let newArr = [...allCollectionData].sort((a,b) => {
        if(sortFloorOrder === 'asc') {
          return b.floorPriceUSD - a.floorPriceUSD
        } else {
          return a.floorPriceUSD - b.floorPriceUSD
        }

      })

      setAllCollectionData(newArr);
      setSortFloorOrder(sortFloorOrder === 'asc' ? 'desc' : 'asc')

    }

    const sortSales = () => {
      let newArr = [...allCollectionData].sort((a,b) => {
        if(sortSaleOrder === 'asc') {
          return b.totalSales - a.totalSales
        } else {
          return a.totalSales - b.totalSales
        }

      })

      setAllCollectionData(newArr);
      setSortSaleOrder(sortSaleOrder === 'asc' ? 'desc' : 'asc')
      
    }

    const sortAveragePrice = () => {
      let newArr = [...allCollectionData].sort((a,b) => {
        if(sortAverageOrder === 'asc') {
          return b.averageSalePriceUsd - a.averageSalePriceUsd
        } else {
          return a.averageSalePriceUsd - b.averageSalePriceUsd
        }

      })

      setAllCollectionData(newArr);
      setSortAverageOrder(sortAverageOrder === 'asc' ? 'desc' : 'asc')
      
    }

    const sortVolume = () => {
      let newArr = [...allCollectionData].sort((a,b) => {
        if(sortVolumeOrder === 'asc') {
          return b.volumeUsd - a.volumeUsd
        } else {
          return a.volumeUsd - b.volumeUsd
        }

      })

      setAllCollectionData(newArr);
      setSortVolumeOrder(sortVolumeOrder === 'asc' ? 'desc' : 'asc')
      
    }

    const sortMarketCap = () => {
      let newArr = [...allCollectionData].sort((a,b) => {
        if(sortMarketCapOrder === 'asc') {
          return b.marketCapUsd - a.marketCapUsd
        } else {
          return a.marketCapUsd - b.marketCapUsd
        }

      })

      setAllCollectionData(newArr);
      setSortMarketCapOrder(sortMarketCapOrder === 'asc' ? 'desc' : 'asc')
      
    }
    

    // TIME FRAME FUNCTIONS

    const handleThirtyMinutes = () => {
      axios.get(`${baseUrl}/all-collection-analytics/thirtyMinutes`)
        .then((response) => {
          //console.log(response.data);
          setAllCollectionData(response.data)
          setCurrentFrame('30m')
        })
        .catch((err) => {
          console.log(err);
        })

    }

    const handleHour = () => {
      axios.get(`${baseUrl}/all-collection-analytics/hour`)
        .then((response) => {
          //console.log(response.data);
          setAllCollectionData(response.data)
          setCurrentFrame('1h')
        })
        .catch((err) => {
          console.log(err);
        })
      
    }

    const handleOneDay = () => {
      axios.get(`${baseUrl}/all-collection-analytics/oneDay`)
        .then((response) => {
          //console.log(response.data);
          setAllCollectionData(response.data)
          setCurrentFrame('24h')
        })
        .catch((err) => {
          console.log(err);
        })
      
    }

    const handleThreeDay = () => {
      axios.get(`${baseUrl}/all-collection-analytics/threeDay`)
        .then((response) => {
          //console.log(response.data);
          setAllCollectionData(response.data)
          setCurrentFrame('3d')
        })
        .catch((err) => {
          console.log(err);
        })
      
    }

    const handleSevenDay = () => {
      axios.get(`${baseUrl}/all-collection-analytics/sevenDay`)
        .then((response) => {
          //console.log(response.data);
          setAllCollectionData(response.data)
          setCurrentFrame('7d')
        })
        .catch((err) => {
          console.log(err);
        })
      
    }



    useEffect(() => {

      if(!allCollectionData) {
        axios.get(`${baseUrl}/all-collection-analytics/oneDay`)
        .then((response) => {
          //console.log(response.data);
          setAllCollectionData(response.data)
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
          <button className="collectionInfoBig">COLLECTION</button>
          <button onClick={sortFloorPrice} className="infoBig">FLOOR PRICE</button>
          <button onClick={sortSales} className="infoBig">SALES</button>
          <button onClick={sortAveragePrice} className="infoBig">AVERAGE</button>
          <button onClick={sortVolume} className="infoBig">VOLUME</button>
          <button onClick={sortMarketCap} className="infoBig">MARKET CAP</button>
        </div>
        {
          allCollectionData ?
          <>
            {allCollectionData.map((collection) => {
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
                    <div className="ethSalePriceBig">
                      <img className="ethLogoTwo" src={ethLogo} alt="eth logo"/>
                      <h2>{collection.floorPrice}</h2>
                    </div>
                    <h2 className="usdBig">${collection.floorPriceUSD}</h2>
                  </div>

                  <h2 className="salesBig">{collection.totalSales}</h2>

                  <div className="analyticsAverageBig">
                    <div className="ethSalePriceBig">
                      <img className="ethLogoTwo" src={ethLogo} alt="eth logo"/>
                      <h2>{collection.averageSalePriceEth}</h2>
                    </div>
                    <h2 className="usdBig">${collection.averageSalePriceUsd}</h2>
                  </div>

                  <div className="analyticsVolumeBig">
                    <div className="ethSalePriceBig">
                      <img className="ethLogoTwo" src={ethLogo} alt="eth logo"/>
                      <h2>{collection.volumeEth}</h2>
                    </div>
                    <h2 className="usdBig">${collection.volumeUsd.toFixed(2)}</h2>
                  </div>

                  <div className="analyticsCapBig">
                    <div className="ethSalePriceBig">
                      <img className="ethLogoTwo" src={ethLogo} alt="eth logo"/>
                      <h2>{collection.marketCapEth}</h2>
                    </div>
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