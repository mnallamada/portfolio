import './globals.css'; // Import global styles
import { ReactNode } from 'react';
import Header from './components/Header'; // Import Header component

export const metadata = {
  title: 'DevPortfolio',
  description: 'A portfolio showcasing my skills, experience, and projects.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="pt-20">{children}</main>

        {/* Footer */}
        <footer>
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p>
            Built with{' '}
            <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
              Next.js
            </a>{' '}
            and{' '}
            <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
              Tailwind CSS
            </a>
            .
          </p>
          {/* Social Media Links */}
          <div className="social-links">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
