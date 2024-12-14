export interface ServiceMeta {
    title: string;
    description: string;
    slug: string;
    icon?: string;
    ogImage?: string;
    keywords: string[];
  }
  
  export interface Service extends ServiceMeta {
    content: {
      hero: {
        heading: string;
        subheading: string;
        description: string;
      };
      benefits: {
        title: string;
        description: string;
        icon?: string;
      }[];
      features: {
        title: string;
        description: string;
      }[];
      process: {
        title: string;
        steps: {
          step: number;
          title: string;
          description: string;
        }[];
      };
      cta: {
        title: string;
        description: string;
        buttonText: string;
        buttonLink: string;
      };
    };
  }