import { gql } from '@apollo/client'

export const CREATOR_DETAILS = gql`
   fragment creatorDetails on NftCreator {
        address,
        profile{
            ...twitterDetails
        }
    }
`;

export const TWITTER_DETAILS = gql`
    fragment twitterDetails on TwitterProfile {
        handle
        profileImageUrlHighres
        description
    }
`