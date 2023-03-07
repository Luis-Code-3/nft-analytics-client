import { useState, useEffect } from "react"
import CollectionDetailsBlock from "../components/CollectionDetailsBlock";
import CollectionTopSales from "../components/CollectionTopSales";
import CollectionAllTokens from "../components/CollectionAllTokens";
import CollectionAnalyticsBlock from "../components/CollectionAnalyticsBlock";


function CollectionDetailsPage() {




    useEffect(() => {
        // if(--State--) {
        //     --Insert API Call--
        // }
    }, [])

    return (
      <div>
        <CollectionDetailsBlock/>
        
        <CollectionAnalyticsBlock/>
        <CollectionTopSales/>
        <CollectionAllTokens/>

      </div>
    );
  }
  
  export default CollectionDetailsPage;