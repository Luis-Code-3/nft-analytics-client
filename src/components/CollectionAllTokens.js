import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ethLogo from "../images/EthLogo.png"
import { useParams } from "react-router-dom";
import { baseUrl } from "../services/baseUrl";

function CollectionAllTokens() {

    const [allTokens, setallTokens] = useState(null);

    const {collectionId} = useParams();

    useEffect(() => {

        if(!allTokens) {
          axios.get(`${baseUrl}/all-tokens/${collectionId}`)
          .then((response) => {
            console.log(response.data)
            let newArr = response.data.slice(0,20)
            setallTokens(newArr)
          })
          .catch((err) => {
            console.log(err);
          })
        }
  
      }, [])



    return (
      <div className="nftSectionAll">
        {
            allTokens ?
            <>
            {allTokens.map((token) =>{
                return(
                    <>
                        <Link to={`/nft-details/${token.collectionAddress}/${token.tokenId}`} className="nftCardLink">
                            <div className="nftCard">
                                <div className="nftCardImageBox">
                                    <img src={token.imageUrl} alt="nft" className="nftCardImage"/>
                                </div>
                                <div className="nftCardDetailsBox">
                                    <h3>{token.nftName} <span className="tokenIdColor">#{token.tokenId}</span></h3>
                                </div>
                            </div>
                        </Link>
                    </>
                )
            })}
            </>

            : <p>Loading...</p>
        }
      </div>
    );
  }
  
  export default CollectionAllTokens;