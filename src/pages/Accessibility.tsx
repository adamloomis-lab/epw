import LegalPage from '../components/LegalPage'
import { org } from '../data/site'

export default function Accessibility() {
  return (
    <LegalPage title="Accessibility Statement" updated="June 2026">
      <h2>Our commitment</h2>
      <p>
        {org.name} is committed to making this website accessible to everyone, including people with
        disabilities. This site is built to the Web Content Accessibility Guidelines (WCAG) 2.1 Level
        AA, the standard referenced by the ADA for web accessibility. We review and update our
        accessibility practices on an ongoing basis.
      </p>

      <h2>What we have done</h2>
      <p>We have taken the following steps to support an accessible experience:</p>
      <ul>
        <li>
          Keyboard navigation: skip links allow keyboard and screen reader users to bypass the
          navigation menu and jump straight to the main content.
        </li>
        <li>
          Focus indicators: a visible outline appears on every interactive element when navigated by
          keyboard, so users can always tell where they are on the page.
        </li>
        <li>
          Color contrast: text colors are chosen to meet the 4.5:1 minimum contrast ratio required
          for readability by people with low vision.
        </li>
        <li>
          Screen reader labels: all form fields, buttons, and interactive elements have descriptive
          labels so assistive technologies can communicate their purpose clearly.
        </li>
        <li>
          Motion sensitivity: animations automatically reduce for users who have the Reduce Motion
          preference enabled on their device.
        </li>
      </ul>

      <h2>Report an issue</h2>
      <p>
        If you encounter any accessibility barrier on this site, please{' '}
        <a href="/contact">contact us</a> and we will address it promptly.
      </p>
    </LegalPage>
  )
}
