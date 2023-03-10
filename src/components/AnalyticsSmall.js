import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ethLogo from "../images/EthLogo.png"
import { baseUrl } from "../services/baseUrl";


function AnalyticsSmall() {

    const [sortFloorOrder, setSortFloorOrder] = useState('asc')
    const [sortSaleOrder, setSortSaleOrder] = useState('asc')
    const [sortVolumeOrder, setSortVolumeOrder] = useState('asc')
    const [sortCollectionName, setSortCollectionName] = useState('asc')

    const [allCollectionData, setAllCollectionData] = useState(null);

    const [currentFrame,setCurrentFrame] = useState('24h');

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

    const sortCollection = () => {
      let newArr = [...allCollectionData].sort((a,b) => {
        if(sortCollectionName === 'asc') {
          // return b.collectionName - a.collectionName
          return a.collectionName.localeCompare(b.collectionName)
        } else {
          // return a.collectionName - b.collectionName
          return b.collectionName.localeCompare(a.collectionName)
        }

      })

      setAllCollectionData(newArr);
      setSortCollectionName(sortCollectionName === 'asc' ? 'desc' : 'asc')
      
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
          //console.log(response);
          setAllCollectionData(response.data)
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
            <Link className="seeMoreSmall" to={'/collection-analytics'}>Collection Analytics</Link>
          </div>


          <div className="infoRowSmall">
            <button onClick={sortCollection} className="collectionInfoSmall">COLLECTION</button>
            <button onClick={sortFloorPrice} className="infoSmall">FLOOR PRICE</button>
            <button onClick={sortSales} className="infoSmall infoSmallSales">SALES</button>
            <button onClick={sortVolume} className="infoSmall">VOLUME</button>
          </div>
          {
            allCollectionData ?
            <>
              {allCollectionData.map((collection) => {
                return (
                  <Link to={`/collection-details/${collection.collectionAddress}`} key={collection._id}>

                  <div className="analyticsSmallRow">
                    <div className="analyticsStartSmall">
                      <img src={collection.collectionLogo} alt='collection logo'/>
                      <div className="nameAndSupplyBig">
                        <h2>{collection.collectionName}</h2>
                        {/* <h2 className="supplyBig">TOTAL SUPPLY: {collection.tokenSupply}</h2> */}
                      </div>
                    </div>
                    <div className="analyticsFloorPriceSmall">
                      <div className="ethSalePriceBig">
                        <img className="ethLogoTwo" src={ethLogo} alt="eth logo"/>
                        <h2>{collection.floorPrice}</h2>
                      </div>
                      <h2 className="usdBig">${collection.floorPriceUSD}</h2>
                    </div>

                    <h2 className="salesSmall">{collection.totalSales}</h2>



                    <div className="analyticsVolumeSmall">
                      <div className="ethSalePriceBig">
                        <img className="ethLogoTwo" src={ethLogo} alt="eth logo"/>
                        <h2>{collection.volumeEth}</h2>
                      </div>
                      <h2 className="usdBig">${collection.volumeUsd.toFixed(2)}</h2>
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
  
  export default AnalyticsSmall;