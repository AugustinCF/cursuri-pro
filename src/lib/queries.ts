export const GET_ALL_COURSES = `
 query GetAllCourses {
  courses(first: 1000) {
    nodes {
    id
    title
    content
    slug
      acf {
        city
          categorie_curs {
          nodes {
            slug
          }
        }
      duration
      price
      seoDescription
      paragrafInvestesteInCarieraTa
      seoTitle
      shortDescription
       grupCeVeiInvataSiAvantaje {
          avantajulCursului
          ce_vei_invata
        }
      orar
      plata
      tipDeCurs
      instructor
       heroImage {
          cursor
          node {
            mediaItemUrl
          }
        }
          pozaInscructor {
          cursor
          node {
            mediaItemUrl
          }
        }

         grupGalerie {
          pozeGalerie {
            nodes {
              link
            }
          }
          videoYt
        }

          grupFaq {
          faqDescriere
          faq_titlu
        }

         grupConditiiDeInscriere {
          conditiiDeInscriere
          conditiiDeInscriereImagine {
            cursor
            node {
              altText
              link
            }
          }
        }
      }
    }
  }
}
`;

export const GET_COURSE_BY_SLUG = `
query CourseBySlug($slug: ID!) {
  course(id: $slug, idType: SLUG) {
    id
    title
    content
    slug
    acf {
      city
       categorie_curs {
        nodes {
          slug
        }
      }
      duration
      price
      seoDescription
      seoTitle
      shortDescription
      orar
      plata
      tipDeCurs
      instructor
        grupFaq {
          faqDescriere
          faq_titlu
        }
      heroImage {
        cursor
        node {
          mediaItemUrl
        }
      }
      pozaInscructor {
        cursor
        node {
          mediaItemUrl
        }
      }
      grupCeVeiInvataSiAvantaje {
          avantajulCursului
          ce_vei_invata
        }

         grupGalerie {
          pozeGalerie {
            nodes {
              link
            }
          }
          videoYt
        }

        grupConditiiDeInscriere {
          conditiiDeInscriere
          conditiiDeInscriereImagine {
            cursor
            node {
              altText
              link
            }
          }
        }
          paragrafInvestesteInCarieraTa
    }
  }
}

`;
