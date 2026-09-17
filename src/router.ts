import { useEffect, useState } from 'react'

export type RoutePath = 'home' | 'privacy' | 'terms' | 'contact'

export function getRouteFromUrl(): RoutePath {
  const path = window.location.pathname.toLowerCase()
  const hash = window.location.hash.toLowerCase()

  if (path.includes('privacy') || hash.includes('privacy')) {
    return 'privacy'
  }
  if (path.includes('terms') || hash.includes('terms')) {
    return 'terms'
  }
  if (path.includes('contact') || hash.includes('contact')) {
    return 'contact'
  }
  return 'home'
}

export function navigateTo(path: string) {
  let targetRoute: RoutePath = 'home'
  if (path.includes('privacy')) targetRoute = 'privacy'
  else if (path.includes('terms')) targetRoute = 'terms'
  else if (path.includes('contact')) targetRoute = 'contact'

  // Update history state
  window.history.pushState({ route: targetRoute }, '', path)

  // Dispatch custom popstate so subscribers update immediately
  window.dispatchEvent(new PopStateEvent('popstate'))

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export function useRoute(): RoutePath {
  const [route, setRoute] = useState<RoutePath>(getRouteFromUrl)

  useEffect(() => {
    const handleLocationChange = () => {
      setRoute(getRouteFromUrl())
    }

    window.addEventListener('popstate', handleLocationChange)
    window.addEventListener('hashchange', handleLocationChange)

    return () => {
      window.removeEventListener('popstate', handleLocationChange)
      window.removeEventListener('hashchange', handleLocationChange)
    }
  }, [])

  return route
}
