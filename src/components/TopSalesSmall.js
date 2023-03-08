import { useState, useEffect } from "react";
import axios from "axios";

function TopSalesSmall() {

    //const [currentSales, setCurrentSales] = useState(null);

    const [allSaleThirty, setAllSaleThirty] = useState(null);
    const [allSaleHour, setAllSaleHour] = useState(null);
    const [allSaleOneDay, setAllSaleOneDay] = useState(null);
    const [allSaleThreeDay, setAllSaleThreeDay] = useState(null);
    const [allSaleSevenDay, setAllSaleSevenDay] = useState(null);

    // useEffect(() => {

    //     if(!allSaleHour) {
    //       axios.get('/sales-all-collections/hour')
    //       .then((response) => {
    //         setAllSaleHour(response.data)
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       })
    //     }
  
    //   }, [])



    return (
      <div>
        {
            allSaleHour ?
                <>
                    {allSaleHour.map((sale) => {
                        return(
                            <>
                                <img src={sale.nftTokenObject.imageUrl} alt='nft thumbnail'/>
                                <h2>{sale.tokenName}</h2>
                                <h2>{sale.tokenId}</h2>
                                <h2>{sale.salePriceEth}</h2>
                                <h2>{sale.salePriceUSD}</h2>
                            </>
                        )
                    })}
                </>

            : <h4>Loading...</h4>
        }
      </div>
    );
  }
  
  export default TopSalesSmall;