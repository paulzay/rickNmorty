import { gql } from "@apollo/client";
export const LOAD_LOCATIONS = gql `
query {
  locations {
    results {
      name,
      residents {   
        status,
        name,
        image
        id,
        episode{
          episode,
          name
        }
      }
      type
    }
    
  }
}
`

export const LOAD_CHARACTER = gql `
  query($id: ID!) {
    character(id: $id) {
      name,
      image,
      species
    }
  }
`