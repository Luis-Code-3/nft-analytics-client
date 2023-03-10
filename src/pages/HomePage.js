import { useState, useEffect } from "react";
import AnalyticsSmall from "../components/AnalyticsSmall";
import TopSalesSmall from "../components/TopSalesSmall";
import axios from "axios";
import homeImage from "../images/homeImage.png"

function HomePage() {



    useEffect(() => {

    }, [])


    return (
      <div>
        <div className="homeHeader">
          <h1>#1 NFT Collection Analytics & <span className="bySalesBig">Sales Research</span></h1>
          <p>See <span className="blueText">Analytics</span> and <span className="blueText">Recent Sales</span> for your favorite NFT projects using our <span className="blueText">Organized Data</span>. <br></br>Sort Projects and Sales by 30min, 1 hour, 1 Day, 3 Days, or 7 Days</p>
          <div className="homeImageBox">
            <img src={homeImage} alt="home"/>
          </div>
        </div>
        <div className="homeAnalyticsContainer">
            <div className="homeCollectionAnalytics">
                <AnalyticsSmall/>
            </div>

            <div className="homeTopSales">
                <TopSalesSmall/>
            </div>

        </div>
      </div>
    );
  }
  
  export default HomePage;