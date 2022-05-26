import React from "react";
import { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_NFTS } from '../GraphQL/Queries'

function GetNft() {

    //temp test address
    const address = "DCXiVUZMPKb8mQu7MeHu7wrmTPsyf5uwdeDQfeuKTX9j"
    
    const {error, loading , data} = useQuery(LOAD_NFTS, {
        variables: { address },
    })

    const [nfts, setNfts] = useState([])

    useEffect(()=> {
        if(data)
        setNfts(data.nft)
    }, [data]);

    let objRender = (x) => {
        let nftView = []
        for(let key of Object.keys(x)){
            console.log(x[key])
            nftView.push(<div>{x[key]}</div>)
        }
        return nftView
    }

    return (
        <div> {objRender(nfts)}
        </div>
    )
}

export default GetNft