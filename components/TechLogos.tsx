'use client';

export interface Logo {
  name: string;
  slug: string;   // filename without .svg from jsDelivr
  color: string;  // hex color to tint the icon
}

// Using jsDelivr CDN with pinned version 13 - stable and reliable
// URL format: https://cdn.jsdelivr.net/npm/simple-icons@13/icons/[slug].svg

// ── CLOUD ENGINEERING ─────────────────────────────────────────────
export const CLOUD_LOGOS: Logo[] = [
  { name: 'AWS',          slug: 'amazonwebservices', color: '#FF9900' },
  { name: 'Azure',        slug: 'LOCAL_azure',       color: '#0078D4' },
  { name: 'Google Cloud', slug: 'googlecloud',       color: '#4285F4' },
  { name: 'Terraform',    slug: 'terraform',         color: '#7B42BC' },
  { name: 'Kubernetes',   slug: 'kubernetes',        color: '#326CE5' },
  { name: 'Docker',       slug: 'docker',            color: '#2496ED' },
  { name: 'Helm',         slug: 'helm',              color: '#277A9F' },
  { name: 'Ansible',      slug: 'ansible',           color: '#EE0000' },
];

// ── DEVOPS & AUTOMATION ───────────────────────────────────────────
export const DEVOPS_LOGOS: Logo[] = [
  { name: 'GitHub Actions', slug: 'githubactions',  color: '#2088FF' },
  { name: 'GitLab CI',      slug: 'gitlab',         color: '#FC6D26' },
  { name: 'ArgoCD',         slug: 'argo',           color: '#EF7B4D' },
  { name: 'Kubernetes',     slug: 'kubernetes',     color: '#326CE5' },
  { name: 'Docker',         slug: 'docker',         color: '#2496ED' },
  { name: 'Terraform',      slug: 'terraform',      color: '#7B42BC' },
  { name: 'Ansible',        slug: 'ansible',        color: '#EE0000' },
  { name: 'Jenkins',        slug: 'jenkins',        color: '#D24939' },
];

// ── AI & MLOPS ────────────────────────────────────────────────────
export const AI_LOGOS: Logo[] = [
  { name: 'Python',       slug: 'python',           color: '#3776AB' },
  { name: 'PyTorch',      slug: 'pytorch',          color: '#EE4C2C' },
  { name: 'TensorFlow',   slug: 'tensorflow',       color: '#FF6F00' },
  { name: 'Kubernetes',   slug: 'kubernetes',       color: '#326CE5' },
  { name: 'Docker',       slug: 'docker',           color: '#2496ED' },
  { name: 'AWS',          slug: 'amazonwebservices',color: '#FF9900' },
  { name: 'Azure',        slug: 'LOCAL_azure',      color: '#0078D4' },
  { name: 'Google Cloud', slug: 'googlecloud',      color: '#4285F4' },
];

// ── DEVSECOPS ─────────────────────────────────────────────────────
export const DEVSECOPS_LOGOS: Logo[] = [
  { name: 'Snyk',       slug: 'snyk',               color: '#4C4A73' },
  { name: 'GitHub',     slug: 'github',             color: '#ffffff' },
  { name: 'GitLab',     slug: 'gitlab',             color: '#FC6D26' },
  { name: 'Terraform',  slug: 'terraform',          color: '#7B42BC' },
  { name: 'Kubernetes', slug: 'kubernetes',         color: '#326CE5' },
  { name: 'Docker',     slug: 'docker',             color: '#2496ED' },
  { name: 'Ansible',    slug: 'ansible',            color: '#EE0000' },
  { name: 'AWS',        slug: 'amazonwebservices',  color: '#FF9900' },
  { name: 'Azure',      slug: 'LOCAL_azure',        color: '#0078D4' },
];

