import { Download, ExternalLink } from 'lucide-react';
import { profile } from '../data/profile';
import { Label } from '../components/UI';
export default function Resume() {
  return (
    <section id="resume" className="wrap section resume-section">
      <div className="resume-copy">
        <Label>RESUME</Label>
        <h2>
          A closer look
          <br />
          at my background.
        </h2>
        <p>
          My experience, technical skills, education, and projects — in one document. Read
          it here or download a copy.
        </p>
        <div className="resume-actions">
          <a href={profile.cv} className="button dark" download="Marco_Cruz_CV.pdf">
            Download CV <Download size={17} />
          </a>
          <a
            href={profile.cv}
            className="button outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open PDF <ExternalLink size={16} />
          </a>
        </div>
        <p className="small muted">
          The preview and download use the same PDF. If your browser cannot display it
          here, use “Open PDF”.
        </p>
      </div>
      <div className="pdf-panel">
        <div className="pdf-toolbar">
          <span>MARCO_CRUZ_CV.PDF</span>
          <a href={profile.cv} download aria-label="Download CV PDF">
            <Download size={17} />
          </a>
        </div>
        <object
          data={profile.cv + '#view=FitH'}
          type="application/pdf"
          aria-label="Marco Cruz curriculum vitae"
        >
          <div className="pdf-fallback">
            <p>Your browser does not support inline PDF preview.</p>
            <a
              className="button dark"
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open CV
            </a>
          </div>
        </object>
      </div>
    </section>
  );
}
