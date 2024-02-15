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
        id
      }
      type
    } 
  }
}
`