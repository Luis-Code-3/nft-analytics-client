import { useState, useEffect } from "react";
import AnalyticsSmall from "../components/AnalyticsSmall";
import TopSalesSmall from "../components/TopSalesSmall";

function HomePage() {




    useEffect(() => {
        // if(--State--) {
        //     --Insert API Call--
        // }
    }, [])


    return (
      <div>
        <p>Header Block</p>
        <div className="homeAnalyticsContainer">
            <div className="homeCollectionAnalytics">
                <h3>Collection Analytics: 24 Hours</h3>
                <AnalyticsSmall/>
            </div>

            <div className="homeTopSales">
                <h3>Top Sales: 24 Hours</h3>
                <TopSalesSmall/>
            </div>

        </div>
      </div>
    );
  }
  
  export default HomePage;