import { gql } from "@apollo/client";

export const GET_SHORT_URLS = gql`
query ShortUrls($page: Int) {
  short_urls(page: $page) {
      paginatorInfo {
          count
          currentPage
          firstItem
          hasMorePages
          lastItem
          lastPage
          perPage
          total
      }
      data {
          id
          url
          short_url
          clicks
      }
  }
}
`;
