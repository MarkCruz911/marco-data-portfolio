import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { profile, links } from '../data/profile';
import { Label } from '../components/UI';
export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="wrap contact-grid">
        <div>
          <Label>CONTACT</Label>
          <h2>
            Let’s build
            <br />
            something useful.
          </h2>
          <p>
            I’m open to data analytics and software opportunities where thoughtful
            engineering and clear analysis make a difference.
          </p>
        </div>
        <div className="contact-cards">
          {[
            { label: 'Email', text: profile.email, url: links.email, icon: Mail },
            { label: 'GitHub', text: 'Explore my code', url: links.github, icon: Github },
            {
              label: 'LinkedIn',
              text: 'Let’s connect',
              url: links.linkedin,
              icon: Linkedin,
            },
          ].map(({ label, text, url, icon: Icon }) => (
            <a
              key={label}
              href={url}
              target={label === 'Email' ? undefined : '_blank'}
              rel="noopener noreferrer"
            >
              <Icon />
              <div>
                <b>{label}</b>
                <span>{text}</span>
              </div>
              <ArrowUpRight size={17} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
