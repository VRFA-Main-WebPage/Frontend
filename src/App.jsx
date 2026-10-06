import React, { useState, useEffect, useRef, useMemo } from 'react';

// --- CUSTOM SVG ICONS (Self-contained, ultra-crisp, no missing external packages) ---
const ShieldIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const LockIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const SearchIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

const TerminalIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5"/>
    <line x1="12" y1="19" x2="20" y2="19"/>
  </svg>
);

const CheckCircleIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

const PhoneCallIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const CrosshairIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="22" y1="12" x2="18" y2="12"/>
    <line x1="6" y1="12" x2="2" y2="12"/>
    <line x1="12" y1="6" x2="12" y2="2"/>
    <line x1="12" y1="22" x2="12" y2="18"/>
  </svg>
);

const RadioIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="2"/>
    <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/>
  </svg>
);

const ScaleIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/>
    <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/>
    <path d="M7 21h10"/>
    <path d="M12 3v18"/>
    <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>
  </svg>
);

const SmartphoneIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
    <line x1="12" y1="18" x2="12.01" y2="18"/>
  </svg>
);

const BitcoinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.053.714 4.969-5.184 1.215-6.025m-1.215 6.025L7.076 11.15m6.257-7.947-.348 1.97"/>
    <path d="M7.076 11.15 5.86 18.047"/>
    <path d="M9.423 3.551 8.207 10.45"/>
  </svg>
);

const ActivityIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
);

const SunIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const ChevronRightIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);

const XIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const VfraBrandLogo = ({ className = "w-12 h-14" }) => (
  <div className={`relative shrink-0 ${className} group-hover:scale-105 transition-transform duration-300`}>
    <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-md">
      <defs>
        <linearGradient id="vfraEagleGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff8cf" />
          <stop offset="35%" stopColor="#d4af37" />
          <stop offset="70%" stopColor="#9a7a15" />
          <stop offset="100%" stopColor="#4e3b03" />
        </linearGradient>
        <linearGradient id="vfraInnerShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#14213d" />
          <stop offset="60%" stopColor="#080e1b" />
          <stop offset="100%" stopColor="#020409" />
        </linearGradient>
      </defs>
      {/* Outer Falcon / Eagle Crest Silhouette */}
      <path 
        d="M12 30 C12 18, 30 6, 68 15 C78 19, 88 28, 92 38 C90 40, 84 41, 79 38 C88 45, 90 53, 76 56 C73 57, 70 56, 68 54 C72 68, 62 82, 48 112 C28 92, 10 65, 12 30 Z" 
        fill="url(#vfraEagleGoldGrad)" 
      />
      {/* Inner Inset Shield */}
      <path 
        d="M22 36 C22 25, 36 17, 60 22 C68 25, 75 32, 76 40 C66 42, 60 48, 58 56 C54 75, 45 92, 47 100 C32 82, 20 62, 22 36 Z" 
        fill="url(#vfraInnerShieldGrad)" 
        stroke="url(#vfraEagleGoldGrad)" 
        strokeWidth="1.8" 
      />
      {/* Falcon Vigilant Eye */}
      <ellipse cx="64" cy="30" rx="3.5" ry="2.2" fill="#ffffff" />
      <circle cx="64" cy="30" r="1.4" fill="#000000" />
      {/* Precision Forensic Magnifying Lens Core */}
      <circle cx="45" cy="50" r="23" fill="url(#vfraInnerShieldGrad)" stroke="url(#vfraEagleGoldGrad)" strokeWidth="3.5" />
      <circle cx="45" cy="50" r="19.5" fill="none" stroke="url(#vfraEagleGoldGrad)" strokeWidth="1" strokeDasharray="2 1" />
      {/* Reticle Crosshairs */}
      <path d="M20 50 H24 M66 50 H70 M45 25 V29 M45 71 V75" stroke="url(#vfraEagleGoldGrad)" strokeWidth="2" />
      {/* VFRA Typography Seal Monogram */}
      <text x="45" y="55" fontFamily="'Cinzel', serif" fontSize="12" fontWeight="900" fill="url(#vfraEagleGoldGrad)" textAnchor="middle" letterSpacing="1">
        VFRA
      </text>
      {/* Loupe Handle */}
      <path d="M43 73.5 L43 92 L47 92 L47 73.5 Z" fill="url(#vfraEagleGoldGrad)" />
    </svg>
  </div>
);

const CUSTODY_STEPS = [
  {
    num: "01",
    badge: "STAGE 01",
    std: "ISO/IEC 27037:2012 §5.2",
    title: "Confidential Inward Docketing & Faraday Sealing",
    desc: "Every digital exhibit is physically cataloged with high-resolution photography, tamper-evident barcode sealing, IMEI/Serial number cross-indexing, and isolation within an RF-shielded Faraday enclosure to prevent remote wipe commands.",
    deliverable: "Signed Inward Custody Docket & Tamper Log",
    tools: "Faraday Pouches, Barcode Tamper Seals"
  },
  {
    num: "02",
    badge: "STAGE 02",
    std: "ISO/IEC 27037:2012 §5.3",
    title: "Hardware Write-Blocking & Physical Isolation",
    desc: "Physical storage media are attached exclusively through certified hardware write-blockers (Tableau / CRU WiebeTech) preventing write signals to memory cells. Pre-imaging checksums and physical geometry are logged into the ledger.",
    deliverable: "Pre-acquisition Hardware Verification Sheet",
    tools: "Hardware Write-Blockers, Biometric Vault"
  },
  {
    num: "03",
    badge: "STAGE 03",
    std: "ISO/IEC 27037:2012 §5.4",
    title: "Bitstream Image Acquisition & Dual Hash Verification",
    desc: "Exact physical bit-for-bit clones (.E01 / .RAW image format) are acquired. Dual cryptographic hashes (MD5 and SHA-256) are calculated simultaneously to verify that the clone matches the master source with 100% mathematical certainty.",
    deliverable: "Dual Hash Comparison Certificate",
    tools: "Falcon-NEO, Tableau Forensic Bridges"
  },
  {
    num: "04",
    badge: "STAGE 04",
    std: "ISO/IEC 27041 & 27042",
    title: "Deep Laboratory Examination & File Carving",
    desc: "Analysis is executed strictly upon forensic working copies. Unallocated space blocks are carved, deleted WhatsApp and Telegram SQLite databases reconstructed, file timestamps verified against NTP sources, and registry hives decoded.",
    deliverable: "Extracted Artifact Matrix, Reconstructed Chat CSVs",
    tools: "InvestiGate Suite, Autopsy, AXIOM, UFED"
  },
  {
    num: "05",
    badge: "STAGE 05",
    std: "BSA 2023 §63 & IEA §65B",
    title: "Section 63 BSA 2023 Statutory Certification",
    desc: "A comprehensive scientific report is compiled, outlining tools utilized, acquisition steps, and verified findings. Accompanied by the statutory certificate signed by our qualified forensic specialists pursuant to Section 63 of Bharatiya Sakshya Adhiniyam, 2023.",
    deliverable: "Section 63 BSA Legal Affidavit & Lab Dossier",
    tools: "Cryptographic PKI Signatures, Secure Watermarked PDF"
  },
  {
    num: "06",
    badge: "STAGE 06",
    std: "BNSS 2023 §329 & CrPC §293",
    title: "Expert Witness Testimony & Courtroom Defense",
    desc: "Senior certified forensic examiners appear before Sessions Courts, High Courts, and Inquiry Commissions to defend the integrity of the chain of custody, explain technical findings, and survive rigorous cross-examination by defense counsels.",
    deliverable: "Deposition Support & Evidence Presentation",
    tools: "Courtroom Demonstrative Exhibits"
  }
];

