import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ethLogo from "../images/EthLogo.png"
import { useParams } from "react-router-dom";
import { baseUrl } from "../services/baseUrl";

function CollectionAnalyticsBlock() {


    const [oneCollectionData, setOneCollectionData] = useState(null);
    const [currentFrame,setCurrentFrame] = useState('1h');

    const {collectionId} = useParams();

        // TIME FRAME FUNCTIONS

        const handleThirtyMinutes = () => {
            axios.get(`${baseUrl}/one-collection-analytics/${collectionId}/thirtyMinutes`)
              .then((response) => {
                //console.log(response.data);
                setOneCollectionData(response.data)
                setCurrentFrame('30m')
              })
              .catch((err) => {
                console.log(err);
              })
      
          }
      
          const handleHour = () => {
            axios.get(`${baseUrl}/one-collection-analytics/${collectionId}/hour`)
              .then((response) => {
                //console.log(response.data);
                setOneCollectionData(response.data)
                setCurrentFrame('1h')
              })
              .catch((err) => {
                console.log(err);
              })
            
          }
      
          const handleOneDay = () => {
            axios.get(`${baseUrl}/one-collection-analytics/${collectionId}/oneDay`)
              .then((response) => {
                //console.log(response.data);
                setOneCollectionData(response.data)
                setCurrentFrame('24h')
              })
              .catch((err) => {
                console.log(err);
              })
            
          }
      
          const handleThreeDay = () => {
            axios.get(`${baseUrl}/one-collection-analytics/${collectionId}/threeDay`)
              .then((response) => {
                //console.log(response.data);
                setOneCollectionData(response.data)
                setCurrentFrame('3d')
              })
              .catch((err) => {
                console.log(err);
              })
            
          }
      
          const handleSevenDay = () => {
            axios.get(`${baseUrl}/one-collection-analytics/${collectionId}/sevenDay`)
              .then((response) => {
                //console.log(response.data);
                setOneCollectionData(response.data)
                setCurrentFrame('7d')
              })
              .catch((err) => {
                console.log(err);
              })
            
          }



    useEffect(() => {

      if(!oneCollectionData) {
        axios.get(`${baseUrl}/one-collection-analytics/${collectionId}/hour`)
        .then((response) => {
          //console.log(response.data);
          setOneCollectionData(response.data)
        })
        .catch((err) => {
          console.log(err);
        })
      }

    }, [])







    return (
      <div className="analyticDetailsContainer">
        <div className="timeBoxAnalyticBox">
            <div className="timeBoxAnalyticDetails">
            <button onClick={handleThirtyMinutes}>30m</button>
            <button onClick={handleHour}>1h</button>
            <button onClick={handleOneDay}>24h</button>
            <button onClick={handleThreeDay}>3d</button>
            <button onClick={handleSevenDay}>7d</button>
            </div>
            <p className="currentFrameAnalytics">{currentFrame}</p>
        </div>
        {
            oneCollectionData ?
            <>
                <div className="fourBox">
                    <div className="topRow">
                        <div className="topBoxLeft">
                            <div className="overviewBoxLeft">
                                <p className="overviewTopic">VOLUME:</p>
                                <div className="overviewEthBox">
                                    <img className="ethImage" src={ethLogo} alt='eth'/>
                                    <h2 className="overviewEth">{oneCollectionData.volumeEth}</h2>
                                </div>
                                <p className="overviewUsd">${oneCollectionData.volumeUsd.toFixed(2)}</p>
                            </div>

                            <div className="overviewBoxRight">
                                <img src="https://i0.wp.com/tutvid.com/wp-content/uploads/2017/01/05-blend-tool-gradient-stroke-line-graph.jpg?resize=700%2C500" alt="graph"/>
                            </div>

                        </div>

                        <div className="topBoxRight">
                            <div className="overviewBoxLeft">
                                <p className="overviewTopic">SALES:</p>
                                    <h2>{oneCollectionData.totalSales}</h2>
                            </div>

                            <div className="overviewBoxRight">
                                <img src="https://i0.wp.com/tutvid.com/wp-content/uploads/2017/01/05-blend-tool-gradient-stroke-line-graph.jpg?resize=700%2C500" alt="graph"/>
                            </div>

                        </div>

                    </div>

                    <div className="bottomRow">
                        <div className="bottomBoxLeft">
                            <div className="overviewBoxLeft">
                                <p className="overviewTopic">FLOOR PRICE:</p>
                                <div className="overviewEthBox">
                                    <img className="ethImage" src={ethLogo} alt='eth'/>
                                    <h2 className="overviewEth">{oneCollectionData.floorPrice}</h2>
                                </div>
                                <p className="overviewUsd">${(oneCollectionData.floorPrice * 1600).toFixed(2)}</p>
                            </div>

                            <div className="overviewBoxRight">
                                <img src="https://i0.wp.com/tutvid.com/wp-content/uploads/2017/01/05-blend-tool-gradient-stroke-line-graph.jpg?resize=700%2C500" alt="graph"/>
                            </div>

                        </div>

                        <div className="bottomBoxRight">
                            <div className="overviewBoxLeft">
                                <p className="overviewTopic">AVERAGE:</p>
                                <div className="overviewEthBox">
                                    <img className="ethImage" src={ethLogo} alt='eth'/>
                                    <h2 className="overviewEth">{oneCollectionData.averageSalePriceEth}</h2>
                                </div>
                                <p className="overviewUsd">${oneCollectionData.averageSalePriceUsd.toFixed(2)}</p>
                            </div>

                            <div className="overviewBoxRight">
                                <img src="https://i0.wp.com/tutvid.com/wp-content/uploads/2017/01/05-blend-tool-gradient-stroke-line-graph.jpg?resize=700%2C500" alt="graph"/>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </>


            : <p>Loading.....</p>
        }
      </div>
    );
  }
  
  export default CollectionAnalyticsBlock;