import { useEffect } from 'react'

const SITE_URL = 'https://fierynailbar.co.za'
const DEFAULT_TITLE = 'Fiery Nailbar | Nail Studio in Johannesburg'
const DEFAULT_DESCRIPTION =
  'Fiery Nailbar is a premium nail studio in Sydenham, Johannesburg. Specialising in gel overlays, builder gel sculpted tips, nail art, and pedicures. Book online via Fresha.'

function setMeta(selector, attr, name, content) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

const BREADCRUMB_ID = 'seo-breadcrumb-jsonld'

// Injects (or removes) a BreadcrumbList JSON-LD block for the current route so
// search results can show a Home › Page trail. `title` is the current page.
function setBreadcrumb(title, path) {
  const existing = document.getElementById(BREADCRUMB_ID)
  if (!path) {
    if (existing) existing.remove()
    return
  }
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: title, item: `${SITE_URL}${path}` },
    ],
  }
  const el = existing || document.createElement('script')
  el.id = BREADCRUMB_ID
  el.type = 'application/ld+json'
  el.textContent = JSON.stringify(data)
  if (!existing) document.head.appendChild(el)
}

/**
 * Updates the document title, description, canonical URL, the social sharing
 * tags, and a breadcrumb JSON-LD for the current SPA route. Restores defaults
 * on unmount so navigating back to the home page keeps the correct metadata.
 *
 * @param {string} [breadcrumbName] Short label for the page in the breadcrumb
 *   trail (e.g. "FAQ"). Omit on the home route to skip breadcrumbs.
 */
export function useSeo({ title, description, path = '', breadcrumbName } = {}) {
  useEffect(() => {
    const resolvedTitle = title || DEFAULT_TITLE
    const resolvedDescription = description || DEFAULT_DESCRIPTION
    const resolvedUrl = `${SITE_URL}${path}`

    document.title = resolvedTitle
    setMeta('meta[name="description"]', 'name', 'description', resolvedDescription)
    setCanonical(resolvedUrl)
    setMeta('meta[property="og:title"]', 'property', 'og:title', resolvedTitle)
    setMeta('meta[property="og:description"]', 'property', 'og:description', resolvedDescription)
    setMeta('meta[property="og:url"]', 'property', 'og:url', resolvedUrl)
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', resolvedTitle)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', resolvedDescription)
    setBreadcrumb(breadcrumbName, breadcrumbName ? path : '')

    return () => {
      setBreadcrumb(null, '')
      document.title = DEFAULT_TITLE
      setMeta('meta[name="description"]', 'name', 'description', DEFAULT_DESCRIPTION)
      setCanonical(`${SITE_URL}/`)
      setMeta('meta[property="og:title"]', 'property', 'og:title', DEFAULT_TITLE)
      setMeta('meta[property="og:description"]', 'property', 'og:description', DEFAULT_DESCRIPTION)
      setMeta('meta[property="og:url"]', 'property', 'og:url', `${SITE_URL}/`)
      setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', DEFAULT_TITLE)
      setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', DEFAULT_DESCRIPTION)
    }
  }, [title, description, path, breadcrumbName])
}
