// src/app/layout.tsx  (inside <head>…</head>)
<head>
  {/* ...your existing meta/links... */}
  <script
    type="application/ld+json"
    // Server component -> safe to use dangerouslySetInnerHTML
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": "https://traffik.nz/#org",
            "name": "Traffik",
            "url": "https://traffik.nz/",
            "logo": "https://traffik.nz/logo.png",           // ensure this exists (>=112x112)
            "sameAs": [],
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+64-21-296-8586",
              "contactType": "customer support",
              "areaServed": "NZ",
              "availableLanguage": ["en"]
            }]
          },
          {
            "@type": "MarketingAgency",
            "@id": "https://traffik.nz/#local",
            "name": "Traffik — AI Web Optimisation",
            "url": "https://traffik.nz/",
            "image": "https://traffik.nz/og-image.jpg",
            "priceRange": "$$",
            "telephone": "+64-21-296-8586",
            "areaServed": { "@type": "Country", "name": "New Zealand" },
            "address": { "@type": "PostalAddress", "addressCountry": "NZ", "addressLocality": "Christchurch" },
            "parentOrganization": { "@id": "https://traffik.nz/#org" },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services",
              "itemListElement": [
                { "@type": "Offer", "name": "AI Website Audit — $159", "price": "159.00", "priceCurrency": "NZD", "url": "https://traffik.nz/audit" },
                { "@type": "Offer", "name": "Google Business Profile Optimisation — $350", "price": "350.00", "priceCurrency": "NZD", "url": "https://traffik.nz/gbp" },
                { "@type": "Offer", "name": "AI Visibility System — $3,450/month", "price": "3450.00", "priceCurrency": "NZD", "url": "https://traffik.nz/ai-visibility" }
              ]
            }
          },
          {
            "@type": "WebSite",
            "@id": "https://traffik.nz/#website",
            "url": "https://traffik.nz/",
            "name": "Traffik.nz",
            "publisher": { "@id": "https://traffik.nz/#org" }
          }
        ]
      })
    }}
  />
</head>
