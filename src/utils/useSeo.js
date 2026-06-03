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

/**
 * Updates the document title, description, canonical URL, and the social
 * sharing tags for the current SPA route. Restores defaults on unmount so
 * navigating back to the home page keeps the correct metadata.
 */
export function useSeo({ title, description, path = '' } = {}) {
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

    return () => {
      document.title = DEFAULT_TITLE
      setMeta('meta[name="description"]', 'name', 'description', DEFAULT_DESCRIPTION)
      setCanonical(`${SITE_URL}/`)
      setMeta('meta[property="og:title"]', 'property', 'og:title', DEFAULT_TITLE)
      setMeta('meta[property="og:description"]', 'property', 'og:description', DEFAULT_DESCRIPTION)
      setMeta('meta[property="og:url"]', 'property', 'og:url', `${SITE_URL}/`)
      setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', DEFAULT_TITLE)
      setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', DEFAULT_DESCRIPTION)
    }
  }, [title, description, path])
}
