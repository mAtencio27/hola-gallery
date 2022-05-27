import React from "react";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_NFTS } from '../GraphQL/Queries'
import { isArray } from "@apollo/client/cache/inmemory/helpers";

function GetNft() {

    //temp test address
    const address = "DCXiVUZMPKb8mQu7MeHu7wrmTPsyf5uwdeDQfeuKTX9j"
    
    const {error, loading , data} = useQuery(LOAD_NFTS, {
        variables: { address },
    });

    const [nfts, setNfts] = useState([])
    const [view, setView] = useState(["none"])

    useEffect(()=> {
        if(data)
        setNfts(data.nft)

    }, [data]);

    //helper to flatten array
    let arrayIgnore = (ob) => {
        let flatReturn = {}
        for(let key in ob){
            if(!Array.isArray(ob[key])){
                flatReturn[key] = ob[key]
            }
        }
        return flatReturn
    }

    //test button to check the OBJECT data. Will rename
    let test = () => {
        // let flatTwitterProfile = arrayIgnore(nfts.creators[0].profile)
        // let flatCreatorProfile = arrayIgnore(nfts.creators[0])
        // let flatNftss = arrayIgnore(nfts)
        let fullFlat = {
            nftAddress:nfts.address,
            nftName:nfts.name,
            mintAddress:nfts.mintAddress,
            nftDescription:nfts.description,
            category:nfts.category,
            image:nfts.image,
            handle:nfts.creators[0].profile.handle,
            profileImageUrlLowres:nfts.creators[0].profile.profileImageUrlLowres,
            description:nfts.creators[0].profile.description
        };
        //console.log(fullFlat)
        return fullFlat
    }

    // quick and dirty render func
    // changed to object creator
    let objRender = () => {
        let data = test()
        let nftView = []
        for(let key of Object.keys(data)){
            console.log(`${key} : ${data[key]}`)
            nftView.push(<div className="turds">{data[key]}</div>)
        }
        setView(nftView)
        //return nftView
    }

    //<button onClick={() => objRender()}>hello</button>

    return (
        <div>
            <button onClick={() => objRender()}>hello</button>
            <div>{view}</div>
        </div>
    )
}

export default GetNft