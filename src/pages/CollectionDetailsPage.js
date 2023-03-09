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
                  <h2>Block 1</h2>
                </div>
  
                <div className="collectionDetailsBlockTwo">
                  <h2>Block 2</h2>
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