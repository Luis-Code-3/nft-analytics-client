import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import CollectionTopSales from "../components/CollectionTopSales";
import CollectionAllTokens from "../components/CollectionAllTokens";
import CollectionAnalyticsBlock from "../components/CollectionAnalyticsBlock";
import { baseUrl } from "../services/baseUrl";

function CollectionBottomBlock({collectionId}) {

    const [tabName, setTabName] = useState("overview");


    const handleOverview = () => {
        setTabName('overview');
    }

    const handleTokens = () => {
        setTabName('tokens')
    }

    const handleTopSales = () => {
        setTabName('sales')
    }

    return (
        <>

            <div className="collectionDetailsNavigation">
                <button onClick={handleOverview}>Overview</button>
                <button onClick={handleTokens}>Tokens</button>
                <button onClick={handleTopSales}>Top Sales</button>
            </div>

            {
               tabName === "overview" && <CollectionAnalyticsBlock collectionAddress={collectionId}/>
            }

            {
                tabName === "tokens" && <CollectionAllTokens collectionAddress={collectionId}/>
            }

            {
                tabName === "sales" && <CollectionTopSales collectionAddress={collectionId}/>
            }
        </>
    );
  }
  
  export default CollectionBottomBlock;