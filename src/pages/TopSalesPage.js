import { useState, useEffect } from "react";
import TopSalesBig from "../components/TopSalesBig";

function TopSalesPage() {




    useEffect(() => {
        // if(--State--) {
        //     --Insert API Call--
        // }
    }, [])

    return (
      <>
        <div className="trendingHeader">
          <h1>Top NFT <span className="bySalesBig">Sales</span></h1>
          <p>See the Top Sales from the most popular NFT Projects. <br></br>Sort by 30min, 1 hour, 1 Day, 3 Days, or 7 Days</p>
        </div>
        <TopSalesBig/>
      </>
    );
  }
  
  export default TopSalesPage;