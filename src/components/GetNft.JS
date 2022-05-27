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
    const [creatorInfo, setCreatorInfo] = useState([])

    useEffect(()=> {
        if(data)
        setNfts(data.nft)

    }, [data]);


    //quick and dirty render func
    // changed to object creator
    // let objRender = (x) => {
    //     let nftView = []
    //     for(let key of Object.keys(x)){
    //         console.log(x[key])
    //         nftView.push(<div className="turds">{x[key]}</div>)
    //     }
    //     console.log(creatorInfo)
    //     return nftView
    // }

    let arrayIgnore = (ob) => {
        let flatReturn = {}
        for(let key in ob){
            if(!Array.isArray(ob[key])){
                flatReturn[key] = ob[key]
            }
        }
        return flatReturn
    }

    let test = () => {
        let flatTwitterProfile = arrayIgnore(nfts.creators[0].profile)
        let flatCreatorProfile = arrayIgnore(nfts.creators[0])
        let flatNfts = arrayIgnore(nfts)
        const flatOb = {}
        console.log(flatCreatorProfile.address)
    }

    return (
        <div> <button onClick={test}>hello</button>
        </div>
    )
}

export default GetNft