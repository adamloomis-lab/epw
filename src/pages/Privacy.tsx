import LegalPage from '../components/LegalPage'
import { org } from '../data/site'

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="June 2026">
      <p>
        {org.name} (“EPW,” “we,” “us”) respects your privacy. This policy explains what information we
        collect through this website, how we use it, and the choices you have.
      </p>

      <h2>Information we collect</h2>
      <p>
        We collect information you choose to provide — such as your name, email address, phone number,
        and any message you send through our contact form. We also collect limited, non-identifying
        technical data (such as browser type and pages visited) to keep the site working and understand
        how it’s used.
      </p>

      <h2>How we use your information</h2>
      <ul>
        <li>To respond to your messages and giving inquiries</li>
        <li>To share ministry updates if you ask to hear from us</li>
        <li>To maintain, secure, and improve this website</li>
      </ul>

      <h2>How we share information</h2>
      <p>
        We do not sell your personal information. We share it only with trusted service providers who
        help us operate this website and ministry (for example, our website host and form provider), or
        when required by law.
      </p>

      <h2>Cookies</h2>
      <p>
        This site uses essential cookies needed for it to function and limited analytics to understand
        usage. You can control cookies through your browser settings.
      </p>

      <h2>Your choices</h2>
      <p>
        You may ask us to access, correct, or delete the personal information you’ve provided. To make a
        request, reach us through the <a href="/contact">contact form</a> on our website.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Reach us through the <a href="/contact">contact form</a> on our
        website.
      </p>
    </LegalPage>
  )
}
