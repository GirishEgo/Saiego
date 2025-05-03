import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import defaultImage from "../../assets/hompage-cardimgs/2.png";
import defaultLogo from "../../assets/hompage-cardimgs/1.png";
import { checkTitleMatch } from "../checkTitleMatch";

const SEO = ({
  title,
  description,
  keywords,
  image,
  siteName = "Saiegotherm India.",
  twitterHandle,
  locale = "en_IN",
  organization = "Saiegotherm India.",
  phone = ["+91 22 22068032", "+91 22 22083857"],
  email = ["sales@saiego.com", "info@saiego.com"],
  address = {
    street: "31, Tavawala Building, 147, Lohar Chawl, Kalbadevi",
    locality: "Mumbai",
    region: "Maharashtra",
    postalCode: "400002",
    country: "IN",
  },
  locations = ["India", "Dubai", "Russia"],
  faqs = [],
  product = null,
  breadcrumb = [],
}) => {
  const location = useLocation();
  const fullURL = `${window.location.origin}${location.pathname}${location.search}${location.hash}`;
  const validatedImage = image || defaultImage;
  const validatedLogo = defaultLogo;

  // Set meta tags manually for hydration consistency
  useEffect(() => {
    if (!checkTitleMatch(title)) {
      document.title = title;
    }

    const setMeta = (name, content) => {
      let metaTag = document.querySelector(`meta[name="${name}"]`);
      if (metaTag) {
        metaTag.setAttribute("content", content);
      } else {
        metaTag = document.createElement("meta");
        metaTag.name = name;
        metaTag.content = content;
        document.head.appendChild(metaTag);
      }
    };

    setMeta("description", description);
    setMeta("keywords", keywords);
    setMeta("author", siteName);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = fullURL;
  }, [title, description, keywords, siteName, fullURL]);

  // Structured Data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: organization,
    url: fullURL,
    logo: validatedLogo,
    description,
    address:{
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.locality,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    contactPoint: phone.map((num) => ({
      "@type": "ContactPoint",
      telephone: num,
      contactType: "customer service",
      areaServed: locations,
      availableLanguage: ["English", "Hindi"],
    })),
    email: email,
  };

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
        "@context": "https://schema.org/",
        "@type": "Product",
        name: product.name,
        image: [product.image || validatedImage],
        description: product.description || description,
        brand: {
          "@type": "Brand",
          name: product.brand || organization,
        },
        offers: {
          "@type": "Offer",
          url: fullURL,
          priceCurrency: product.currency || "INR",
          price: product.price,
          availability: `https://schema.org/${
            product.availability || "InStock"
          }`,
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
      <meta charSet="UTF-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={siteName} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullURL} />
      <meta property="og:image" content={validatedImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={validatedImage} />
      {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}

      <link rel="canonical" href={fullURL} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {productSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
    </Helmet>
  );
};

export default SEO;
