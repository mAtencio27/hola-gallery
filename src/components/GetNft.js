import React from "react";
import { useEffect, useState } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { LOAD_NFTS } from '../GraphQL/Queries'
// import { isArray } from "@apollo/client/cache/inmemory/helpers";
// import { Button, Form, Row, Col, Container } from "react-bootstrap";
// import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "normalize.css/normalize.css";
import '../Styles/styles.css';
import '../Styles/styleguide.css';
import '../Styles/globals.css';
import '../Styles/submission.css';
import subButtonImg from '../img/submit@1x.png';
import proceedButtonImg from '../img/proceed@1x.png'

function GetNft({view, setView, setObjArray, objArray}) {

    // FOR THE BUTTON HANDLER 
    const [address, setAddress] = useState([])

    //APOLLO RESULTS FUNC
    const [getResults,{data}] = useLazyQuery(LOAD_NFTS)

    

    //test button to check the OBJECT data. Will rename
    let format = (n) => {
        let fullFlat = {
            nftAddress:n.data.nft.address,
            art:n.data.nft.image,
            name:n.data.nft.name,
            profileMask:n.data.nft.creators[0].profile.profileImageUrlHighres,
            twitterHandle:n.data.nft.creators[0].profile.handle,
            description:n.data.nft.creators[0].profile.description,
            qrCode: "https://anima-uploads.s3.amazonaws.com/projects/629190b42b83fc7d786b7112/releases/629200c080d6b728d3b7613a/img/allenton-hippo-qr-code-1@2x.png",
            solanaLogo:"https://anima-uploads.s3.amazonaws.com/projects/629190b42b83fc7d786b7112/releases/629200c080d6b728d3b7613a/img/l-sponsors@2x.png",
            holaplexLogo:"https://anima-uploads.s3.amazonaws.com/projects/629190b42b83fc7d786b7112/releases/629200c080d6b728d3b7613a/img/holaplex-logo-compressed-07@2x.png"
        };
        //console.log(fullFlat)
        return fullFlat
    }


    const submitHandler = async(e) => {
        if(address){
        const res = await getResults({variables: { address }})
        let formatedData = format(res)
        setView(current => [...current, formatedData])
        setAddress("")
        }
    };

    //DCXiVUZMPKb8mQu7MeHu7wrmTPsyf5uwdeDQfeuKTX9j
    //nc9aapaG2on7kKgG6SeuP176XREKiuUuFSwaz9CHXmF
    //AZf3ww7ZwpkRfmNsoQN5RqJRqgJ6TKv5a4NvJeL8iznT

    return (
            <div className="submission screen">
                <div className="input-the-nft-token-address-03UtQu valign-text-middle">Input the NFT token address:</div>
                <div className="input-frame-03UtQu">
                    <input className="input-box-THA6wH" 
                            value={address} 
                            name="inputbox" 
                            placeholder="token address" 
                            type="text"
                            onChange={(e) => setAddress(e.target.value)}/>
                </div>
                <div className="submit-frame-03UtQu">
                    <div className="submit-button-iMW9qQ
                         smart-layers-pointers" 
                         onClick={submitHandler}>
                        <img className="submit-wIbCCc" src={subButtonImg}></img>
                    </div>
                </div>
                
                <Link to="/Carousel">
                    <div className="proceed-frame-03UtQu">
                        <div className="proceed-button-YTGg5t smart-layers-pointers">
                            <img className="proceed-wxuvQK" src={proceedButtonImg}/>
                        </div>
                    </div>
                </Link>

               
                {view.map((item,index)=>{return <div className="output-frame-03UtQu">
                    <div className="output-art-frame-WK0S52">
                        <img className="output-art-mZ0xXQ" src={item.art}/>
                    </div>
                    <div className="output-name-WK0S52">
                        <div className="output-name-sBiOAQ valign-text-middle">
                        {item.name}
                        </div>
                    </div>
                </div>})}
                


            </div>
    )
}

export default GetNft
