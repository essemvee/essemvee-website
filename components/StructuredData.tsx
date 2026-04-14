export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.essemvee.com/#organization",
        name: "ESSEMVEE Technology Services Limited",
        alternateName: ["ESSEMVEE", "SMV Technology", "Essemvee Tech"],
        url: "https://www.essemvee.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.essemvee.com/branding/logo/smv-color.png",
          width: 500,
          height: 500,
        },
        image: "https://www.essemvee.com/branding/og-image.png",
        description:
          "ESSEMVEE Technology Services Limited is an Ireland-based global IT consultancy specialising in DevOps & Cloud Solutions, Software Development, Managed IT Support, and IT Consulting.",
        areaServed: { "@type": "Place", name: "Worldwide" },
        address: {
          "@type": "PostalAddress",
          addressCountry: "IE",
          addressRegion: "Dublin",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          availableLanguage: "English",
          url: "https://www.essemvee.com/contact",
        },
        sameAs: [
          "https://www.linkedin.com/company/essemvee",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "IT Technology Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "DevOps & Cloud Solutions",
                description: "CI/CD pipelines, cloud migration, and infrastructure automation on AWS, Azure & GCP.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Software Development",
                description: "Custom web and enterprise application development tailored to your business needs.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Managed IT Support",
                description: "24/7 remote monitoring, maintenance, and helpdesk support for your IT systems globally.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "IT Consulting",
                description: "Technology strategy, system audits, and digital transformation roadmaps for businesses worldwide.",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.essemvee.com/#website",
        url: "https://www.essemvee.com",
        name: "ESSEMVEE Technology Services Limited",
        description: "Ireland-based global IT consultancy",
        publisher: { "@id": "https://www.essemvee.com/#organization" },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.essemvee.com/#webpage",
        url: "https://www.essemvee.com",
        name: "ESSEMVEE Technology Services Limited | DevOps, Cloud & IT Consulting",
        isPartOf: { "@id": "https://www.essemvee.com/#website" },
        about: { "@id": "https://www.essemvee.com/#organization" },
        description:
          "ESSEMVEE Technology Services Limited — Ireland-based global IT consultancy. DevOps, Cloud, Software Development and Managed IT Support worldwide.",
        inLanguage: "en-IE",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
