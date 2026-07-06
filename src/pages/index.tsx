import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons} style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/bits-societe"
            style={{background: '#6C63FF', color: '#fff', border: 'none'}}>
            🏢 Bits Company
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/ngx-bits"
            style={{background: '#00D4AA', color: '#090B14', border: 'none'}}>
            📦 ngx-bits-lib Library
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Welcome to Bits Solution"
      description="Official documentation of Bits Solution - Software development company and ngx-bits-lib library.">
      <HomepageHeader />
      <main style={{padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto'}}>
        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
          <h2>Unified Documentation Portal</h2>
          <p style={{color: 'var(--text-muted)', fontSize: '1.1rem'}}>
            Access all information regarding our enterprise software development standards, guidelines, and the complete reference guide for our premium Angular UI component library.
          </p>
        </div>
        
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
          <div style={{border: '1px solid rgba(108, 99, 255, 0.15)', borderRadius: '12px', padding: '2rem', background: 'rgba(108, 99, 255, 0.03)'}}>
            <h3>🏢 Bits Solution Company</h3>
            <p>Explore our vision, mission, and internal software development standards.</p>
            <ul style={{paddingLeft: '1.25rem', marginBottom: '1.5rem'}}>
              <li>Coding standards & Style guidelines</li>
              <li>Recommended software architecture patterns</li>
              <li>Workflows and tools</li>
            </ul>
            <Link className="button button--outline button--primary" to="/docs/bits-societe">
              Learn More
            </Link>
          </div>

          <div style={{border: '1px solid rgba(0, 212, 170, 0.2)', borderRadius: '12px', padding: '2rem', background: 'rgba(0, 212, 170, 0.02)'}}>
            <h3>📦 ngx-bits-lib Library</h3>
            <p>Access the complete reference guide and documentation of our premium Angular UI library.</p>
            <ul style={{paddingLeft: '1.25rem', marginBottom: '1.5rem'}}>
              <li>Ready-to-use premium UI components</li>
              <li>Advanced reactive dynamic Form Builder</li>
              <li>Seamless Angular Material integration</li>
            </ul>
            <Link className="button button--outline button--primary" to="/docs/ngx-bits" style={{borderColor: '#00D4AA', color: '#00D4AA'}}>
              Explore Library
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
