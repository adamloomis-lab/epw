import LegalPage from '../components/LegalPage'
import { org } from '../data/site'

export default function Terms() {
  return (
    <LegalPage title="Terms of Use" updated="June 2026">
      <p>
        Welcome to the {org.name} website. By accessing or using this site, you agree to these terms. If
        you do not agree, please do not use the site.
      </p>

      <h2>Use of this site</h2>
      <p>
        This website is provided for informational purposes and to enable giving and communication with
        EPW. You agree to use it lawfully and not to disrupt, damage, or attempt unauthorized access to
        the site or its systems.
      </p>

      <h2>Donations</h2>
      <p>
        Gifts made to EPW support our mission of training and resourcing pastors. Please contact us with
        any questions about a gift, receipt, or how funds are used.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The content on this site, including text, photographs, logos, and graphics, is owned by EPW or
        used with permission, and may not be reproduced without consent.
      </p>

      <h2>Third-party links</h2>
      <p>
        This site may link to third-party websites or services. We are not responsible for the content
        or practices of those external sites.
      </p>

      <h2>Disclaimer</h2>
      <p>
        This site is provided “as is” without warranties of any kind. We work to keep information
        accurate and current but do not guarantee it is complete or error-free.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Reach us through the <a href="/contact">contact form</a> on our
        website.
      </p>
    </LegalPage>
  )
}
