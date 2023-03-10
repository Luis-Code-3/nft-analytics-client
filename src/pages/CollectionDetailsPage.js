import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import CollectionDetailsBlock from "../components/CollectionDetailsBlock";
import CollectionTopSales from "../components/CollectionTopSales";
import CollectionAllTokens from "../components/CollectionAllTokens";
import CollectionAnalyticsBlock from "../components/CollectionAnalyticsBlock";
import CollectionBottomBlock from "../components/CollectionBottonBlock";
import { baseUrl } from "../services/baseUrl";
import axios from "axios";


function CollectionDetailsPage() {


    const [collectionDetail, setCollectionDetail] = useState(null);
    const {collectionId} = useParams();


    useEffect(() => {
      axios.get(`${baseUrl}/collection-details/${collectionId}`)
      .then((response) => {
        //console.log(response);
        setCollectionDetail(response.data[0])
      })
      .catch((err) => {
        console.log(err);
      })
      
    }, [collectionId])

    return (
      <>
        {
          collectionDetail ?
            <div className="collectionDetailsContainer">
              <div className="collectionDetailsRow">
                <div className="collectionDetailsBlockOne">
                  <div className="detailsRow">
                    <img src={collectionDetail.logoUrl} alt="logo"/>
                    <div className="detailsColumn">
                      <h2>{collectionDetail.collectionName}</h2>
                      <h4 className="contractAddress">{collectionDetail.contractAddress}</h4>
                      <p className="tokenDetailAmount">{collectionDetail.tokenSupply} Circulating Supply</p>
                    </div>
                  </div>
                  <p className="description">{collectionDetail.description}</p>
                </div>
  
                <div className="collectionDetailsBlockTwo">
                  <p className="collectInfo">Collection Info:</p>
                  <div className="infoLinksBox">
                    <a href={collectionDetail.website}>Home</a>
                    <a href={collectionDetail.etherscan}>Etherscan</a>
                    <a href={collectionDetail.twitter}>Twitter</a>
                  </div>
                  <p className="collectInfo">Marketplaces:</p>
                  <div className="infoLinksBox">
                    <a href={collectionDetail.opensea}>OpenSea</a>
                  </div>
                </div>
              </div>
  
              <CollectionBottomBlock collectionAddress={collectionId}/>
  
            </div>
  
  
          : <p>Loading....</p>
        
        }
      </>
    );
  }
  
  export default CollectionDetailsPage;