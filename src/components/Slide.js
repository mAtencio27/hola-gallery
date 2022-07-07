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


    return(<div className="Main">
            <h1>Slide</h1>
              <h2> These are the cards
                  {cards}
              </h2>
              <div>
                  <button onClick={cardMaker}>cards</button>
              </div>
            <Link to="/GetNft">Input Token Addresses</Link>
          </div>
    )
};

export default Slide