const LAB_SERVICES = [
  {
    id: 'mobile',
    icon: SmartphoneIcon,
    tag: 'CHIP-OFF & PHYSICAL',
    title: 'Mobile Acquisition & Advanced Carving',
    desc: 'Physical, file system, and logical acquisitions of locked Android and iOS devices. Chip-off memory extraction, JTAG reading, EDL bypass, and deleted SQLite chat database recovery.',
    std: 'ISO/IEC 27037'
  },
  {
    id: 'crypto',
    icon: BitcoinIcon,
    tag: 'BLOCKCHAIN & PMLA',
    title: 'Cryptocurrency Peel Chain & Mixer Tracing',
    desc: 'Tracing illicit cryptocurrency movement across Bitcoin, Ethereum, and TRON (USDT TRC-20). Peel chain cluster analysis, darknet mixer unmasking, and VASP freeze notices under PMLA.',
    std: 'FIU-IND Aligned'
  },
  {
    id: 'voice',
    icon: ActivityIcon,
    tag: 'ACOUSTIC BIOMETRICS',
    title: 'Audio Authenticity & Voiceprint Matching',
    desc: 'Spectrographic formant analysis for voice biometric matching, acoustic background attenuation, CCTV frame-by-frame tamper verification, and AI deepfake synthetic voice detection.',
    std: 'SWGDE Standards'
  },
  {
    id: 'bsa',
    icon: ScaleIcon,
    tag: 'LEGAL ADMISSIBILITY',
    title: 'BSA §63 / Sec 65B Electronic Certificates',
    desc: 'Statutory certification of electronic records under Bharatiya Sakshya Adhiniyam, 2023 (§63) and Section 65B of Indian Evidence Act. Prepared to withstand trial cross-examinations.',
    std: 'Court Admissible'
  },
  {
    id: 'dfir',
    icon: ShieldIcon,
    tag: 'ENTERPRISE DFIR',
    title: 'Ransomware & Breach Incident Response',
    desc: 'Rapid on-site and remote triage for enterprise ransomware incidents, critical server compromise, intellectual property theft, and insider corporate espionage.',
    std: '24/7 Deployment'
  },
  {
    id: 'intel',
    icon: RadioIcon,
    tag: 'ENCRYPTED SYNDICATES',
    title: 'Telegram & Darknet Threat De-Anonymization',
    desc: 'Targeting cyber syndicates operating across Telegram, Signal, and dark web illicit forums. Automatically harvests message headers, de-anonymizes admin identities, and cross-references mule bank UPI IDs.',
    std: 'LEA Restricted'
  }
];

