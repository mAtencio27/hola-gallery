import { gql } from "@apollo/client";

export const LOAD_NFTS= gql`
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
        }
    }
`;