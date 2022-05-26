import React from "react";
import { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_NFTS } from '../GraphQL/Queries'

function GetNft() {

    //temp test address
    const address = "DCXiVUZMPKb8mQu7MeHu7wrmTPsyf5uwdeDQfeuKTX9j"
    
    const {error, loading , data} = useQuery(LOAD_NFTS, {
        variables: { address },
    })

    useEffect(()=> {
        console.log(data)
    }, [data]);

    return (
        <div>
        </div>
    )
}

export default GetNft