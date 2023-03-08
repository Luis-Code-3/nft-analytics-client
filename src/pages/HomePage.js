import { useState, useEffect } from "react";
import AnalyticsSmall from "../components/AnalyticsSmall";
import TopSalesSmall from "../components/TopSalesSmall";
import axios from "axios";

function HomePage() {



    useEffect(() => {

    }, [])


    return (
      <div>
        <div className="trendingHeader">
          <h1>NFT Analytics & <span className="bySalesBig">Sales</span></h1>
          <p>See Analytics for your favorite NFT projects. <br></br>Sort by 30min, 1 hour, 1 Day, 3 Days, or 7 Days</p>
        </div>
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