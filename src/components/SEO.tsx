import { Helmet } from 'react-helmet-async';
import { BUSINESS_INFO, BRAND_ASSETS } from '../constants';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: string;
}

export default function SEO({ title, description, path, image, type = 'website' }: SEOProps) {
  const fullTitle = `${title} | Edemrey Homes - Cultivating Legacies in Lagos Real Estate`;
  const url = `https://edemreyhomes.com${path}`; // Using a placeholder domain for SEO purposes
  const ogImage = image || BRAND_ASSETS.PROPERTIES[3];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Edemrey Homes & Properties Limited",
    "image": BRAND_ASSETS.LOGO,
    "@id": "https://edemreyhomes.com",
    "url": "https://edemreyhomes.com",
    "telephone": BUSINESS_INFO.PHONE,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4th Floor, Polystar Building, Lekki, Marwa, Lekki 101233",
      "addressLocality": "Lagos",
      "postalCode": "101233",
      "addressCountry": "NG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 6.449,
      "longitude": 3.484
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "sameAs": [
      BUSINESS_INFO.SOCIALS.FACEBOOK,
      BUSINESS_INFO.SOCIALS.INSTAGRAM,
      BUSINESS_INFO.SOCIALS.LINKEDIN
    ]
  };

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name='description' content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
}