export default function App() {
  // Theme state: dark (default) or light
  const [theme, setTheme] = useState('dark');
  const [activePlatform, setActivePlatform] = useState('investigate'); // 'investigate' | 'tti'
  const [activeCustodyStep, setActiveCustodyStep] = useState(0);
  
  // Real-time Hash stream state
  const [liveHash, setLiveHash] = useState('e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855');
  
  // Modals state
  const [activeModal, setActiveModal] = useState(null); // 'case' | 'verify' | 'track' | 'briefing' | null
  const [modalContext, setModalContext] = useState('');
  
  // Interactive Tracker query state
  const [docketNumber, setDocketNumber] = useState('VFRA/2026/CY-8821');
  const [trackingFound, setTrackingFound] = useState(false);
  const [certQuery, setCertQuery] = useState('VFRA/2026/CERT-63B-8109');
  const [certVerified, setCertVerified] = useState(false);
  const [submittedDocketId, setSubmittedDocketId] = useState(null);

  // Audio visualizer state
  const [audioSpeedMode, setAudioSpeedMode] = useState('normal');

  // Refs for HTML5 Canvases
  const radarCanvasRef = useRef(null);
  const audioCanvasRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('vfra_theme') || 'dark';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('vfra_theme', nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    const hex = '0123456789abcdef';
    const interval = setInterval(() => {
      let result = '';
      for (let i = 0; i < 64; i++) {
        result += hex[Math.floor(Math.random() * 16)];
      }
      setLiveHash(result);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = radarCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let radarAngle = 0;

    const resize = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Initial Evidence Nodes
    const nodeCount = 36;
    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1.2,
        isAlert: Math.random() > 0.82
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width * 0.65;
      const cy = canvas.height * 0.5;
      const maxR = Math.min(canvas.width, canvas.height) * 0.55;

      // Draw Institutional Radar Circles
      ctx.strokeStyle = theme === 'dark' ? 'rgba(212, 175, 55, 0.08)' : 'rgba(15, 23, 42, 0.06)';
      ctx.lineWidth = 1;
      for (let r = 50; r < maxR; r += 70) {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw Sweeping Threat Radar Beam
      radarAngle += 0.016;
      const beamGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxR);
      beamGrad.addColorStop(0, 'rgba(239, 68, 68, 0.22)');
      beamGrad.addColorStop(1, 'rgba(239, 68, 68, 0)');

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, maxR, radarAngle, radarAngle + 0.38);
      ctx.closePath();
      ctx.fillStyle = beamGrad;
      ctx.fill();
      ctx.restore();

      // Render & Connect Interlinked Evidence Nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = n.isAlert ? '#ef4444' : (theme === 'dark' ? '#d4af37' : '#0284c7');
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dist = Math.hypot(n.x - n2.x, n.y - n2.y);
          if (dist < 110) {
            ctx.strokeStyle = theme === 'dark' 
              ? `rgba(212, 175, 55, ${0.16 * (1 - dist / 110)})` 
              : `rgba(2, 132, 199, ${0.12 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [theme]);

  useEffect(() => {
    const canvas = audioCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let phase = 0;

    const resize = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = 192;
    };
    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;
      const mid = h / 2;

      // Axis line
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, mid);
      ctx.lineTo(w, mid);
      ctx.stroke();

      const speed = audioSpeedMode === 'burst' ? 0.14 : 0.05;
      phase += speed;

      // Human Voice Resonant Wave (Cyan)
      ctx.beginPath();
      ctx.strokeStyle = '#06b6d4';
      ctx.lineWidth = 2;
      for (let x = 0; x < w; x++) {
        const norm = x / w;
        const envelope = Math.sin(norm * Math.PI);
        const y = mid + Math.sin(x * 0.035 + phase) * 26 * envelope + Math.sin(x * 0.08 - phase * 1.5) * 12 * envelope;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Formant Harmonic Wave (Gold)
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.8)';
      ctx.lineWidth = 1.5;
      for (let x = 0; x < w; x++) {
        const norm = x / w;
        const envelope = Math.sin(norm * Math.PI);
        const y = mid + Math.sin(x * 0.075 - phase * 1.8) * 16 * envelope;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [audioSpeedMode]);

  const handleOpenModal = (modalName, context = '') => {
    setActiveModal(modalName);
    setModalContext(context);
    setSubmittedDocketId(null);
    setTrackingFound(false);
    setCertVerified(false);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    setModalContext('');
  };

  const handleDocketSubmit = (e) => {
    e.preventDefault();
    const mockId = `VFRA/2026/CY-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedDocketId(mockId);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#030509] text-slate-900 dark:text-slate-100 font-sans antialiased transition-colors duration-200 selection:bg-[#d4af37] selection:text-black">
      
      {/* ========================================================================= */}
      {/* 1. TOP STATUTORY & THREAT STATUS BANNER                                   */}
      {/* ========================================================================= */}
      <div className="bg-black/95 text-slate-300 border-b border-slate-800 text-[11px] py-1.5 px-4 font-mono z-50 relative">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 bg-red-950/80 text-red-400 border border-red-800/80 px-2 py-0.5 rounded font-bold tracking-wider">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              INCIDENT LEVEL 1 ACTIVE
            </span>
            <span className="hidden md:inline text-slate-400">
              CIN: <strong className="text-slate-200">U69100PN2025PTC250064</strong>
              <span className="text-slate-700 mx-1.5">•</span>
              DPIIT: <strong className="text-[#d4af37]">#DIPP190132</strong>
              <span className="text-slate-700 mx-1.5">•</span>
              GSTIN: <strong className="text-slate-200">27AALCV7316E1Z5</strong>
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-slate-500">Live Hash Stream:</span>
              <span className="text-cyan-400 font-mono text-[10px]">
                sha256:{liveHash.substring(0, 6)}...{liveHash.substring(58)}
              </span>
            </div>
            <span className="hidden sm:inline text-slate-700">|</span>
            <a href="tel:+919511957687" className="text-[#d4af37] font-bold hover:underline flex items-center gap-1.5 font-mono">
              <PhoneCallIcon className="w-3.5 h-3.5 text-red-400" />
              <span>+91 95119 57687</span>
            </a>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. STICKY INSTITUTIONAL HEADER & BRAND LOCKUP                              */}
      {/* ========================================================================= */}
      <header className="bg-white/95 dark:bg-[#070b13]/95 backdrop-blur-md border-b border-slate-200 dark:border-[#1e335a] sticky top-0 z-40 shadow-xl transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Official VFRA Brand Lockup */}
            <a href="#" className="flex items-center gap-3.5 group py-1">
              <VfraBrandLogo />
              <div className="flex flex-col justify-center">
                <span className="font-serif font-black text-2xl tracking-[0.24em] text-slate-900 dark:text-white uppercase leading-none">
                  VIGILANT
                </span>
                <div className="w-full h-[2px] bg-gradient-to-r from-[#fff2a8] via-[#d4af37] to-[#8f7215] my-1"></div>
                <span className="text-[9px] font-sans font-bold tracking-[0.16em] uppercase text-slate-700 dark:text-slate-300 leading-tight">
                  FORENSIC RESEARCH AND ANALYTICS PVT. LTD.
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7 text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              <a href="#radar-hero" className="hover:text-[#d4af37] transition-colors">Telemetry</a>
              <a href="#platforms" className="hover:text-[#d4af37] transition-colors">Platforms</a>
              <a href="#lab-matrix" className="hover:text-[#d4af37] transition-colors">Lab Matrix</a>
              <a href="#audio-wave" className="hover:text-[#d4af37] transition-colors">Voiceprint</a>
              <a href="#custody" className="hover:text-[#d4af37] transition-colors">Chain of Custody</a>
              <a href="#bsa-law" className="hover:text-[#d4af37] transition-colors">BSA §63</a>
            </nav>

            {/* Right Side Controls */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle Button */}
              <button 
                onClick={toggleTheme} 
                aria-label="Toggle Theme" 
                className="p-2.5 rounded-lg border border-slate-300 dark:border-[#1e335a] bg-slate-100 dark:bg-[#0f1b33] text-slate-800 dark:text-slate-200 hover:text-[#d4af37] dark:hover:text-[#d4af37] transition-colors cursor-pointer shadow-sm"
              >
                {theme === 'dark' ? (
                  <SunIcon className="w-4 h-4 text-[#d4af37]" />
                ) : (
                  <MoonIcon className="w-4 h-4 text-slate-700" />
                )}
              </button>

              {/* Primary Action Button */}
              <button 
                onClick={() => handleOpenModal('case', 'Emergency Case Intake')}
                className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-slate-900 to-black dark:from-[#d4af37] dark:to-amber-500 text-white dark:text-black px-4 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase font-mono shadow-lg transition-transform hover:scale-105 cursor-pointer"
              >
                <LockIcon className="w-4 h-4" />
                <span>Register Evidence</span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 3. HERO SECTION: 360 RADAR & LIVE WAR ROOM TERMINAL                       */}
      {/* ========================================================================= */}
      <section id="radar-hero" className="relative py-16 lg:py-24 border-b border-slate-200 dark:border-[#1e335a] overflow-hidden dark:bg-[#030509] bg-slate-100">
        
        {/* Radar Canvas Background */}
        <canvas ref={radarCanvasRef} className="absolute inset-0 w-full h-full pointer-events-auto opacity-35 dark:opacity-45" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Mission Proposition */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-500/50 text-xs font-mono shadow-lg">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                <span className="font-bold text-red-400 tracking-wider uppercase">THREAT INTELLIGENCE & DFIR WAR ROOM</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                When National Digital Infrastructure Is Targeted, We Extract Court-Admissible Truth.
              </h1>

              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-sans max-w-2xl">
                VFRA deploys deep forensic memory extraction, telecom IPDR attribution, and autonomous darknet intelligence engines for State Police Forces, Cyber Crime Units, and Judicial Benches. Every byte preserved under ISO/IEC 27037 with statutory Section 63 BSA compliance.
              </p>

              {/* Live Metric HUD Grid */}
              <div className="p-3.5 rounded-xl bg-white/80 dark:bg-[#0f1b33]/90 border border-slate-200 dark:border-[#1e335a] backdrop-blur-md grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div>
                  <span className="text-slate-500 block text-[10px]">RADAR SWEEP STATUS</span>
                  <span className="text-emerald-500 font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    ACTIVE (360° LEA)
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">EVIDENCE INTEGRITY</span>
                  <span className="text-cyan-400 font-bold">100% UNBROKEN</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-slate-500 block text-[10px]">CRIMINAL CODE</span>
                  <span className="text-[#d4af37] font-bold">BSA 2023 / BNSS</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button 
                  onClick={() => handleOpenModal('case', 'Hero Intake')}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider font-mono shadow-xl transition-all flex items-center gap-2 cursor-pointer"
                >
                  <ShieldIcon className="w-4 h-4" />
                  <span>Initiate Evidence Intake Docket</span>
                </button>
                <a 
                  href="#platforms" 
                  className="bg-slate-900 dark:bg-[#0b1324] hover:bg-slate-800 text-white px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider font-mono border border-slate-700 dark:border-[#1e335a] shadow-md transition-all flex items-center gap-2"
                >
                  <TerminalIcon className="w-4 h-4 text-[#d4af37]" />
                  <span>Inspect InvestiGate Engine</span>
                </a>
              </div>

              <div className="text-[11px] text-slate-500 font-mono flex items-center gap-2">
                <LockIcon className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Faraday Vault Isolation • Zero Write Signals • Dual Bitstream Cloning</span>
              </div>

            </div>

            {/* Right Column: Forensic Laser Terminal */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-[#0b1324] border border-slate-700 dark:border-[#1e335a] shadow-2xl overflow-hidden">
                
                {/* Volumetric Laser Scanner Sweep Effect */}
                <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_15px_#ef4444] animate-pulse z-20 pointer-events-none" />

                {/* Terminal Header */}
                <div className="bg-black/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-600"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                    <span className="text-xs font-mono font-bold text-slate-300 ml-2">VFRA-CYBER-WAR-ROOM // HUB_01</span>
                  </div>
                  <span className="text-[10px] font-mono text-red-400 bg-red-950/80 px-2 py-0.5 rounded border border-red-800 animate-pulse">
                    INTERCEPTING
                  </span>
                </div>

                {/* Live Console Feed */}
                <div className="p-5 font-mono text-xs text-slate-300 space-y-3 bg-[#070b13]/95 min-h-[360px] flex flex-col justify-between">
                  <div className="space-y-2 text-[11px]">
                    <div className="text-slate-500">// INITIALIZING WRITE-BLOCK PROTOCOL...</div>
                    <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                      <span>PHYSICAL DISK WRITE-PROTECT ENGAGED</span>
                    </div>

                    <div className="bg-black/70 p-2.5 rounded border border-slate-800 space-y-1">
                      <div className="text-slate-400 text-[10px]">CURRENT BITSTREAM SHA-256 DIGEST:</div>
                      <div className="text-[#d4af37] text-[10px] font-bold truncate">
                        {liveHash}
                      </div>
                    </div>

                    <div className="bg-red-950/30 p-2.5 rounded border border-red-900/60 space-y-1">
                      <div className="text-red-400 text-[10px] font-bold flex items-center justify-between">
                        <span>TELEGRAM SYNDICATE PACKET TRACE</span>
                        <span className="text-red-500 animate-ping">●</span>
                      </div>
                      <div className="text-slate-300 text-[10px]">Source IP: 185.220.101.45 (Tor Exit Node)</div>
                      <div className="text-cyan-400 text-[10px]">Mapped Target: Task Fraud Mule Cluster #IND-882</div>
                    </div>

                    <div className="p-2 rounded bg-slate-900/80 border border-slate-800 text-[10px] text-slate-400">
                      <span>BNSS Section 94 Notice Auto-Populated: </span>
                      <span className="text-white font-bold">READY FOR SIGNATURE</span>
                    </div>
                  </div>

                  {/* Terminal Lookup Form */}
                  <div className="pt-3 border-t border-slate-800">
                    <div className="text-[10px] text-slate-500 mb-1.5">QUERY ACTIVE POLICE EVIDENCE VAULT:</div>
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        value={docketNumber} 
                        onChange={(e) => setDocketNumber(e.target.value)} 
                        placeholder="Case Ref..." 
                        className="w-full bg-black border border-slate-700 rounded px-2.5 py-1.5 text-xs text-cyan-300 font-mono focus:outline-none focus:border-[#d4af37]"
                      />
                      <button 
                        onClick={() => {
                          handleOpenModal('track');
                          setTrackingFound(true);
                        }} 
                        className="bg-red-600 hover:bg-red-700 text-white font-bold px-3 py-1.5 rounded text-xs uppercase cursor-pointer"
                      >
                        Examine
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-black/90 px-4 py-2 border-t border-slate-800 flex justify-between items-center text-[10px] font-mono text-slate-500">
                  <span>Security Level: Judicial Admissible</span>
                  <span className="text-emerald-400">Zero Cloud Leak</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. PROPRIETARY PLATFORMS (InvestiGate & VFRA-TTI)                          */}
      {/* ========================================================================= */}
      <section id="platforms" className="py-20 bg-white dark:bg-[#070b13] border-b border-slate-200 dark:border-[#1e335a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                PROPRIETARY STATE-GRADE ARSENAL
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mt-1">
                InvestiGate & VFRA-TTI Platforms
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-2 font-mono">
                Developed in-house to convert complex petabytes of call records, IPDR dumps, and encrypted darknet syndicates into courtroom-proof convictions.
              </p>
            </div>

            {/* Platform Tab Switcher */}
            <div className="inline-flex p-1.5 rounded-xl bg-slate-100 dark:bg-[#0f1b33] border border-slate-300 dark:border-[#1e335a] font-mono text-xs">
              <button 
                onClick={() => setActivePlatform('investigate')}
                className={`px-5 py-2.5 rounded-lg font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  activePlatform === 'investigate'
                    ? 'bg-slate-900 text-white dark:bg-[#d4af37] dark:text-black shadow-md'
                    : 'text-slate-700 dark:text-slate-300 hover:text-[#d4af37]'
                }`}
              >
                <CrosshairIcon className="w-4 h-4" />
                <span>InvestiGate (Telecom & Banking)</span>
              </button>
              <button 
                onClick={() => setActivePlatform('tti')}
                className={`px-5 py-2.5 rounded-lg font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  activePlatform === 'tti'
                    ? 'bg-slate-900 text-white dark:bg-[#d4af37] dark:text-black shadow-md'
                    : 'text-slate-700 dark:text-slate-300 hover:text-[#d4af37]'
                }`}
              >
                <RadioIcon className="w-4 h-4" />
                <span>VFRA-TTI (Encrypted Crime)</span>
              </button>
            </div>
          </div>

          {/* Platform Tab Contents */}
          {activePlatform === 'investigate' ? (
            <div className="bg-slate-50 dark:bg-[#0b1324] rounded-2xl border border-slate-300 dark:border-[#1e335a] p-6 sm:p-8 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-cyan-400 border border-blue-300 dark:border-blue-800 text-[11px] font-mono font-bold">
                    <TerminalIcon className="w-3.5 h-3.5" />
                    <span>TELECOM, IPDR & MULE FUND FLOW ENGINE</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                    InvestiGate: Multi-Operator CDR, IPDR & Fund-Tracing Matrix
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Eliminates hundreds of hours of manual Excel correlation. Consolidates heterogeneous dumps from Jio, Airtel, Vi, and BSNL with automatic common caller cross-matching, cell tower geo-fencing, and dynamic IPDR NAT port attribution down to the millisecond.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono">
                    <div className="p-3 bg-white dark:bg-[#0f1b33] rounded-lg border border-slate-200 dark:border-[#1e335a]">
                      <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                        <CrosshairIcon className="w-4 h-4 text-[#d4af37]" />
                        <span>Tower Dump Filtering</span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                        Isolates burner handsets hopping between base stations at the exact scene and time of offense.
                      </p>
                    </div>

                    <div className="p-3 bg-white dark:bg-[#0f1b33] rounded-lg border border-slate-200 dark:border-[#1e335a]">
                      <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                        <ScaleIcon className="w-4 h-4 text-[#d4af37]" />
                        <span>Layer-1 to Layer-5 Mule Mapping</span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                        Reconstructs victim transaction cascades across banks and instantly generates account freeze notices.
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <button 
                      onClick={() => handleOpenModal('briefing', 'InvestiGate Platform Demonstration')}
                      className="bg-slate-900 hover:bg-black dark:bg-[#d4af37] dark:hover:bg-amber-400 text-white dark:text-black font-mono font-bold px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-md"
                    >
                      <ShieldIcon className="w-4 h-4" />
                      <span>Request Law Enforcement Access</span>
                    </button>
                    <span className="text-xs text-slate-500 font-mono">Restricted strictly to Investigating Officers</span>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-black rounded-xl p-5 border border-slate-800 font-mono text-xs text-slate-300 space-y-3 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-[11px]">
                    <span className="text-cyan-400 font-bold">InvestiGate Analyzer Node</span>
                    <span className="text-emerald-400">STATUS: MATCHED</span>
                  </div>
                  <div className="text-[11px] space-y-1.5">
                    <div className="text-slate-500">// TOWER DUMP OVERLAP DETECTED</div>
                    <div className="text-white">Tower ID: 404-45-7102 (Nagpur Besa Junction)</div>
                    <div className="text-[#d4af37]">IMEI: 869102049182012 • Handset: Redmi Note 12</div>
                    <div className="text-red-400">SIM Swap Event: 3 Handshakes within 24m of Crime</div>
                  </div>
                  <div className="p-2.5 bg-slate-950 rounded border border-slate-800 text-[10px] text-slate-400">
                    <span>Section 63 BSA Hash Manifest:</span>
                    <div className="text-cyan-400 truncate font-bold">sha256: 9b1e84a20b72183c501... (Signed)</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-slate-50 dark:bg-[#0b1324] rounded-2xl border border-slate-300 dark:border-[#1e335a] p-6 sm:p-8 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-100 dark:bg-red-950 text-red-800 dark:text-red-400 border border-red-300 dark:border-red-800 text-[11px] font-mono font-bold">
                    <RadioIcon className="w-3.5 h-3.5" />
                    <span>ENCRYPTED CHANNEL DE-ANONYMIZATION</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                    VFRA-TTI: Encrypted Threat Channel Intelligence
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Targeting cyber syndicates operating across Telegram, Signal, and dark web illicit forums. Automatically harvests message headers, de-anonymizes admin identities, cross-references mule bank UPI IDs, and alerts on POCSO/CSAM and contraband narcotics distribution.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono">
                    <div className="p-3 bg-white dark:bg-[#0f1b33] rounded-lg border border-slate-200 dark:border-[#1e335a]">
                      <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                        <CrosshairIcon className="w-4 h-4 text-red-400" />
                        <span>Syndicate Leader Profiling</span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                        Preserves historical handles, forward chains, and hidden creator IDs even after channel deletion.
                      </p>
                    </div>

                    <div className="p-3 bg-white dark:bg-[#0f1b33] rounded-lg border border-slate-200 dark:border-[#1e335a]">
                      <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                        <CheckCircleIcon className="w-4 h-4 text-red-400" />
                        <span>BNSS §94 Preservation Packets</span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                        Generates court-ready evidentiary dossiers with RFC 3161 cryptographic timestamps.
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <button 
                      onClick={() => handleOpenModal('briefing', 'VFRA-TTI Intelligence Clearance')}
                      className="bg-red-600 hover:bg-red-700 text-white font-mono font-bold px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-md"
                    >
                      <RadioIcon className="w-4 h-4" />
                      <span>Request Intelligence Clearance</span>
                    </button>
                    <span className="text-xs text-slate-500 font-mono">Restricted strictly to Investigating Officers</span>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-black rounded-xl p-5 border border-slate-800 font-mono text-xs text-slate-300 space-y-3 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-[11px]">
                    <span className="text-red-400 font-bold">VFRA-TTI Darknet Intercept</span>
                    <span className="text-[#d4af37]">DE-ANONYMIZED</span>
                  </div>
                  <div className="text-[11px] space-y-1.5">
                    <div className="text-slate-500">// TARGET TASK FRAUD NETWORK</div>
                    <div className="text-white">Channel: "VIP Forex & Part Time Rewards"</div>
                    <div className="text-cyan-400">Admin UID: 601920194 (@king_payout_mule)</div>
                    <div className="text-emerald-400">Flagged Mule Account: Axis Bank #918020019284</div>
                  </div>
                  <div className="p-2.5 bg-slate-950 rounded border border-slate-800 text-[10px] text-slate-400">
                    <span>Evidentiary Dossier #TTI-PKG-491</span>
                    <div className="text-red-400 truncate font-bold">SHA-256 Validated • Courtroom Admissible</div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. LABORATORY EXAMINATION MATRIX                                          */}
      {/* ========================================================================= */}
      <section id="lab-matrix" className="py-20 bg-slate-50 dark:bg-[#030509] border-b border-slate-200 dark:border-[#1e335a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37] font-bold">CENTRAL LABORATORY MATRIX</span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mt-1">
              Specialized Digital Forensics Services
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-2 font-mono">
              Executed in air-gapped cleanrooms equipped with Cellebrite UFED, Magnet AXIOM, EnCase, FTK, and hardware write-blocking bridges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LAB_SERVICES.map((srv) => {
              const IconComp = srv.icon;
              return (
                <div 
                  key={srv.id} 
                  className="bg-white dark:bg-[#0b1324] p-6 rounded-xl border border-slate-200 dark:border-[#1e335a] shadow-md flex flex-col justify-between hover:border-[#d4af37] transition-colors"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-cyan-400 flex items-center justify-center mb-4">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="text-[10px] font-mono text-[#d4af37] font-bold uppercase">{srv.tag}</div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1">{srv.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs mt-2 leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs font-mono">
                    <span className="text-slate-500">{srv.std}</span>
                    <button 
                      onClick={() => handleOpenModal('case', srv.title)}
                      className="font-bold text-[#d4af37] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      Register Exhibit <ChevronRightIcon className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. ACOUSTIC SPECTROGRAM & VOICE BIOMETRICS                                */}
      {/* ========================================================================= */}
      <section id="audio-wave" className="py-20 bg-white dark:bg-[#070b13] border-b border-slate-200 dark:border-[#1e335a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">
                ACOUSTIC BIOMETRICS & FORENSIC LAB
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                Forensic Voiceprint & Synthetic Audio Detection
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                In extortion, honey-trap frauds, and CEO spoofing cases, audio evidence is subjected to spectrographic formant examination. We distinguish authentic human vocal tract resonances from generative AI clones.
              </p>

              <div className="space-y-2 font-mono text-xs">
                <div className="p-2.5 rounded bg-slate-50 dark:bg-[#0b1324] border border-slate-200 dark:border-[#1e335a] flex justify-between items-center">
                  <span className="text-slate-500">SPECTROGRAPH SAMPLING:</span>
                  <span className="text-cyan-400 font-bold">96 kHz / 24-Bit Linear PCM</span>
                </div>
                <div className="p-2.5 rounded bg-slate-50 dark:bg-[#0b1324] border border-slate-200 dark:border-[#1e335a] flex justify-between items-center">
                  <span className="text-slate-500">AI DEEPFAKE DETECTION CONFIDENCE:</span>
                  <span className="text-emerald-400 font-bold">99.4% Formant Match</span>
                </div>
              </div>

              <div className="pt-2">
                <button 
                  onClick={() => setAudioSpeedMode(audioSpeedMode === 'normal' ? 'burst' : 'normal')}
                  className="bg-slate-900 dark:bg-[#d4af37] text-white dark:text-black font-mono font-bold px-4 py-2 rounded-lg text-xs uppercase cursor-pointer"
                >
                  {audioSpeedMode === 'normal' ? 'Simulate Voice Intercept Pulse' : 'Return to Standard Sampling'}
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-black rounded-xl p-5 border border-slate-800 shadow-2xl relative">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                    <span className="text-slate-300 font-bold">LIVE ACOUSTIC SPECTRAL OSCILLOGRAPH</span>
                  </div>
                  <span className="text-[#d4af37] text-[11px]">
                    {audioSpeedMode === 'burst' ? 'BURST RATE: 96 kHz EXTRACT' : 'SAMPLE: 44.1 kHz'}
                  </span>
                </div>

                {/* React Ref Canvas */}
                <canvas ref={audioCanvasRef} className="w-full h-48 rounded bg-slate-950 border border-slate-800/80" />

                <div className="mt-3 flex justify-between items-center text-[10px] font-mono text-slate-500">
                  <span>Formant Band: F1 (700Hz) • F2 (1800Hz) • F3 (2700Hz)</span>
                  <span className="text-emerald-400">Authentic Human Tract Verified</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. 6-STAGE CHAIN OF CUSTODY TIMELINE                                      */}
      {/* ========================================================================= */}
      <section id="custody" className="py-20 bg-slate-50 dark:bg-[#030509] border-b border-slate-200 dark:border-[#1e335a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37] font-bold">
              EVIDENTIARY INTEGRITY PIPELINE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mt-1">
              6-Stage Evidentiary Chain of Custody
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-2 font-mono">
              Governed under ISO/IEC 27037:2012 guidelines. Preserving evidence from crime scene seizure through to final High Court deposition.
            </p>
          </div>

          {/* Stepper Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8 font-mono">
            {CUSTODY_STEPS.map((step, idx) => (
              <button 
                key={step.num}
                onClick={() => setActiveCustodyStep(idx)}
                className={`p-3 rounded-lg text-left transition-all cursor-pointer ${
                  activeCustodyStep === idx
                    ? 'bg-slate-900 text-white dark:bg-[#d4af37] dark:text-black border border-slate-300 dark:border-[#d4af37]'
                    : 'bg-white dark:bg-[#0b1324] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#1e335a] hover:bg-slate-100'
                }`}
              >
                <div className={`text-[10px] font-bold ${activeCustodyStep === idx ? 'opacity-80' : 'text-slate-500'}`}>
                  STAGE {step.num}
                </div>
                <div className="text-xs font-bold mt-0.5 truncate">{step.title.split(' ')[0]} {step.title.split(' ')[1]}</div>
              </button>
            ))}
          </div>

          {/* Active Step Panel */}
          <div className="bg-white dark:bg-[#0b1324] rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-[#1e335a] shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-bold bg-blue-100 dark:bg-blue-950 text-blue-900 dark:text-cyan-400 px-2.5 py-0.5 rounded border border-blue-300 dark:border-blue-800">
                    {CUSTODY_STEPS[activeCustodyStep].badge}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    {CUSTODY_STEPS[activeCustodyStep].std}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {CUSTODY_STEPS[activeCustodyStep].title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {CUSTODY_STEPS[activeCustodyStep].desc}
                </p>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 rounded bg-slate-50 dark:bg-[#0f1b33] border border-slate-200 dark:border-[#1e335a]">
                    <span className="text-slate-400 block text-[10px]">DOCUMENTARY DELIVERABLE</span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {CUSTODY_STEPS[activeCustodyStep].deliverable}
                    </span>
                  </div>
                  <div className="p-3 rounded bg-slate-50 dark:bg-[#0f1b33] border border-slate-200 dark:border-[#1e335a]">
                    <span className="text-slate-400 block text-[10px]">PRESERVATION TOOLING</span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {CUSTODY_STEPS[activeCustodyStep].tools}
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 bg-slate-100 dark:bg-[#0f1b33] rounded-xl p-5 border border-slate-200 dark:border-[#1e335a] font-mono text-xs space-y-3">
                <div className="font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2 flex justify-between items-center">
                  <span>Custody Verification Audit</span>
                  <span className="text-emerald-500 font-bold text-[10px]">VERIFIED</span>
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-300 space-y-1.5">
                  <div>• Biometric Lab Vault Access</div>
                  <div>• Environmental Temperature Control</div>
                  <div>• Simultaneous SHA-256 Dual Verification</div>
                  <div>• Non-Destructive Write-Block Bridges</div>
                </div>
                <button 
                  onClick={() => handleOpenModal('case', CUSTODY_STEPS[activeCustodyStep].title)}
                  className="w-full mt-2 bg-slate-900 dark:bg-[#d4af37] hover:bg-black dark:hover:bg-amber-400 text-white dark:text-black py-2.5 rounded-lg text-xs font-bold uppercase transition-all cursor-pointer"
                >
                  Initiate Inward Intake
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. STATUTORY BHARATIYA SAKSHYA ADHINIYAM (BSA 2023 §63)                    */}
      {/* ========================================================================= */}
      <section id="bsa-law" className="py-20 bg-white dark:bg-[#070b13] border-b border-slate-200 dark:border-[#1e335a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-100 dark:bg-blue-950 text-blue-900 dark:text-cyan-400 border border-blue-200 dark:border-blue-800 text-[11px] font-mono font-bold">
                <ScaleIcon className="w-3.5 h-3.5" />
                <span>STATUTORY INDIAN LEGAL FRAMEWORK</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight">
                Bharatiya Sakshya Adhiniyam, 2023 (§63) & BNSS 2023 (§94 / §106)
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                Under India's overhauled criminal legal architecture replacing the Indian Evidence Act, 1872 and CrPC 1973, electronic evidence must satisfy rigorous statutory authenticity benchmarks. VFRA certificates are engineered specifically to survive judicial cross-examination.
              </p>

              <div className="space-y-2.5 font-mono text-xs">
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-[#0b1324] border border-slate-200 dark:border-[#1e335a] flex items-start gap-3">
                  <span className="font-bold text-[#d4af37] shrink-0">BSA §63:</span>
                  <span className="text-slate-700 dark:text-slate-300">
                    Mandates exact identification of computer device conditions, reproduction hashes, and certifying officer qualifications for electronic records.
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-[#0b1324] border border-slate-200 dark:border-[#1e335a] flex items-start gap-3">
                  <span className="font-bold text-[#d4af37] shrink-0">BNSS §94/106:</span>
                  <span className="text-slate-700 dark:text-slate-300">
                    Enforces statutory production requisitions issued to Telecom Service Providers and digital intermediaries.
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-black text-white p-7 rounded-2xl border border-slate-700 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-slate-700 pb-3 mb-4">
                <div>
                  <span className="text-[10px] text-[#d4af37] font-mono font-bold uppercase">Court Exhibit Docket</span>
                  <h4 className="font-serif text-base font-bold text-white mt-0.5">Section 63 BSA Statutory Certificate</h4>
                </div>
                <ScaleIcon className="w-6 h-6 text-[#d4af37]" />
              </div>

              <p className="text-slate-300 text-xs italic font-serif leading-relaxed">
                "We hereby solemnly attest that the electronic exhibit was cloned via certified hardware write-blockers without bitstream divergence. Dual SHA-256 and MD5 hashes verify identical mathematical certainty..."
              </p>

              <div className="mt-6 pt-4 border-t border-slate-700 flex flex-col gap-2">
                <button 
                  onClick={() => handleOpenModal('verify')}
                  className="w-full bg-[#d4af37] hover:bg-amber-400 text-black py-2.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <CheckCircleIcon className="w-4 h-4" />
                  <span>Verify Existing Certificate Online</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. 24/7 INCIDENT RESPONSE DESK                                            */}
      {/* ========================================================================= */}
      <section className="py-20 bg-slate-50 dark:bg-[#030509] border-b border-slate-200 dark:border-[#1e335a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-gradient-to-r from-[#0b1324] via-slate-900 to-black text-white rounded-2xl p-8 lg:p-12 border-2 border-[#d4af37]/40 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-950/80 text-red-400 border border-red-800 text-xs font-mono font-bold">
                  <PhoneCallIcon className="w-3.5 h-3.5" />
                  <span>24/7 FORENSIC RESPONSE DESK</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  Central Forensic Laboratory & Requisitions Desk
                </h2>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl">
                  Are you an Investigating Officer requiring urgent hardware extraction, or an enterprise facing an active ransomware extortion event? Connect immediately with our Lead Examiner on duty.
                </p>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="bg-black/60 p-3.5 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">24/7 EMERGENCY HELPLINE</span>
                    <a href="tel:+919511957687" className="text-white hover:text-[#d4af37] font-bold text-sm mt-0.5 inline-block">
                      +91 95119 57687
                    </a>
                  </div>
                  <div className="bg-black/60 p-3.5 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">CENTRAL LAB EMAIL</span>
                    <a href="mailto:contact@vigilantforensic.com" className="text-white hover:text-[#d4af37] font-bold text-xs mt-0.5 inline-block truncate">
                      contact@vigilantforensic.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-3 font-mono">
                <button 
                  onClick={() => handleOpenModal('case', '24/7 Desk Requisition')}
                  className="w-full py-3.5 px-5 bg-[#d4af37] hover:bg-amber-400 text-black font-bold rounded-lg text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <LockIcon className="w-4 h-4" />
                  <span>Submit Evidence Docket</span>
                </button>
                <button 
                  onClick={() => handleOpenModal('briefing', 'LEA Institutional Demo')}
                  className="w-full py-3 px-5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-xs uppercase tracking-wider transition-all border border-slate-700 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShieldIcon className="w-4 h-4 text-[#d4af37]" />
                  <span>Request LEA Briefing</span>
                </button>
                <button 
                  onClick={() => handleOpenModal('track')}
                  className="w-full py-3 px-5 bg-black/80 hover:bg-black text-slate-300 font-semibold rounded-lg text-xs tracking-wider transition-all border border-slate-700 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <SearchIcon className="w-4 h-4 text-cyan-400" />
                  <span>Track Existing Case Docket</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. OFFICIAL INSTITUTIONAL FOOTER                                         */}
      {/* ========================================================================= */}
      <footer className="bg-black text-slate-400 text-xs border-t border-slate-800 pt-16 pb-12 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
            
            {/* Col 1: Brand Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white">
                <VfraBrandLogo className="w-8 h-10" />
                <div>
                  <span className="font-serif font-black text-sm tracking-[0.2em] uppercase text-white block">
                    VIGILANT
                  </span>
                  <span className="text-[8px] font-sans text-slate-400 uppercase tracking-wider block">
                    FORENSIC RESEARCH & ANALYTICS
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed pt-1">
                Vigilant Forensic Research and Analytics Pvt. Ltd. is an indigenous digital forensics and cyber intelligence institution.
              </p>

              <div className="pt-1 text-[11px] font-mono text-slate-300 space-y-1">
                <div>CIN: <strong className="text-white">U69100PN2025PTC250064</strong></div>
                <div>GSTIN: <strong className="text-white">27AALCV7316E1Z5</strong></div>
                <div>DPIIT Recognition: <strong className="text-[#d4af37]">#DIPP190132</strong></div>
              </div>
            </div>

            {/* Col 2: Software Systems */}
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono mb-3">
                Investigation Software
              </h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#platforms" className="hover:text-white transition-colors">InvestiGate Cybercrime Suite</a></li>
                <li><a href="#platforms" className="hover:text-white transition-colors">VFRA-TTI Telegram Threat Intel</a></li>
                <li><a href="#platforms" className="hover:text-white transition-colors">Telecom CDR / Tower Dump Matrix</a></li>
                <li><a href="#platforms" className="hover:text-white transition-colors">Dynamic IPDR NAT Attributor</a></li>
                <li><a href="#platforms" className="hover:text-white transition-colors">BNSS 2023 Notice Generator</a></li>
              </ul>
            </div>

            {/* Col 3: Laboratory */}
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono mb-3">
                Laboratory Capabilities
              </h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#lab-matrix" className="hover:text-white transition-colors">Mobile & Chip-off Memory Recovery</a></li>
                <li><a href="#lab-matrix" className="hover:text-white transition-colors">Cryptocurrency Peel Chain Tracing</a></li>
                <li><a href="#audio-wave" className="hover:text-white transition-colors">Voiceprint & Acoustic Authentication</a></li>
                <li><a href="#bsa-law" className="hover:text-white transition-colors">Section 63 BSA 2023 Certifications</a></li>
                <li><a href="#lab-matrix" className="hover:text-white transition-colors">Enterprise Incident Response (DFIR)</a></li>
              </ul>
            </div>

            {/* Col 4: Registered Office */}
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono mb-3">
                Registered Office & HQ
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Plot No. 5, Akhil Vishwa Bharti Co-Op. Society,<br/>
                Besa - Ghogli Road, Near Revati Nagar, Besa,<br/>
                Nagpur, Maharashtra - 440037, India
              </p>
              <div className="mt-3 text-xs font-mono space-y-1 text-slate-300">
                <div>24/7 Desk: <strong className="text-white">+91 95119 57687</strong></div>
                <div>Email: <strong className="text-white">contact@vigilantforensic.com</strong></div>
                <div>Web: <strong className="text-white">www.vigilantforensic.com</strong></div>
              </div>
            </div>

          </div>

          <div className="pt-8 pb-4 text-[11px] text-slate-500 leading-relaxed border-b border-slate-800 font-mono">
            <strong className="text-slate-400">STATUTORY MANDATE & LAWFUL USE DISCLAIMER:</strong> Vigilant Forensic Research & Analytics Pvt. Ltd. provides software, research, and laboratory examination services strictly subject to lawful authorization, applicable statutory provisions including the Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023, the Bharatiya Sakshya Adhiniyam (BSA), 2023, and the Information Technology Act, 2000. Access to proprietary software is restricted exclusively to authorized police agencies, state cyber cells, and certified legal officers.
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
            <div>
              © 2026 Vigilant Forensic Research & Analytics Pvt. Ltd. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-slate-400">Standard Operating Procedures</a>
              <a href="#" className="hover:text-slate-400">Chain of Custody Guarantee</a>
              <a href="#" className="hover:text-slate-400">Privacy Undertaking</a>
            </div>
          </div>

        </div>
      </footer>

      {/* ========================================================================= */}
      {/* 11. INTERACTIVE MODALS                                                    */}
      {/* ========================================================================= */}

      {/* MODAL: Evidence Inward Docket Intake */}
      {activeModal === 'case' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-white dark:bg-[#0f1b33] w-full max-w-2xl rounded-2xl border border-slate-300 dark:border-[#1e335a] max-h-[92vh] overflow-y-auto relative shadow-2xl p-6 sm:p-8">
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 cursor-pointer"
            >
              <XIcon className="w-5 h-5" />
            </button>

            <div className="border-b border-slate-200 dark:border-[#1e335a] pb-4 mb-5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-black border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
                <LockIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white">
                  Evidence Inward Docket Registry
                </h3>
                <p className="text-xs text-slate-500 font-mono">
                  Authorized intake for Law Enforcement & Corporate Counsels
                </p>
              </div>
            </div>

            {!submittedDocketId ? (
              <form onSubmit={handleDocketSubmit} className="space-y-4 text-xs font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Submitting Agency / Police Unit / Firm *
                    </label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Cyber Crime Police Station / High Court Counsel" 
                      className="w-full bg-slate-50 dark:bg-[#0b1324] border border-slate-300 dark:border-[#1e335a] rounded-lg px-3 py-2 text-slate-900 dark:text-white focus:outline-none focus:border-[#d4af37] font-mono"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Investigating Officer / Advocate Name *
                    </label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Insp. R. Verma / Adv. S. Deshmukh" 
                      className="w-full bg-slate-50 dark:bg-[#0b1324] border border-slate-300 dark:border-[#1e335a] rounded-lg px-3 py-2 text-slate-900 dark:text-white focus:outline-none focus:border-[#d4af37] font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      FIR / Crime Reference / Case Number *
                    </label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. CR No. 194/2026 u/s 66D IT Act" 
                      className="w-full bg-slate-50 dark:bg-[#0b1324] border border-slate-300 dark:border-[#1e335a] rounded-lg px-3 py-2 text-slate-900 dark:text-white focus:outline-none focus:border-[#d4af37] font-mono"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Official Contact Phone Number *
                    </label>
                    <input 
                      type="tel" 
                      required 
                      defaultValue="+91 "
                      className="w-full bg-slate-50 dark:bg-[#0b1324] border border-slate-300 dark:border-[#1e335a] rounded-lg px-3 py-2 text-slate-900 dark:text-white focus:outline-none focus:border-[#d4af37] font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Forensic Examination Domain *
                    </label>
                    <select 
                      defaultValue={modalContext || "Mobile Phone Physical/Logical Extraction"}
                      className="w-full bg-slate-50 dark:bg-[#0b1324] border border-slate-300 dark:border-[#1e335a] rounded-lg px-3 py-2 text-slate-900 dark:text-white focus:outline-none focus:border-[#d4af37] font-mono"
                    >
                      <option value="Mobile Phone Physical/Logical Extraction">Mobile Phone Extraction & Chip-Off</option>
                      <option value="Section 63 BSA 2023 / 65B Certification">Section 63 BSA 2023 / 65B Certification</option>
                      <option value="Cryptocurrency & Mule Account Tracing">Cryptocurrency / Blockchain Trace</option>
                      <option value="Audio Voiceprint & Video Authenticity">Audio Voiceprint & Video Authenticity</option>
                      <option value="Corporate DFIR & Breach Investigation">Enterprise Breach / Ransomware Response</option>
                      <option value="InvestiGate / TTI Software Licensing">Software Platform Deployment</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Urgency Triage *
                    </label>
                    <select className="w-full bg-slate-50 dark:bg-[#0b1324] border border-slate-300 dark:border-[#1e335a] rounded-lg px-3 py-2 text-slate-900 dark:text-white focus:outline-none focus:border-[#d4af37] font-mono">
                      <option value="CRITICAL">Critical (24-48 Hours - Arrest / Court Bail)</option>
                      <option value="HIGH">High (3-5 Days - Chargesheet Deadline)</option>
                      <option value="STANDARD">Standard (7-10 Days - Lab Queue)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Inventory of Digital Exhibits (Make, Model, Serial, Current Seals)
                  </label>
                  <textarea 
                    rows="3" 
                    placeholder="Provide make/model of phones, hard drives, or cloud tokens, with current sealing tag numbers..." 
                    className="w-full bg-slate-50 dark:bg-[#0b1324] border border-slate-300 dark:border-[#1e335a] rounded-lg px-3 py-2 text-slate-900 dark:text-white focus:outline-none focus:border-[#d4af37] font-mono"
                  />
                </div>

                <div className="p-3 bg-slate-100 dark:bg-black/50 rounded-lg border border-slate-300 dark:border-[#1e335a] text-[11px] text-slate-600 dark:text-slate-400 flex items-start gap-2 font-mono">
                  <input type="checkbox" required id="modalCustodyCheck" className="mt-0.5 rounded text-[#d4af37] focus:ring-0" />
                  <label htmlFor="modalCustodyCheck">
                    I certify that the exhibits described are submitted under lawful authorization and VFRA is authorized to execute forensic imaging under an unbroken chain of custody.
                  </label>
                </div>

                <div className="pt-2 flex justify-end gap-3 font-mono">
                  <button 
                    type="button" 
                    onClick={handleCloseModal}
                    className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-100 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="px-5 py-2 bg-[#d4af37] hover:bg-amber-400 text-black rounded-lg font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md cursor-pointer"
                  >
                    <CheckCircleIcon className="w-4 h-4" />
                    <span>Generate Inward Docket</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4 font-mono">
                <div className="w-12 h-12 rounded-full bg-emerald-950 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-700">
                  <CheckCircleIcon className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-white">
                  Evidence Docket Successfully Created
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Your secure evidence docket has been logged in the VFRA Central Forensic Ledger:
                </p>
                <div className="inline-block px-5 py-2.5 rounded-lg bg-slate-100 dark:bg-[#0b1324] border border-slate-300 dark:border-[#1e335a] text-base font-bold text-[#d4af37]">
                  {submittedDocketId}
                </div>
                <p className="text-[11px] text-slate-500">
                  The Senior Forensic Examiner on duty has been notified. Retain this ID for chain of custody verification.
                </p>
                <button 
                  onClick={handleCloseModal}
                  className="px-6 py-2 bg-[#d4af37] text-black rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  Acknowledge & Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODAL: Certificate Authenticity Validator */}
      {activeModal === 'verify' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-white dark:bg-[#0f1b33] w-full max-w-md rounded-2xl border border-slate-300 dark:border-[#1e335a] p-6 relative shadow-2xl font-mono">
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 cursor-pointer"
            >
              <XIcon className="w-5 h-5" />
            </button>

            <div className="border-b border-slate-200 dark:border-[#1e335a] pb-3 mb-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-black border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
                <ScaleIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-slate-900 dark:text-white">
                  Certificate Authenticity Validator
                </h3>
                <p className="text-[11px] text-slate-500">Statutory Verification for Courts & LEAs</p>
              </div>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Enter Forensic Certificate Reference Number *
                </label>
                <input 
                  type="text" 
                  value={certQuery} 
                  onChange={(e) => setCertQuery(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-[#0b1324] border border-slate-300 dark:border-[#1e335a] rounded-lg px-3 py-2 text-slate-900 dark:text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <button 
                onClick={() => setCertVerified(true)}
                className="w-full bg-[#d4af37] hover:bg-amber-400 text-black py-2.5 rounded-lg font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <CheckCircleIcon className="w-4 h-4" />
                <span>Verify Statutory Authenticity</span>
              </button>

              {certVerified && (
                <div className="p-4 rounded-lg bg-slate-50 dark:bg-black/60 border border-emerald-500/50 space-y-2 text-[11px]">
                  <div className="flex items-center justify-between text-emerald-400 font-bold border-b border-slate-800 pb-2">
                    <span className="flex items-center gap-1.5">
                      <CheckCircleIcon className="w-4 h-4" />
                      <span>AUTHENTIC & IN RECORD</span>
                    </span>
                    <span className="text-[10px] bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                      VALID
                    </span>
                  </div>
                  <div className="text-slate-300 space-y-1 pt-1">
                    <div><span className="text-slate-500">Standard:</span> Section 63 BSA 2023 / 65B Certificate</div>
                    <div><span className="text-slate-500">Jurisdiction:</span> Sessions Court / High Court</div>
                    <div><span className="text-slate-500">Bitstream Hash:</span> SHA-256 Validated Matching Image</div>
                    <div><span className="text-slate-500">Examiner Signoff:</span> Lead Examiner, VFRA Nagpur</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MODAL: Case Ledger Tracker */}
      {activeModal === 'track' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-white dark:bg-[#0f1b33] w-full max-w-md rounded-2xl border border-slate-300 dark:border-[#1e335a] p-6 relative shadow-2xl font-mono">
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 cursor-pointer"
            >
              <XIcon className="w-5 h-5" />
            </button>

            <div className="border-b border-slate-200 dark:border-[#1e335a] pb-3 mb-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-black border border-[#d4af37]/40 flex items-center justify-center text-cyan-400">
                <SearchIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-slate-900 dark:text-white">
                  Case Status Ledger Tracker
                </h3>
                <p className="text-[11px] text-slate-500">Real-time status for Investigating Officers</p>
              </div>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Enter Registered Docket Reference ID *
                </label>
                <input 
                  type="text" 
                  value={docketNumber} 
                  onChange={(e) => setDocketNumber(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-[#0b1324] border border-slate-300 dark:border-[#1e335a] rounded-lg px-3 py-2 text-slate-900 dark:text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <button 
                onClick={() => setTrackingFound(true)}
                className="w-full bg-[#d4af37] hover:bg-amber-400 text-black py-2.5 rounded-lg font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <TerminalIcon className="w-4 h-4" />
                <span>Query Secure Laboratory Ledger</span>
              </button>

              {trackingFound && (
                <div className="p-4 rounded-lg bg-slate-50 dark:bg-black/60 border border-slate-800 space-y-3 text-[11px]">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="font-bold text-white">DOCKET: #{docketNumber}</span>
                    <span className="text-[10px] bg-blue-950 text-cyan-400 px-2 py-0.5 rounded font-bold">
                      STAGE 4 OF 6
                    </span>
                  </div>

                  <div className="space-y-2 text-slate-300">
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                      <span>Stage 1: Evidence Inward & Photographic Log [Complete]</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                      <span>Stage 2: Write-Blocked Bitstream Image [Complete]</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                      <CheckCircleIcon className="w-3.5 h-3.5" />
                      <span>Stage 3: Hash Calculation SHA-256 [Complete]</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#d4af37] font-bold">
                      <ActivityIcon className="w-3.5 h-3.5 animate-pulse" />
                      <span>Stage 4: Deep Extraction & Artifact Carving [In Progress]</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800 text-slate-500 text-[10px]">
                    <div>Lead Examiner: Senior Digital Forensic Analyst</div>
                    <div>Estimated Completion: Within 24 Hours</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MODAL: Institutional Briefing */}
      {activeModal === 'briefing' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-white dark:bg-[#0f1b33] w-full max-w-md rounded-2xl border border-slate-300 dark:border-[#1e335a] p-6 relative shadow-2xl font-mono">
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 cursor-pointer"
            >
              <XIcon className="w-5 h-5" />
            </button>

            <div className="border-b border-slate-200 dark:border-[#1e335a] pb-3 mb-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-black border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
                <ShieldIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-slate-900 dark:text-white">
                  Law Enforcement Briefing
                </h3>
                <p className="text-[11px] text-slate-500">
                  {modalContext || 'Restricted Access for Police Cyber Cells & LEAs'}
                </p>
              </div>
            </div>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                setSubmittedDocketId('BRIEFING_ACK');
              }} 
              className="space-y-4 text-xs font-sans"
            >
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Police Unit / State Department Name *
                </label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Cyber Crime Cell, Nagpur / CID Maharashtra" 
                  className="w-full bg-slate-50 dark:bg-[#0b1324] border border-slate-300 dark:border-[#1e335a] rounded-lg px-3 py-2 text-slate-900 dark:text-white focus:outline-none focus:border-[#d4af37] font-mono"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Official Gov / Institutional Email *
                </label>
                <input 
                  type="email" 
                  required 
                  placeholder="officer@gov.in or official address" 
                  className="w-full bg-slate-50 dark:bg-[#0b1324] border border-slate-300 dark:border-[#1e335a] rounded-lg px-3 py-2 text-slate-900 dark:text-white focus:outline-none focus:border-[#d4af37] font-mono"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Contact Phone Number *
                </label>
                <input 
                  type="tel" 
                  required 
                  defaultValue="+91 "
                  className="w-full bg-slate-50 dark:bg-[#0b1324] border border-slate-300 dark:border-[#1e335a] rounded-lg px-3 py-2 text-slate-900 dark:text-white focus:outline-none focus:border-[#d4af37] font-mono"
                />
              </div>

              {submittedDocketId === 'BRIEFING_ACK' ? (
                <div className="text-center py-2 space-y-1 font-mono text-emerald-400">
                  <CheckCircleIcon className="w-6 h-6 mx-auto" />
                  <p className="font-bold text-xs">Request Logged with Director of LEA Relations</p>
                  <p className="text-[10px] text-slate-400">Session credentials dispatched within 4 operational hours.</p>
                </div>
              ) : (
                <button 
                  type="submit" 
                  className="w-full bg-[#d4af37] hover:bg-amber-400 text-black py-2.5 rounded-lg font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md font-mono"
                >
                  <TerminalIcon className="w-4 h-4" />
                  <span>Schedule Official Demonstration</span>
                </button>
              )}
            </form>
          </div>
        </div>
      )}

    </div>
  );
}