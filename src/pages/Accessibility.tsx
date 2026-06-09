import LegalPage from '../components/LegalPage'
import { org } from '../data/site'

export default function Accessibility() {
  return (
    <LegalPage title="Accessibility Statement" updated="June 2026">
      <p>
        {org.name} is committed to making this website accessible to everyone, including people with
        disabilities. We aim to follow the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
      </p>

      <h2>What we do</h2>
      <ul>
        <li>Use semantic, structured HTML and descriptive headings</li>
        <li>Provide text alternatives for meaningful images</li>
        <li>Maintain readable color contrast and clear focus states</li>
        <li>Support keyboard navigation throughout the site</li>
        <li>Respect reduced-motion preferences for animations</li>
      </ul>

      <h2>Ongoing effort</h2>
      <p>
        Accessibility is an ongoing commitment. We continue to review and improve the site as standards
        and technology evolve.
      </p>

      <h2>Need help or found a barrier?</h2>
      <p>
        If you encounter any difficulty using this site, or need information in an alternative format,
        please reach us through the <a href="/contact">contact form</a> on our website and we’ll do our
        best to help.
      </p>
    </LegalPage>
  )
}
