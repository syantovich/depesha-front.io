import { gql } from "@apollo/client";

export const menuApi = {
  getMenu: gql`
    query GetMenu {
      setting {
        data {
          attributes {
            default_person_img {
              data {
                attributes {
                  url
                }
              }
            }
            header_img_width
            delay_downloads
            number_of_frames
          }
        }
      }
      reviews {
        data {
          id
          attributes {
            name
            role
            text
            rating
            user_img {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
      headerContent {
        data {
          attributes {
            title
            description
            playmarket
            appstore
            img {
              data {
                attributes {
                  url
                }
              }
            }
            background {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
      benefits {
        data {
          id
          attributes {
            title
            description
            img {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
      block3 {
        data {
          attributes {
            title
            description
            downloads
            img {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,
  getLogo: gql`
    query GetMenu {
      logo {
        data {
          attributes {
            name
            logo {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
      setting {
        data {
          attributes {
            logo_width
            logo_height
          }
        }
      }
    }
  `,
  background: gql`
    query GetMenu {
      headerContent {
        data {
          attributes {
            playmarket
            appstore
          }
        }
      }
      setting {
        data {
          attributes {
            background {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,
  getBlogs(p, l) {
    return gql`
      query GetBlogs {
        blogs(pagination: { page: ${p}, pageSize: ${l}}) {
          data {
            id
            attributes {
              title
              text
              img {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
          meta {
            pagination {
              pageCount
              page
              pageSize
            }
          }
        }
      }
    `;
  },
};
