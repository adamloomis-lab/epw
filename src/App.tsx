import { useEffect } from 'react'
import { Route, Switch, Router, useLocation } from 'wouter'
import Seo from './components/Seo'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MobileActionBar from './components/MobileActionBar'
import StickyGive from './components/StickyGive'
import CookieNotice from './components/CookieNotice'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useParallax } from './hooks/useParallax'
import Home from './pages/Home'
import About from './pages/About'
import Give from './pages/Give'
import Devotions from './pages/Devotions'
import DevotionPost from './pages/DevotionPost'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Accessibility from './pages/Accessibility'
import NotFound from './pages/NotFound'

function Shell() {
  const [location] = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  useScrollReveal(location)
  useParallax(location)

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:shadow-lg focus:text-gray-900">Skip to content</a>
      <Seo path={location} />
      <Navbar />
      <main id="main-content">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/give" component={Give} />
          <Route path="/devotions" component={Devotions} />
          <Route path="/devotions/:slug" component={DevotionPost} />
          <Route path="/contact" component={Contact} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route path="/accessibility" component={Accessibility} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <MobileActionBar />
      <StickyGive />
      <CookieNotice />
    </>
  )
}

export default function App({ ssrPath }: { readonly ssrPath?: string }) {
  return (
    <Router ssrPath={ssrPath}>
      <Shell />
    </Router>
  )
}
