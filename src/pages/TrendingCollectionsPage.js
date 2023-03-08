import { useState, useEffect } from "react";
import AnalyticsBig from "../components/AnalyticsBig";

function TrendingCollectionsPage() {




    // useEffect(() => {
    //     // if(--State--) {
    //     //     --Insert API Call--
    //     // }
    // }, [])

    return (
      <>
        <div className="trendingHeader">
          <h1>NFT Collection Analytics <span className="bySalesBig">by Sales</span></h1>
          <p>See Analytics for your favorite NFT projects. <br></br>Sort by 30min, 1 hour, 1 Day, 3 Days, or 7 Days</p>
        </div>
        <AnalyticsBig/>
      </>
    );
  }
  
  export default TrendingCollectionsPage;