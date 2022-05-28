import React from "react";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_NFTS } from '../GraphQL/Queries'
import { isArray } from "@apollo/client/cache/inmemory/helpers";
import { Link } from 'react-router-dom'

function Slide() {

    return(<div>
            <h1>Slide</h1>
            <Link to="/GetNft">get it</Link>
          </div>
    )
};

export default Slide