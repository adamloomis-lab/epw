import { Mail, HeartHandshake, Globe2 } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ContactForm from '../components/ContactForm'
import { photos } from '../data/site'

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s strengthen the Church together."
        intro="Whether you want to give, mobilize your church, or simply learn more about the mission — we’d love to hear from you."
        image={photos.group}
      />

      <section className="py-16 md:py-24">
        <div className="container-x grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="reveal-left md:col-span-5">
            <span className="eyebrow">Get in Touch</span>
            <h2 className="h-section mt-3">Partner with the mission</h2>
            <p className="mt-4 text-lg text-ink-soft">
              Every message reaches our team directly. Tell us how you’d like to be part of equipping
              pastors on the frontlines.
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cream text-pine">
                  <Mail size={20} />
                </span>
                <div>
                  <div className="font-display font-semibold text-ink">Send us a message</div>
                  <p className="text-[15px] text-ink-soft">
                    Fill out the form and our team will reply as soon as we can.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cream text-pine">
                  <HeartHandshake size={20} />
                </span>
                <div>
                  <div className="font-display font-semibold text-ink">Become a partner</div>
                  <p className="text-[15px] text-ink-soft">
                    Sponsor a pastor, a region, or give monthly to multiply the mission.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cream text-pine">
                  <Globe2 size={20} />
                </span>
                <div>
                  <div className="font-display font-semibold text-ink">Where we work</div>
                  <p className="text-[15px] text-ink-soft">
                    On the frontlines of the Global South, in hidden and high-risk places.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="reveal-right md:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
