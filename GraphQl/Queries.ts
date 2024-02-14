import { gql } from "@apollo/client";
query {
  locations {
    results {
      name,
      residents {
        status
      }
      type
    }
    
  }
}
