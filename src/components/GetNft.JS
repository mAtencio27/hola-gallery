import React from "react";
import { useEffect, useState } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { LOAD_NFTS } from '../GraphQL/Queries'
import { isArray } from "@apollo/client/cache/inmemory/helpers";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function GetNft({view, setView, setObjArray, objArray}) {

    //temp test address
    //const address = "DCXiVUZMPKb8mQu7MeHu7wrmTPsyf5uwdeDQfeuKTX9j" mynft
    // nc9aapaG2on7kKgG6SeuP176XREKiuUuFSwaz9CHXmF
    //AZf3ww7ZwpkRfmNsoQN5RqJRqgJ6TKv5a4NvJeL8iznT
    //DmcAidZoJbXByjHv59jwfDDZ6KfNTdbwtFgnKz3pBWh5

    const [address, setAddress] = useState([])
    
    //need to make this a func that we can call once the sumbmit button is used// first set the new address
    // const {error, loading , data} = useQuery(LOAD_NFTS, {
    //     variables: { address },
    // });

    const [getResults,{data}] = useLazyQuery(LOAD_NFTS)

    const oneQ = async () => {
        const res = await getResults({variables: { address }});
        return res
    }

    

    //test button to check the OBJECT data. Will rename
    let format = () => {
        let fullFlat = {
            nftAddress:data.nft.address,
            nftName:data.nft.name,
            mintAddress:data.nft.mintAddress,
            nftDescription:data.nft.description,
            category:data.nft.category,
            image:data.nft.image,
            handle:data.nft.creators[0].profile.handle,
            profileImageUrlLowres:data.nft.creators[0].profile.profileImageUrlLowres,
            description:data.nft.creators[0].profile.description
        };
        return fullFlat
    }

    

    let objCardReturn = () => {
        let nuData = format()
        // let nftDisplayElement = []
        // for(let key of Object.keys(nuData)){
        //     //console.log(`${key} : ${nuData[key]}`)
        //     nftDisplayElement.push(<div className="turds">{nuData[key]}</div>)
        // }
        //Root prop
        return nuData
        // return nftDisplayElement
        //setView(nftDisplayElement)
    }

    // const retrieve = async() => {
    //     return await getResults({variables: { address }})
    // }

    const submitHandler = async(e) => {
        if(address){
        //e.preventDefault();
        //console.log(address) first button click logs the correct address
        let tempObjArray = [...objArray];
        const res = await getResults({variables: { address }})
        tempObjArray.push(res.data)
        setObjArray(tempObjArray)
        setView(objArray)
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
                <Link to="/Carousel">get it</Link>
            </div>
            <div>
                <Link to="/">VIEW</Link>
            </div>
        </div>
    )
}

export default GetNft