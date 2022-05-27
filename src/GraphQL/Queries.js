import { gql } from "@apollo/client";
import { CREATOR_DETAILS } from "./Fragments";

export const LOAD_NFTS= gql`
    ${CREATOR_DETAILS}
    query nft($address: String!) {
        nft(address: $address) {
        address
        name
        sellerFeeBasisPoints
        mintAddress
        primarySaleHappened
        description
        category
        parser
        image
        creators {
            ...CREATOR_DETAILS
            }
        }
    }
`;