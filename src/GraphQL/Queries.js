import { gql } from "@apollo/client";
import { CREATOR_DETAILS,TWITTER_DETAILS } from "./Fragments";

export const LOAD_NFTS= gql`
    ${CREATOR_DETAILS}
    ${TWITTER_DETAILS}
    query nft($address: String!) {
        nft(address: $address) {
        address
        name
        mintAddress
        description
        category
        image
        creators {
            ...creatorDetails
            }
        }
    }
`;