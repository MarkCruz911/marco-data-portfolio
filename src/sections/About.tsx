import {
  ArrowRight,
  FileText,
  Code2,
  ChartNoAxesCombined,
  BrainCircuit,
} from 'lucide-react';
import { profile, training } from '../data/profile';
import { Label } from '../components/UI';
import DataVisual from '../components/DataVisual';
export default function About() {
  return (
    <section id="about">
      <div className="wrap hero">
        <div className="hero-copy">
          <div className="hero-identity">
            <p className="hero-name">Marco Cruz</p>
            <Label>SANTA CRUZ, BOLIVIA</Label>
          </div>
          <h1>
            Software thinking.
            <br />
            <span>
              Data-driven
              <br className="desktop-break" /> decisions.
            </span>
          </h1>
          <p className="hero-description">{profile.introduction}</p>
          <div className="disciplines">
            <span>
              <Code2 />
              Software
              <br />
              Development
            </span>
            <span>
              <ChartNoAxesCombined />
              Data
              <br />
              Analytics
            </span>
            <span>
              <BrainCircuit />
              Applied ML &<br />
              Continued Learning
            </span>
          </div>
          <div className="hero-actions">
            <a className="button dark" href="#projects">
              Explore projects <ArrowRight size={17} />
            </a>
            <a className="button outline" href="#resume">
              <FileText size={17} /> View resume
            </a>
          </div>
          <p className="location">
            <i />
            Open to remote opportunities · Spanish / English C1
          </p>
        </div>
        <DataVisual />
      </div>
      <div className="wrap about-detail">
        <div>
          <Label>ABOUT ME</Label>
          <p>{profile.description}</p>
        </div>
        <div className="education-list">
          {training.map((t) => (
            <details key={t.title}>
              <summary>
                {t.title}
                <span>+</span>
              </summary>
              <p>
                {t.issuer}
                <br />
                {t.detail}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
