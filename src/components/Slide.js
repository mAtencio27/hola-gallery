import React from "react";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_NFTS } from '../GraphQL/Queries'
import { isArray } from "@apollo/client/cache/inmemory/helpers";
import { Link } from 'react-router-dom'

function Slide(view) {
  //possibly arry but going to test a use state first 
  //let cards = ["test"]

  const [cards, setCards] = useState([])

  let cardMaker=(item) => {
    let cardholder = []
    if(view){
      console.log(`length of global view: ${view.view.length}`)
      console.log(`These are the keys: ${Object.keys(view.view)}`)
      for(let i = 0; i < view.view.length;i++){
        cardholder.push(<div>{view.view[i].twitterHandle}</div>)
        console.log(cards)
        setCards(cardholder)
      }
    }
  }


    return(<div className="welcome">
            <h1>Fart Viewer</h1>
              <h2>The NFT art gallery you can install anywhere.</h2>
              <p>Fart Viewer is the fastest way to spin up an NFT gallery. Using the incredible speed of the Holaplex indexer and the Solana blockchain, you can spin up an NFT gallery in a few minutes by submitting the Holaplex Token Address of each NFT that you would like to display.</p>
            <a href="/GetNFT" className="proceedButton">
                            <h3>Proceed</h3>
            </a>
          </div>
    )
};

export default Slide