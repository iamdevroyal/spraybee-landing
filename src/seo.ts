import { useEffect } from 'react'
import type { RoutePath } from './router'

interface SEOMetadata {
  title: string
  description: string
  canonical: string
  ogTitle?: string
  ogDescription?: string
}

const routeSEO: Record<RoutePath, SEOMetadata> = {
  home: {
    title: 'SprayBee — Spray the moment. Gift the memory. | Nigerian Celebration Gifting',
    description:
      'The digital way to spray cash and send gifts at Nigerian celebrations. Join events via QR code, spray Naira with live big-screen projection, climb live leaderboards, and get 60-second direct bank cashouts. 100% CBN clean-note compliant.',
    canonical: 'https://spraybee.app/',
    ogTitle: 'SprayBee — Spray the moment. Gift the memory.',
    ogDescription:
      'The digital way to spray cash and send gifts at Nigerian celebrations — no mutilated notes, no cash to carry, just the authentic owambe vibe.',
  },
  contact: {
    title: 'Contact SprayBee — WhatsApp Concierge (+234 703 514 8792) & Support',
    description:
      'Get in touch with the SprayBee team via WhatsApp at 07035148792, direct phone, or email for celebration event setups, venue LED screen integration, and partnership inquiries in Lagos & nationwide.',
    canonical: 'https://spraybee.app/contact',
    ogTitle: 'Contact SprayBee — Instant WhatsApp Concierge (+234 703 514 8792)',
    ogDescription:
      'Chat directly with our Lagos support team on WhatsApp at 07035148792 for wedding bookings, venue screens, or gifting questions.',
  },
  privacy: {
    title: 'Privacy Policy — SprayBee | NDPA 2023 & NDPR Compliant Data Protection',
    description:
      'How SprayBee Financial Technologies collects, protects, uses, and respects your personal data, transaction records, and anonymous spraying preferences in compliance with the Nigeria Data Protection Act 2023.',
    canonical: 'https://spraybee.app/privacy',
    ogTitle: 'SprayBee Privacy Policy — NDPA 2023 Compliant',
    ogDescription:
      'Comprehensive data protection policy covering event privacy, anonymous spraying rights, and financial security under Nigerian law.',
  },
  terms: {
    title: 'Terms of Service — SprayBee | CBN Clean Note Policy & Celebration Terms',
    description:
      'Legally binding terms governing SprayBee digital celebration spraying, curated gift registry redemption, 60-second celebrant bank settlement SLAs, and CBN Act 2007 clean note compliance.',
    canonical: 'https://spraybee.app/terms',
    ogTitle: 'SprayBee Terms of Service — Clean Note & Legal Compliance',
    ogDescription:
      'Terms of service protecting celebration heritage lawfully without physical banknote mutilation, ensuring instant verified payouts.',
  },
}

function updateMetaTag(selector: string, attribute: string, value: string) {
  let element = document.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    if (selector.startsWith('meta[name=')) {
      const name = selector.match(/name="([^"]+)"/)?.[1]
      if (name) element.setAttribute('name', name)
    } else if (selector.startsWith('meta[property=')) {
      const property = selector.match(/property="([^"]+)"/)?.[1]
      if (property) element.setAttribute('property', property)
    }
    document.head.appendChild(element)
  }
  element.setAttribute(attribute, value)
}

function updateCanonical(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', url)
}

export function usePageSEO(route: RoutePath) {
  useEffect(() => {
    const meta = routeSEO[route] || routeSEO.home

    // Update document title
    document.title = meta.title

    // Update Meta Description
    updateMetaTag('meta[name="description"]', 'content', meta.description)
    updateMetaTag('meta[name="title"]', 'content', meta.title)

    // Update Canonical URL
    updateCanonical(meta.canonical)

    // Update Open Graph tags
    updateMetaTag('meta[property="og:title"]', 'content', meta.ogTitle || meta.title)
    updateMetaTag(
      'meta[property="og:description"]',
      'content',
      meta.ogDescription || meta.description,
    )
    updateMetaTag('meta[property="og:url"]', 'content', meta.canonical)

    // Update Twitter card tags
    updateMetaTag('meta[name="twitter:title"]', 'content', meta.ogTitle || meta.title)
    updateMetaTag(
      'meta[name="twitter:description"]',
      'content',
      meta.ogDescription || meta.description,
    )
    updateMetaTag('meta[name="twitter:url"]', 'content', meta.canonical)
  }, [route])
}
