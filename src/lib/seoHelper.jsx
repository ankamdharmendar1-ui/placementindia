import { Helmet } from 'react-helmet';
import { SITE_NAME, SITE_URL, SUPPORT_EMAIL } from './siteConfig';

// Default SEO values to ensure brand prominence
const DEFAULT_TITLE_SUFFIX = ' | Quetext';
const DEFAULT_KEYWORDS = 'quetext, free plagiarism checker, AI content detector, grammar checker, paraphrasing tool, sentence rewriter, word counter, essay checker, plagiarism detection, AI detection';

const SEO = ({ title, description, keywords, url = '/', customSchema = [] }) => {
  // Ensure the brand name appears in the title
  const fullTitle = title?.includes('Quetext') ? title : `${title || SITE_NAME}${DEFAULT_TITLE_SUFFIX}`;
  const fullDescription = description || `Free online writing tools by ${SITE_NAME}: plagiarism checker, AI detector, grammar checker, paraphrasing, and more.`;
  const fullKeywords = keywords || DEFAULT_KEYWORDS;

  const canonical = `${SITE_URL}${url}`;

  // Organization and Website structured data
  const orgLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
        email: SUPPORT_EMAIL,
        description: 'Free online writing tools including plagiarism checker, AI detector, and grammar checker.',
        sameAs: [
          'https://twitter.com/quetext',
          'https://www.facebook.com/quetext',
          'https://instagram.com/quetext'
        ]
      },
      {
        '@type': 'WebSite',
        name: SITE_NAME,
        url: SITE_URL,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${SITE_URL}/tools?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      }
    ]
  };

  // Breadcrumb structured data – can be extended per page
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL
      }
    ]
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      {fullKeywords && <meta name="keywords" content={fullKeywords} />}
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow" />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:card" content="summary_large_image" />

      <script type="application/ld+json">{JSON.stringify(orgLd)}</script>
      {/* Breadcrumb structured data */}
      <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      {/* Custom injected schema from pages */}
      {customSchema.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
