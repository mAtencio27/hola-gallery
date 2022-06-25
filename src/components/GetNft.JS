import React from "react";
import { useEffect, useState } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { LOAD_NFTS } from '../GraphQL/Queries'
// import { isArray } from "@apollo/client/cache/inmemory/helpers";
// import { Button, Form, Row, Col, Container } from "react-bootstrap";
// import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

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

    return (
            <div>
                <form>
                    <label>nft address
                        <input type = "text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}/>
                    </label>
                </form>
                <div>
                DCXiVUZMPKb8mQu7MeHu7wrmTPsyf5uwdeDQfeuKTX9j
                nc9aapaG2on7kKgG6SeuP176XREKiuUuFSwaz9CHXmF
                AZf3ww7ZwpkRfmNsoQN5RqJRqgJ6TKv5a4NvJeL8iznT
                </div>
            <div>
                {JSON.stringify(view)}
            </div>
            <div>
                <button onClick={submitHandler}>
                    add
                </button>
            </div>
            <div>
                <Link to="/Carousel">VIEW</Link>
            </div>
        </div>
    )
}

export default GetNft