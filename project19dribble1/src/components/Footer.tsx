import { Link } from "react-router-dom";
import { navLinks } from "../data/content";

export function Footer() {
  return (
    <footer className="bg-p19-navy py-16 text-white/70">
      <div className="site-container">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="inline-flex rounded-lg bg-white px-3 py-2">
              <img
                src="/assets/logo.png"
                alt="Project 19"
                className="h-8 w-auto"
                width={140}
                height={32}
              />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Technology consulting for small and medium businesses. Results,
              honesty, and reliability you can depend on.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white">Navigation</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/#contact" className="text-sm transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>Custom Software</li>
              <li>Data Integrations</li>
              <li>Business Intelligence</li>
              <li>Cloud Solutions</li>
              <li>AI Solutions</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white">Get in Touch</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="mailto:info@theproject19.com" className="transition-colors hover:text-white">
                  info@theproject19.com
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="transition-colors hover:text-white">
                  (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs">&copy; {new Date().getFullYear()} Project 19. All rights reserved.</p>
          <p className="text-xs tracking-wider text-white/40 uppercase">Results · Honesty · Reliability</p>
        </div>
      </div>
    </footer>
  );
}
