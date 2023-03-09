import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ethLogo from "../images/EthLogo.png"
import { useParams } from "react-router-dom";
import { baseUrl } from "../services/baseUrl";


function CollectionTopSales() {

    const [allSaleThirty, setAllSaleThirty] = useState(null);
    const [allSaleHour, setAllSaleHour] = useState(null);
    const [allSaleOneDay, setAllSaleOneDay] = useState(null);
    const [allSaleThreeDay, setAllSaleThreeDay] = useState(null);
    const [allSaleSevenDay, setAllSaleSevenDay] = useState(null);

    const {collectionId} = useParams();

    useEffect(() => {

        if(!allSaleHour) {
          axios.get(`${baseUrl}/sales-one-collection/${collectionId}/hour`)
          .then((response) => {
            console.log(response.data)
            setAllSaleHour(response.data)
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
                    <button>30m</button>
                    <button>1h</button>
                    <button>24h</button>
                    <button>3d</button>
                    <button>7d</button>
                </div>
            </div>


            <div className="infoRowBigTwo">
            <button className="collectionInfoBig">NFT ITEM</button>
            <button className="salesInfoBig">PRICE</button>
            <button className="salesInfoBig">TIME</button>
            <button className="salesInfoBig transferInfoBig">TRANSFER</button>
            </div>
            {
            allSaleHour ?
            <>
                {allSaleHour.map((sale) => {
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
  
  export default CollectionTopSales;