import React, { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import defaultImage from "../../assets/hompage-cardimgs/2.png";
import defaultLogo from "../../assets/hompage-cardimgs/1.png";

const SEO = ({
  title,
  description,
  keywords,
  image,
  siteName = "Girish Ego Controls",
  twitterHandle,
  locale = "en_IN",
  organization = "Girish Ego Controls",
  phone = ["+91 22 22068032", "+91 22 22083857"],
  email = ["sales@girishego.com", "info@girishego.com"],
  address = {
    street: "31, Tavawala Building, 147, Lohar Chawl, Kalbadevi",
    locality: "Mumbai",
    region: "Maharashtra",
    postalCode: "400002",
    country: "India",
  },
  locations = ["India", "Dubai", "Russia"],
  faqs = [],
  product = null,
  breadcrumb = [],
  url,
}) => {
  const location = useLocation();
  const validatedUrl = url || `https://www.girishego.com${location.pathname}`;
  const validatedImage = image || defaultImage;

  const organizationSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: organization,
      url: validatedUrl,
      logo: defaultLogo,
      description,
      address: {
        "@type": "PostalAddress",
        streetAddress: address.street,
        addressLocality: address.locality,
        addressRegion: address.region,
        postalCode: address.postalCode,
        addressCountry: address.country,
      },
      contactPoint: phone.map((tel) => ({
        "@type": "ContactPoint",
        telephone: tel,
        contactType: "customer service",
        areaServed: locations,
        availableLanguage: ["English", "Hindi"],
      })),
    }),
    [organization, validatedUrl, address, phone, locations]
  );

  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  const productSchema = product
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        image: product.image || validatedImage,
        description: product.description || description,
        brand: {
          "@type": "Brand",
          name: product.brand || organization,
        },
        offers: {
          "@type": "Offer",
          price: product.price,
          priceCurrency: product.currency || "INR",
          availability: product.availability || "InStock",
          url: validatedUrl,
        },
      }
    : null;

  const breadcrumbSchema =
    breadcrumb.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumb.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        }
      : null;

  return (
    <Helmet>
      {/* 🔍 SEO Basics */}
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={siteName} />
      <link rel="canonical" href={validatedUrl} />

      {/* 🌐 Open Graph */}
      <meta property="og:type" content="product" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={validatedImage} />
      <meta property="og:url" content={validatedUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* 🐦 Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={validatedImage} />
      {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}

      {/* 🧠 Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      {faqSchema && (
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      )}
      {productSchema && (
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      )}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
