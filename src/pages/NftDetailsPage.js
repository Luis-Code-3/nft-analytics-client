import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ethLogo from "../images/EthLogo.png"
import { Link } from "react-router-dom";
import { baseUrl } from "../services/baseUrl";

function NftDetailsPage() {

    const [nftDetail, setNftDetail] = useState(null)
    const {collectionId, nftId} = useParams();



    useEffect(() => {
        axios.get(`${baseUrl}/nft-details/${collectionId}/${nftId}`)
        .then((response) => {
          console.log(response);
          setNftDetail(response.data[0])
        })
        .catch((err) => {
          console.log(err);
        })
        
    }, [collectionId, nftId])


    return (
      <div className="nftDetailsBox">
        {
          nftDetail ?
          <>
            <div className="pictureAndDetails">
              <div className="pictureBox">
                <img src={nftDetail.imageUrl} alt="nft thumbnail"/>
              </div>
              <div className="nftDetailsSideBox">
                <h2><span className="nftNameSale">{nftDetail.nftName}</span> #{nftDetail.tokenId}</h2>
                <Link to={`/collection-details/${nftDetail.collectionAddress}`}>{nftDetail.fromCollectionName}</Link>
                <a href={`https://opensea.io/assets/ethereum/${nftDetail.collectionAddress}/${nftDetail.tokenId}`}>OpenSea</a>
              </div>
            </div>

            <div className="infoRowBig">
              <button className="collectionInfoBig">NFT ITEM</button>
              <button className="salesInfoBig">PRICE</button>
              <button className="salesInfoBig">TIME</button>
              <button className="salesInfoBig transferInfoBig">TRANSFER</button>
            </div>
                  {
                    nftDetail.transactions[0] ?
                    <>

                      {nftDetail.transactions.map((tran) => {
                        return(
                            <a href={`https://etherscan.io/tx/${tran.transactionHash}`}>
                            <div className="salesBigRow">
                              <div className="analyticsStartBig">
                                <img src={nftDetail.imageUrl} alt='collection logo'/>
                                <div className="nameAndSupplyBig">
                                  <h2>{nftDetail.nftName}</h2>
                                  <h2 className="supplyBig">#{nftDetail.tokenId}</h2>
                                </div>
                              </div>
                              <div className="salesPriceBig">
                                <div className="ethSalePriceBig">
                                    <img className="ethLogo" src={ethLogo} alt="eth logo"/>
                                    <h2>{tran.salePriceEth.toFixed(2)}</h2>
                                </div>
                                <h2 className="usdBig">${tran.salePriceUSD}</h2>
                              </div>

                              <h2 className="salesTimeBig">{tran.transactionTimeStamp}</h2>

                              <div className="salesTransferBig">
                                <h2 className="buyerBig"><span className="sellerTextBig">SELLER:</span> {tran.seller}</h2>
                                <h2 className="buyerBig"><span className="buyerTextBig">BUYER:</span> {tran.buyer}</h2>
                              </div>
                            </div>
                            </a>
                        )
                      })}
                    </>

                    : <p className="noTran">No Recent Transactions</p>
                  }
          </>
          : <p>Loading....</p>
        }
      </div>
    );
  }
  
  export default NftDetailsPage;