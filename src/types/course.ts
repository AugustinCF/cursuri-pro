export interface Course {
  id: string;
  slug: string;
  title: string;
  content?: string;
  acf: {
    city: string;
    categorie_curs?: {
      nodes: {
        slug: string;
      }[];
    };
    duration: string;
    price: number;
    seoDescription?: string;
    paragrafInvestesteInCarieraTa?: string;
    seoTitle?: string;
    shortDescription?: string | null;
    plata: string;
    orar: string;
    tipDeCurs: string;
    instructor: string;
    grupFaq?: {
      faqDescriere: string;
      faq_titlu: string;
    }[];
    pozaInscructor?:{
      node:{
        mediaItemUrl:string;
        altText?: string | null;
      };
    }
    grupGalerie?: {
      pozeGalerie?: {
        nodes: {
          link: string;
        }[];
      };
      videoYt: string;
    };
    heroImage?: {
      node: {
        mediaItemUrl: string;
        altText?: string | null;
      };
    } | null;

       grupCeVeiInvataSiAvantaje?: {
      avantajulCursului: string[];
      ce_vei_invata: string[];       
    };

    grupConditiiDeInscriere?: {
      conditiiDeInscriere: string[];
      conditiiDeInscriereImagine?: {
        node: {
          altText?: string | null;
          sourceUrl: string;
        };
      } | null;
    };
  };

}
