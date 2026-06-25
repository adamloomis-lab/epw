import { Link } from 'wouter'
import { ArrowRight, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-navy)] text-white">
      <div className="container-x relative flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <span className="font-display text-7xl font-extrabold text-lime md:text-8xl">404</span>
        <h1 className="font-display mt-4 text-3xl font-bold md:text-4xl">Page not found</h1>
        <p className="mt-4 max-w-md text-white/80">
          We couldn’t find that page. The mission continues. Let’s get you back on the path.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-lime">
            <Home size={18} /> Back home
          </Link>
          <Link href="/give" className="btn btn-ghost-light">
            Join the Mission <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