// ── MONITORING & LOGGING ──────────────────────────────────────────
export const MONITORING_LOGOS: Logo[] = [
  { name: 'Prometheus',    slug: 'prometheus',      color: '#E6522C' },
  { name: 'Grafana',       slug: 'grafana',         color: '#F46800' },
  { name: 'Datadog',       slug: 'datadog',         color: '#632CA6' },
  { name: 'Elasticsearch', slug: 'elasticsearch',   color: '#00BFB3' },
  { name: 'Kibana',        slug: 'kibana',          color: '#F04E98' },
  { name: 'OpenTelemetry', slug: 'opentelemetry',   color: '#425CC7' },
  { name: 'New Relic',     slug: 'newrelic',        color: '#1CE783' },
  { name: 'Kubernetes',    slug: 'kubernetes',      color: '#326CE5' },
];

// ── BUSINESS & DATA ───────────────────────────────────────────────
export const DATA_LOGOS: Logo[] = [
  { name: 'Python',       slug: 'python',           color: '#3776AB' },
  { name: 'PostgreSQL',   slug: 'postgresql',       color: '#4169E1' },
  { name: 'Snowflake',    slug: 'snowflake',        color: '#29B5E8' },
  { name: 'AWS',          slug: 'amazonwebservices',color: '#FF9900' },
  { name: 'Azure',        slug: 'LOCAL_azure',      color: '#0078D4' },
  { name: 'Google Cloud', slug: 'googlecloud',      color: '#4285F4' },
  { name: 'Jupyter',      slug: 'jupyter',          color: '#F37626' },
  { name: 'Apache Spark', slug: 'apachespark',      color: '#E25A1C' },
];

// ── ALL LOGOS (homepage strip) ────────────────────────────────────
export const ALL_LOGOS: Logo[] = [
  { name: 'AWS',           slug: 'amazonwebservices', color: '#FF9900' },
  { name: 'Azure',         slug: 'LOCAL_azure',       color: '#0078D4' },
  { name: 'Google Cloud',  slug: 'googlecloud',       color: '#4285F4' },
  { name: 'Kubernetes',    slug: 'kubernetes',        color: '#326CE5' },
  { name: 'Docker',        slug: 'docker',            color: '#2496ED' },
  { name: 'Terraform',     slug: 'terraform',         color: '#7B42BC' },
  { name: 'GitHub Actions',slug: 'githubactions',     color: '#2088FF' },
  { name: 'Prometheus',    slug: 'prometheus',        color: '#E6522C' },
  { name: 'Grafana',       slug: 'grafana',           color: '#F46800' },
  { name: 'PyTorch',       slug: 'pytorch',           color: '#EE4C2C' },
  { name: 'Ansible',       slug: 'ansible',           color: '#EE0000' },
  { name: 'Snyk',          slug: 'snyk',              color: '#4C4A73' },
];

const CDN = 'https://cdn.jsdelivr.net/npm/simple-icons@13/icons';

interface TechLogosProps {
  logos: Logo[];
  title?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function TechLogos({ logos, title, size = 'md' }: TechLogosProps) {
  const iconSize = size === 'sm' ? 28 : size === 'lg' ? 52 : 40;

  return (
    <div className="w-full">
      {title && (
        <p className="text-center text-gray-500 text-xs uppercase tracking-widest mb-10">
          {title}
        </p>
      )}
      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14">
        {logos.map(({ name, slug, color }) => (
          <div
            key={name}
            className="flex flex-col items-center gap-3 group cursor-default"
          >
            <div
              className="opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 flex items-center justify-center"
              style={{ width: iconSize, height: iconSize }}
            >
              <img
                src={slug.startsWith('LOCAL_') 
                ? `/images/${slug.replace('LOCAL_', '')}_png.png`
                : `${CDN}/${slug}.svg`
                }
                alt={name}
                width={iconSize}
                height={iconSize}
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
                style={{
                  width: iconSize,
                  height: iconSize,
                  objectFit: 'contain',
                  // Tint SVG to the brand color using CSS filter
                  filter: `brightness(0) saturate(100%) invert(1)`,
                }}
              />
              {/* Fallback badge */}
              <div
                className="items-center justify-center rounded-lg bg-gray-800 border border-gray-700 text-gray-300 font-bold text-xs"
                style={{ width: iconSize, height: iconSize, display: 'none' }}
              >
                {name.substring(0, 2).toUpperCase()}
              </div>
            </div>
            <span
              className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors duration-300"
              style={{ color: undefined }}
            >
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
