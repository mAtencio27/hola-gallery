import { gql } from '@apollo/client'

export const CREATOR_DETAILS = gql`
   fragment creatorDetails on NftCreator {
        address,
        twitterHandle,
        profile {
            ...twitterDetails
            }
    }
`;