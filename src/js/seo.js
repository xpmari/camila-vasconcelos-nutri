/**
 * ==============================================================================
 * SEO & SCHEMA.ORG GENERATOR
 * Injeção dinâmica de metatags e dados estruturados para profissionais da saúde
 * ==============================================================================
 */

function setupSEO(config) {
  const seo = config.seo || {};
  const profile = config.profile || {};
  const contact = config.contact || {};
  const address = contact.address || {};

  // 1. Título e Metatags Básicas
  document.title = seo.siteTitle || `${profile.name} | ${profile.title}`;

  setMetaTag('name', 'description', seo.metaDescription || profile.bioShort || '');
  setMetaTag('name', 'keywords', seo.keywords || '');
  setMetaTag('name', 'author', profile.name || '');

  // 2. Canonical Link
  if (seo.canonicalUrl) {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', seo.canonicalUrl);
  }

  // 3. Open Graph (Facebook, WhatsApp, LinkedIn)
  setMetaTag('property', 'og:title', seo.siteTitle || profile.name);
  setMetaTag('property', 'og:description', seo.metaDescription || profile.bioShort);
  setMetaTag('property', 'og:type', 'website');
  setMetaTag('property', 'og:url', seo.canonicalUrl || window.location.href);
  if (seo.ogImage) {
    setMetaTag('property', 'og:image', seo.ogImage);
  }
  setMetaTag('property', 'og:locale', seo.locale || 'pt_BR');

  // 4. Twitter Cards
  setMetaTag('name', 'twitter:card', 'summary_large_image');
  setMetaTag('name', 'twitter:title', seo.siteTitle || profile.name);
  setMetaTag('name', 'twitter:description', seo.metaDescription || profile.bioShort);
  if (seo.ogImage) {
    setMetaTag('name', 'twitter:image', seo.ogImage);
  }

  // 5. Injeção de Schema.org JSON-LD (Physician, Dentist ou MedicalBusiness)
  injectSchemaJSONLD(config);
}

function setMetaTag(attributeName, attributeValue, content) {
  if (!content) return;
  let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function injectSchemaJSONLD(config) {
  const profile = config.profile || {};
  const contact = config.contact || {};
  const address = contact.address || {};
  const seo = config.seo || {};

  const schemaType = seo.schemaType || 'Physician';

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    'name': profile.name,
    'description': seo.metaDescription || profile.bioShort,
    'medicalSpecialty': profile.title,
    'telephone': contact.phone || contact.whatsapp,
    'email': contact.email,
    'url': seo.canonicalUrl || window.location.href,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': address.street,
      'addressLocality': address.city,
      'addressRegion': address.state,
      'postalCode': address.zip,
      'addressCountry': 'BR'
    },
    'priceRange': '$$'
  };

  if (profile.avatarUrl) {
    schemaData.image = profile.avatarUrl;
  }

  // Inserção da tag script
  const existingScript = document.getElementById('schema-jsonld');
  if (existingScript) {
    existingScript.remove();
  }

  const script = document.createElement('script');
  script.id = 'schema-jsonld';
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schemaData, null, 2);
  document.head.appendChild(script);
}

if (typeof window !== 'undefined') {
  window.setupSEO = setupSEO;
}

