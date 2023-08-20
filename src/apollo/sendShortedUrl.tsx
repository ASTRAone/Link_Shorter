import { gql } from "@apollo/client";

export const SEND_SHORTED_URL = gql`
  mutation Shorten_url($url: String) {
    shorten_url(url: $url) {
      short_url {
        id
        url
        short_url
        clicks
        created_at
        updated_at
      }
    }
  }
`;
