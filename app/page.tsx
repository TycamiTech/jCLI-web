"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/* ─────────────────────────────────────────────────────
   ICONS – stroke-only, monochrome, inline SVGs
   ───────────────────────────────────────────────────── */
function IconCopy({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function IconCheck({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconGitHub({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.42-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.5 11.5 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .32.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function IconStar({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--syntax-const)" }}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}

function IconTerminal({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  );
}

function IconZap({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  );
}

function IconHardDrive({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="12" x2="2" y2="12" />
      <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
      <line x1="6" y1="16" x2="6.01" y2="16" />
      <line x1="10" y1="16" x2="10.01" y2="16" />
    </svg>
  );
}

function IconShield({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function IconClock({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function IconMonitor({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

function IconLayers({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/>
      <polyline points="2 17 12 22 22 17"/>
      <polyline points="2 12 12 17 22 12"/>
    </svg>
  );
}

function IconArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  );
}

function IconDownload({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────
   COPY BUTTON COMPONENT
   ───────────────────────────────────────────────────── */
function CopyButton({ text, className = "" }: { text: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      className={`copy-btn ${className}`}
      aria-label={copied ? "Copied" : "Copy command"}
      title="Copy to clipboard"
    >
      <span aria-live="polite" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)" }}>
        {copied ? "Copied to clipboard" : ""}
      </span>
      {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
    </button>
  );
}

/* ─────────────────────────────────────────────────────
   FADE-IN ON SCROLL HOOK
   ───────────────────────────────────────────────────── */
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("visible");
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return ref;
}

function FadeIn({ children, className = "", style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useFadeIn();
  return (
    <div ref={ref} className={`fade-in ${className}`} style={style}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   SYNTAX HIGHLIGHT HELPER COMPONENTS
   ───────────────────────────────────────────────────── */
function Line({ n, children, highlight }: { n: number; children?: React.ReactNode; highlight?: boolean }) {
  const content = (
    <>
      <span className="line-number">{n}</span>
      {children}
      {"\n"}
    </>
  );
  if (highlight) {
    return <span className="highlight-line">{content}</span>;
  }
  return <>{content}</>;
}

function K({ children }: { children: React.ReactNode }) { return <span className="syn-kw">{children}</span>; }
function S({ children }: { children: React.ReactNode }) { return <span className="syn-str">{children}</span>; }
function F({ children }: { children: React.ReactNode }) { return <span className="syn-fn">{children}</span>; }
function N({ children }: { children: React.ReactNode }) { return <span className="syn-num">{children}</span>; }
function Cmt({ children }: { children: React.ReactNode }) { return <span className="syn-cmt">{children}</span>; }
function Cn({ children }: { children: React.ReactNode }) { return <span className="syn-const">{children}</span>; }
function T({ children }: { children: React.ReactNode }) { return <span className="syn-text">{children}</span>; }

/* ─────────────────────────────────────────────────────
   NAVBAR
   ───────────────────────────────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Lock body scroll and listen for Escape key when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: "Quickstart", href: "#quickstart" },
    { label: "Architecture", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "CLI Demo", href: "#terminal" },
    { label: "Windows GUI", href: "#windows-gui" },
    { label: "Benchmarks", href: "#benchmarks" },
    { label: "Deploy", href: "#deploy" },
  ];

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`} aria-label="Main navigation">
        <div className="nav-inner">
          <a href="#" className="nav-logo" aria-label="jCLI Home">
            <IconTerminal size={20} />
            <span>jCLI</span>
          </a>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-right">
            <a
              href="https://github.com/TycamiTech/jCLI-File-Sharing"
              className="nav-stars"
              aria-label="GitHub Repository"
              target="_blank"
              rel="noreferrer"
            >
              <IconGitHub size={14} />
              <span>GitHub</span>
            </a>
            <a href="#quickstart" className="btn-primary nav-drop-btn" style={{ padding: "8px 14px", fontSize: 13, whiteSpace: "nowrap" }}>
              Drop a File
            </a>

            <button
              className="nav-mobile-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <>
          <div className="mobile-nav-backdrop" onClick={() => setMobileMenuOpen(false)} />
          <div className="mobile-nav-drawer" role="dialog" aria-label="Menu Navigasi Mobile">
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="mobile-nav-item"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{item.label}</span>
                  <IconArrowRight size={14} />
                </a>
              ))}
            </div>

            <div className="mobile-nav-divider" />

            <a
              href="https://github.com/TycamiTech/jCLI-File-Sharing"
              className="mobile-nav-item"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <IconGitHub size={16} /> GitHub Source Code
              </span>
              <IconArrowRight size={14} />
            </a>

            <div style={{ marginTop: 14 }}>
              <a
                href="#quickstart"
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center", padding: "12px 16px", fontSize: 14 }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Drop a File Now <IconArrowRight size={14} />
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}

/* ─────────────────────────────────────────────────────
   HERO SECTION
   ───────────────────────────────────────────────────── */
function Hero() {
  const heroCode = `// Stream multipart file directly from socket to disk
// Constant RAM footprint — zero buffering in memory
part, err := mr.NextPart()
if err != nil { break }

safeFilename := sanitizeFilename(part.FileName())
dstPath := filepath.Join(dropDir, safeFilename)

dst, err := os.OpenFile(dstPath, os.O_CREATE|os.O_WRONLY|os.O_EXCL, 0644)
if err != nil { return err }
defer dst.Close()

// 32 KB chunk buffer: uploads a 1GB file in ~8MB RAM
buf := make([]byte, 32*1024)
written, err := io.CopyBuffer(dst, io.LimitReader(part, maxCap), buf)

// Generate instant clean URL link for curl clients
return fmt.Sprintf("%s/%s/%s", cfg.BaseURL, dropID, safeFilename)`;

  return (
    <section style={{ paddingTop: "clamp(36px, 8vw, 80px)", paddingBottom: "clamp(36px, 8vw, 80px)" }}>
      <div className="page-container">
        <div className="hero-grid">
          {/* Left: Headline & one-liners */}
          <div>
            <h1 className="h1" style={{ marginBottom: 20 }}>
              Ephemeral file drops for terminals.{" "}
              <span className="text-secondary-span">
                Zero dependencies. Stream gigabytes with constant memory.
              </span>
            </h1>

            <p className="body-text" style={{ marginBottom: 28, maxWidth: 540 }}>
              <strong>jCLI</strong> is a high-throughput, self-hosted file sharing daemon built purely with the Go standard library. 
              Upload via a simple <code>curl</code> command to get an instant direct link, or launch a full Windows GUI directly in RAM with zero installation.
            </p>

            <div className="hero-actions">
              <a href="#quickstart" className="btn-primary">
                Upload File via CLI <IconArrowRight size={14} />
              </a>
              <a href="#windows-gui" className="btn-secondary">
                <IconMonitor size={16} /> Zero-Install Windows GUI
              </a>
            </div>

            {/* Install / Run command */}
            <div className="install-block hero-install-block">
              <span className="install-prompt">$</span>
              <code className="install-command">curl -F &quot;file=@data.tar.gz&quot; http://103.130.16.107:8080/</code>
              <CopyButton text="curl -F &quot;file=@data.tar.gz&quot; http://103.130.16.107:8080/" />
            </div>
            <p className="small-text" style={{ marginTop: 8, color: "var(--text-tertiary)", fontSize: 12, fontFamily: "var(--font-mono)" }}>
              Direct URL output · Auto-purge in 2 hours · Resumable HTTP Range
            </p>
          </div>

          {/* Right: Code block showing zero-alloc streaming */}
          <div className="frame-outer">
            <div className="frame-inner">
              <div className="code-chrome">
                <span className="code-chrome-filename">stream.go (jCLI Core Engine)</span>
                <span className="code-chrome-lang">Go (Standard Library)</span>
                <CopyButton text={heroCode} />
              </div>
              <div style={{ position: "relative" }}>
                <pre className="code-content">
                  <code>
                    <Line n={1}><Cmt>{"// Stream multipart file directly from socket to disk"}</Cmt></Line>
                    <Line n={2}><Cmt>{"// Constant RAM footprint — zero buffering in memory"}</Cmt></Line>
                    <Line n={3}><T>part, err := mr.</T><F>NextPart</F><T>()</T></Line>
                    <Line n={4}><K>if</K> <T>err != </T><Cn>nil</Cn> <T>{"{ break }"}</T></Line>
                    <Line n={5}></Line>
                    <Line n={6}><T>safeFilename := </T><F>sanitizeFilename</F><T>(part.</T><F>FileName</F><T>())</T></Line>
                    <Line n={7}><T>dstPath := filepath.</T><F>Join</F><T>(dropDir, safeFilename)</T></Line>
                    <Line n={8}></Line>
                    <Line n={9}><T>dst, err := os.</T><F>OpenFile</F><T>(dstPath, os.O_CREATE|os.O_WRONLY|os.O_EXCL, </T><N>0644</N><T>)</T></Line>
                    <Line n={10}><K>if</K> <T>err != </T><Cn>nil</Cn> <T>{"{ return err }"}</T></Line>
                    <Line n={11}><K>defer</K> <T>dst.</T><F>Close</F><T>()</T></Line>
                    <Line n={12}></Line>
                    <Line n={13} highlight><Cmt>{"// 32 KB chunk buffer: uploads a 1GB file in ~8MB RAM"}</Cmt></Line>
                    <Line n={14}><T>buf := </T><F>make</F><T>([]</T><K>byte</K><T>, </T><N>32</N><T>*</T><N>1024</N><T>)</T></Line>
                    <Line n={15}><T>written, err := io.</T><F>CopyBuffer</F><T>(dst, io.</T><F>LimitReader</F><T>(part, maxCap), buf)</T></Line>
                    <Line n={16}></Line>
                    <Line n={17} highlight><Cmt>{"// Generate instant clean URL link for curl clients"}</Cmt></Line>
                    <Line n={18}><K>return</K> <T>fmt.</T><F>Sprintf</F><T>(</T><S>{'"%s/%s/%s"'}</S><T>, cfg.BaseURL, dropID, safeFilename)</T></Line>
                  </code>
                </pre>
                <div className="scroll-fade" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────
   QUICKSTART – Multi-platform command tabs
   ───────────────────────────────────────────────────── */
function Quickstart() {
  const [tab, setTab] = useState<"curl-up" | "curl-down" | "win-gui" | "bash-alias" | "build">("curl-up");
  const [sampleFile, setSampleFile] = useState("document.pdf");
  const samplePresets = ["document.pdf", "backup.tar.gz", "dataset.zip", "photo.png"];

  const commands: Record<string, { cmd: string; desc: string; label: string }> = {
    "curl-up": {
      label: "Upload (curl)",
      cmd: `curl -F "file=@${sampleFile}" http://103.130.16.107:8080/`,
      desc: "Upload any file straight from terminal. jCLI replies immediately with the plain download link.",
    },
    "curl-down": {
      label: "Download (curl)",
      cmd: "curl -O http://103.130.16.107:8080/7xK2b9a/document.pdf",
      desc: "Downloads directly preserving original filename. Supports resuming interrupted transfers via HTTP Range.",
    },
    "win-gui": {
      label: "Windows GUI (Zero-Install)",
      cmd: "irm http://103.130.16.107:8080/app | iex",
      desc: "Paste into PowerShell on any Windows PC. Launches a drag-and-drop desktop GUI directly in RAM.",
    },
    "bash-alias": {
      label: "Bash Helper (~/.bashrc)",
      cmd: "transfer() { curl --progress-bar -F \"file=@$1\" http://103.130.16.107:8080/; }",
      desc: "Add this 1-line alias to your shell to share files anytime by simply running: transfer myfile.zip",
    },
    "build": {
      label: "Compile Server (Go)",
      cmd: "CGO_ENABLED=0 go build -ldflags=\"-s -w\" -o jcli main.go",
      desc: "Compiles a self-contained ~9MB static binary with zero runtime or Cgo dependencies.",
    },
  };

  return (
    <section id="quickstart" className="section section-border">
      <FadeIn className="page-container" style={{ maxWidth: 680, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <h2 className="h2" style={{ marginBottom: 12 }}>One command. Ready to transfer.</h2>
          <p className="body-text" style={{ margin: "0 auto" }}>
            Works natively with standard HTTP clients. No accounts, no API tokens, no client binaries to install.
          </p>
        </div>

        <div className="pkg-tabs" style={{ justifyContent: "flex-start", scrollSnapType: "x mandatory", paddingBottom: 6 }}>
          {Object.entries(commands).map(([key, item]) => (
            <button
              key={key}
              className={`pkg-tab ${tab === key ? "active" : ""}`}
              onClick={() => setTab(key as typeof tab)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="install-block" style={{ minHeight: 52 }}>
          <span className="install-prompt">{tab === "win-gui" ? "PS >" : "$"}</span>
          <code className="install-command" key={tab + sampleFile}>
            {commands[tab].cmd}
          </code>
          <CopyButton text={commands[tab].cmd} />
        </div>

        {tab === "curl-up" && (
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <span style={{ fontSize: 12, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>Pilih contoh file:</span>
            {samplePresets.map((file) => (
              <button
                key={file}
                onClick={() => setSampleFile(file)}
                style={{
                  background: sampleFile === file ? "var(--bg-elevated)" : "transparent",
                  border: `1px solid ${sampleFile === file ? "var(--syntax-func)" : "var(--border-subtle)"}`,
                  color: sampleFile === file ? "var(--text-primary)" : "var(--text-secondary)",
                  padding: "4px 8px",
                  borderRadius: "var(--radius-tab)",
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  cursor: "pointer",
                }}
              >
                {file}
              </button>
            ))}
          </div>
        )}

        <p className="small-text" style={{ textAlign: "center", marginTop: 12, color: "var(--text-tertiary)" }}>
          {commands[tab].desc}
        </p>
      </FadeIn>
    </section>
  );
}

/* ─────────────────────────────────────────────────────
   HOW IT WORKS / ARCHITECTURE TABS
   ───────────────────────────────────────────────────── */
function HowItWorks() {
  const [tab, setTab] = useState(0);

  const tabs = [
    { label: "stream_upload.go", lang: "Go" },
    { label: "resumable_range.go", lang: "Go" },
    { label: "ttl_cleanup.go", lang: "Go" },
  ];

  return (
    <section id="how-it-works" className="section section-border">
      <FadeIn className="page-container">
        <div className="section-header">
          <div>
            <h2 className="h2">
              Three pillars of jCLI.{" "}
              <span className="text-secondary-span">
                Socket streaming, RFC 7233 range requests, and automatic disk TTL.
              </span>
            </h2>
          </div>
          <div>
            <p className="body-text">
              Engineered exclusively with the Go standard library (<code>net/http</code>, <code>mime/multipart</code>, <code>io</code>). 
              No ORMs, no heavy frameworks, and zero external go.mod packages.
            </p>
            <span className="section-index">1.0 Core Architecture →</span>
          </div>
        </div>

        <div className="frame-outer">
          <div className="frame-inner">
            <div className="tab-bar">
              {tabs.map((t, i) => (
                <button
                  key={t.label}
                  className={`tab-button ${tab === i ? "active" : ""}`}
                  onClick={() => setTab(i)}
                >
                  {t.label}
                </button>
              ))}
              <span style={{ marginLeft: "auto", padding: "10px 16px", fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-tertiary)" }}>
                {tabs[tab].lang}
              </span>
            </div>

            {/* Tab 0: Stream Upload */}
            <div className={`tab-content ${tab === 0 ? "active" : ""}`}>
              <div style={{ position: "relative" }}>
                <pre className="code-content" style={{ minHeight: 250 }}>
                  <code>
                    <Line n={1}><K>func</K> <F>handleUpload</F><T>(w http.ResponseWriter, r *http.Request, cfg Config) {"{"}</T></Line>
                    <Line n={2}><T>    mr, err := r.</T><F>MultipartReader</F><T>()</T></Line>
                    <Line n={3}><K>    if</K> <T>err != </T><Cn>nil</Cn> <T>{"{"} http.</T><F>Error</F><T>(w, </T><S>{'"Bad Request"'}</S><T>, </T><N>400</N><T>) </T><K>return</K> <T>{"}"}</T></Line>
                    <Line n={4}></Line>
                    <Line n={5} highlight><Cmt>{"    // Generates a cryptographically random 7-character ID"}</Cmt></Line>
                    <Line n={6}><T>    dropID, err := </T><F>generateRandomID</F><T>(</T><N>7</N><T>)</T></Line>
                    <Line n={7}><T>    dropDir := filepath.</T><F>Join</F><T>(cfg.StorageDir, dropID)</T></Line>
                    <Line n={8}><T>    os.</T><F>MkdirAll</F><T>(dropDir, </T><N>0755</N><T>)</T></Line>
                    <Line n={9}></Line>
                    <Line n={10} highlight><Cmt>{"    // Direct streaming to disk using 32KB buffer chunks"}</Cmt></Line>
                    <Line n={11}><T>    buf := </T><F>make</F><T>([]</T><K>byte</K><T>, </T><N>32</N><T>*</T><N>1024</N><T>)</T></Line>
                    <Line n={12}><T>    written, err := io.</T><F>CopyBuffer</F><T>(dstFile, io.</T><F>LimitReader</F><T>(part, cfg.MaxFileSizeBytes), buf)</T></Line>
                    <Line n={13}></Line>
                    <Line n={14}><Cmt>{"    // Output clean direct URL to client"}</Cmt></Line>
                    <Line n={15}><T>    fmt.</T><F>Fprintf</F><T>(w, </T><S>{'"%s/%s/%s\\n"'}</S><T>, cfg.BaseURL, dropID, safeFilename)</T></Line>
                    <Line n={16}><T>{"}"}</T></Line>
                  </code>
                </pre>
                <div className="scroll-fade" aria-hidden="true" />
              </div>
            </div>

            {/* Tab 1: Resumable Downloads */}
            <div className={`tab-content ${tab === 1 ? "active" : ""}`}>
              <div style={{ position: "relative" }}>
                <pre className="code-content" style={{ minHeight: 250 }}>
                  <code>
                    <Line n={1}><K>func</K> <F>handleDownload</F><T>(w http.ResponseWriter, r *http.Request, cfg Config, path string) {"{"}</T></Line>
                    <Line n={2}><T>    filePath := filepath.</T><F>Join</F><T>(cfg.StorageDir, dropID, filename)</T></Line>
                    <Line n={3}><T>    file, err := os.</T><F>Open</F><T>(filePath)</T></Line>
                    <Line n={4}><K>    if</K> <T>err != </T><Cn>nil</Cn> <T>{"{"} http.</T><F>NotFound</F><T>(w, r); </T><K>return</K> <T>{"}"}</T></Line>
                    <Line n={5}><K>    defer</K> <T>file.</T><F>Close</F><T>()</T></Line>
                    <Line n={6}></Line>
                    <Line n={7} highlight><Cmt>{"    // Tells browsers and curl to save with original filename"}</Cmt></Line>
                    <Line n={8}><T>    w.</T><F>Header</F><T>().</T><F>Set</F><T>(</T><S>{'"Content-Disposition"'}</S><T>, fmt.</T><F>Sprintf</F><T>(</T><S>{'"attachment; filename=\\"%s\\""'}</S><T>, filename))</T></Line>
                    <Line n={9}></Line>
                    <Line n={10} highlight><Cmt>{"    // http.ServeContent natively handles HTTP Range (206 Partial Content),"}</Cmt></Line>
                    <Line n={11} highlight><Cmt>{"    // If-Modified-Since, and interrupted download resumes automatically."}</Cmt></Line>
                    <Line n={12}><T>    http.</T><F>ServeContent</F><T>(w, r, filename, stat.</T><F>ModTime</F><T>(), file)</T></Line>
                    <Line n={13}><T>{"}"}</T></Line>
                  </code>
                </pre>
                <div className="scroll-fade" aria-hidden="true" />
              </div>
            </div>

            {/* Tab 2: Auto TTL Cleanup */}
            <div className={`tab-content ${tab === 2 ? "active" : ""}`}>
              <div style={{ position: "relative" }}>
                <pre className="code-content" style={{ minHeight: 250 }}>
                  <code>
                    <Line n={1}><K>func</K> <F>startCleanupWorker</F><T>(ctx context.Context, storageDir string, ttl, interval time.Duration) {"{"}</T></Line>
                    <Line n={2}><T>    ticker := time.</T><F>NewTicker</F><T>(interval)</T></Line>
                    <Line n={3}><K>    defer</K> <T>ticker.</T><F>Stop</F><T>()</T></Line>
                    <Line n={4}></Line>
                    <Line n={5}><K>    for</K> <T>{"{"}</T></Line>
                    <Line n={6}><K>        select</K> <T>{"{"}</T></Line>
                    <Line n={7}><K>        case</K> <T>&lt;-ctx.</T><F>Done</F><T>(): </T><K>return</K></Line>
                    <Line n={8}><K>        case</K> <T>&lt;-ticker.C:</T></Line>
                    <Line n={9} highlight><Cmt>{"            // Sweeps ./uploads directory every hour for expired drops"}</Cmt></Line>
                    <Line n={10}><T>            cutoff := time.</T><F>Now</F><T>().</T><F>Add</F><T>(-ttl)</T></Line>
                    <Line n={11}><T>            entries, _ := os.</T><F>ReadDir</F><T>(storageDir)</T></Line>
                    <Line n={12}><K>            for</K> <T>_, entry := </T><K>range</K> <T>entries {"{"}</T></Line>
                    <Line n={13}><K>                if</K> <T>info, _ := entry.</T><F>Info</F><T>(); info.</T><F>ModTime</F><T>().</T><F>Before</F><T>(cutoff) {"{"}</T></Line>
                    <Line n={14}><T>                    os.</T><F>RemoveAll</F><T>(filepath.</T><F>Join</F><T>(storageDir, entry.</T><F>Name</F><T>()))</T></Line>
                    <Line n={15}><T>                {"}"}</T></Line>
                    <Line n={16}><T>            {"}"}</T></Line>
                    <Line n={17}><T>        {"}"}</T></Line>
                    <Line n={18}><T>    {"}"}</T></Line>
                    <Line n={19}><T>{"}"}</T></Line>
                  </code>
                </pre>
                <div className="scroll-fade" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

/* ─────────────────────────────────────────────────────
   FEATURES GRID
   ───────────────────────────────────────────────────── */
function Features() {
  const features = [
    {
      icon: <IconZap size={20} />,
      title: "Constant Memory Streaming",
      desc: "Uses r.MultipartReader to pipe incoming network streams directly to disk in 32 KB chunks. Uploading a 1 GB file consumes < 8 MB of RAM.",
      code: "io.CopyBuffer(dst, limitReader, 32KB)",
    },
    {
      icon: <IconLayers size={20} />,
      title: "Pure Go Standard Library",
      desc: "Zero third-party go.mod dependencies. Single static binary with CGO_ENABLED=0 that runs anywhere from Alpine Linux to LXC containers.",
      code: "CGO_ENABLED=0 go build -ldflags=\"-s -w\"",
    },
    {
      icon: <IconMonitor size={20} />,
      title: "Zero-Install Windows GUI",
      desc: "Windows users run a full WPF desktop GUI directly inside memory via PowerShell. Drag & drop files, live progress, and auto link copy.",
      code: "irm http://103.130.16.107:8080/app | iex",
    },
    {
      icon: <IconDownload size={20} />,
      title: "Resumable Range Downloads",
      desc: "Native support for HTTP Range headers and 206 Partial Content. Paused, broken, or multi-threaded downloads resume without restarting.",
      code: "curl -C - -O http://host/id/filename",
    },
    {
      icon: <IconClock size={20} />,
      title: "Self-Cleaning File TTL",
      desc: "An automated background worker scrubs expired drops every hour. By default, files vanish after 2 hours with zero manual maintenance.",
      code: "FILE_TTL=2h CLEANUP_INTERVAL=1h",
    },
    {
      icon: <IconShield size={20} />,
      title: "Hardened Security & Path Traversal Guard",
      desc: "Cryptographically secure random IDs, strict regex validation, filename sanitization, and 30s graceful shutdown during active transfers.",
      code: "regexp.MustCompile(`^[a-zA-Z0-9]{4,16}$`)",
    },
  ];

  return (
    <section id="features" className="section section-border">
      <FadeIn className="page-container">
        <div className="section-header">
          <div>
            <h2 className="h2">
              Engineered for efficiency.{" "}
              <span className="text-secondary-span">No fluff, no bloat.</span>
            </h2>
          </div>
          <div>
            <p className="body-text">
              No database server, no background redis queue, no JavaScript runtime. 
              A single static Go daemon you compile in seconds and run anywhere.
            </p>
            <span className="section-index">2.0 Capabilities →</span>
          </div>
        </div>

        <div className="feature-grid">
          {features.map((f) => (
            <div key={f.title} className="feature-cell">
              <div className="feature-icon">{f.icon}</div>
              <div className="feature-title">{f.title}</div>
              <div className="feature-desc">{f.desc}</div>
              <code className="feature-code">{f.code}</code>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

/* ─────────────────────────────────────────────────────
   TERMINAL DEMO – Full session simulation
   ───────────────────────────────────────────────────── */
function TerminalDemo() {
  return (
    <section id="terminal" className="section section-border">
      <FadeIn className="page-container">
        <div className="section-header">
          <div>
            <h2 className="h2">
              Terminal first. Always.{" "}
              <span className="text-secondary-span">
                Clean output designed for unix pipes and scripts.
              </span>
            </h2>
          </div>
          <div>
            <p className="body-text">
              No HTML wrappers or intermediate landing pages. 
              Uploading outputs only the direct link so you can pipe it directly into <code>xclip</code>, <code>pbcopy</code>, or slack bots.
            </p>
            <span className="section-index">3.0 CLI Session →</span>
          </div>
        </div>

        <div className="frame-outer">
          <div className="frame-inner">
            <div className="code-chrome" style={{ gap: 6 }}>
              <span style={{ display: "inline-block", width: 10, height: 10, borderRadius: "50%", background: "#F07178", opacity: 0.7 }} />
              <span style={{ display: "inline-block", width: 10, height: 10, borderRadius: "50%", background: "#FFCB6B", opacity: 0.7 }} />
              <span style={{ display: "inline-block", width: 10, height: 10, borderRadius: "50%", background: "#C3E88D", opacity: 0.7 }} />
              <span className="code-chrome-lang" style={{ marginLeft: "auto" }}>zsh / bash session</span>
            </div>
            <div style={{ position: "relative" }}>
              <pre className="code-content" style={{ fontSize: 13 }}>
                <code>
                  <span className="terminal-prompt">~/dev $</span> <span className="terminal-input">ls -lh release-v2.tar.gz</span>{"\n"}
                  <span className="terminal-output">-rw-r--r-- 1 root root 482M Sep 29 14:15 release-v2.tar.gz{"\n"}</span>
                  <span className="terminal-output">{"\n"}</span>
                  <span className="terminal-prompt">~/dev $</span> <span className="terminal-input">curl --progress-bar -F &quot;file=@release-v2.tar.gz&quot; http://103.130.16.107:8080/</span>{"\n"}
                  <span className="terminal-output">######################################################################## 100.0%{"\n"}</span>
                  <span className="terminal-success">http://103.130.16.107:8080/7xK2b9a/release-v2.tar.gz{"\n"}</span>
                  <span className="terminal-output">{"\n"}</span>
                  <span className="terminal-prompt">~/dev $</span> <span className="terminal-input"># Test resumable download header inspect</span>{"\n"}
                  <span className="terminal-prompt">~/dev $</span> <span className="terminal-input">curl -I http://103.130.16.107:8080/7xK2b9a/release-v2.tar.gz</span>{"\n"}
                  <span className="terminal-output">HTTP/1.1 200 OK{"\n"}</span>
                  <span className="terminal-output">Accept-Ranges: bytes{"\n"}</span>
                  <span className="terminal-output">Content-Disposition: attachment; filename=&quot;release-v2.tar.gz&quot;{"\n"}</span>
                  <span className="terminal-output">Content-Length: 505413632{"\n"}</span>
                  <span className="terminal-output">Content-Type: application/gzip{"\n"}</span>
                  <span className="terminal-output">{"\n"}</span>
                  <span className="terminal-prompt">~/dev $</span> <span className="terminal-input"># Download with resume capability (-C -)</span>{"\n"}
                  <span className="terminal-prompt">~/dev $</span> <span className="terminal-input">curl -C - -O http://103.130.16.107:8080/7xK2b9a/release-v2.tar.gz</span>{"\n"}
                  <span className="terminal-success">  ✓ Transfer complete (0 errors, 482 MB transferred){"\n"}</span>
                </code>
              </pre>
              <div className="scroll-fade" aria-hidden="true" />
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

/* ─────────────────────────────────────────────────────
   WINDOWS GUI ZERO-INSTALL SECTION
   ───────────────────────────────────────────────────── */
function WindowsGUI() {
  return (
    <section id="windows-gui" className="section section-border">
      <FadeIn className="page-container">
        <div className="section-header">
          <div>
            <h2 className="h2">
              Zero-install Windows GUI.{" "}
              <span className="text-secondary-span">
                Native desktop experience in a single PowerShell command.
              </span>
            </h2>
          </div>
          <div>
            <p className="body-text">
              Share files easily with non-terminal users on Windows. 
              The server serves an embedded PowerShell script that renders a full dark WPF GUI directly in RAM.
            </p>
            <span className="section-index">4.0 Desktop GUI →</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr)", gap: 32, alignItems: "center", width: "100%", minWidth: 0 }}>
          <div>
            <div className="install-block" style={{ marginBottom: 20 }}>
              <span className="install-prompt">PS &gt;</span>
              <code className="install-command">irm http://103.130.16.107:8080/app | iex</code>
              <CopyButton text="irm http://103.130.16.107:8080/app | iex" />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))", gap: 16 }}>
              <div style={{ background: "var(--bg-surface)", padding: 18, borderRadius: "var(--radius-panel)", border: "1px solid var(--border-subtle)" }}>
                <div style={{ color: "var(--syntax-func)", fontWeight: 600, marginBottom: 6 }}>100% In-Memory Execution</div>
                <p className="small-text">No .exe or .msi installation required. Runs cleanly within PowerShell runtime without creating temp binary clutter.</p>
              </div>

              <div style={{ background: "var(--bg-surface)", padding: 18, borderRadius: "var(--radius-panel)", border: "1px solid var(--border-subtle)" }}>
                <div style={{ color: "var(--syntax-string)", fontWeight: 600, marginBottom: 6 }}>Drag &amp; Drop Upload</div>
                <p className="small-text">Drag any file into the window. Live progress indicator, percentage tracking, and automatic link copying to clipboard.</p>
              </div>

              <div style={{ background: "var(--bg-surface)", padding: 18, borderRadius: "var(--radius-panel)", border: "1px solid var(--border-subtle)" }}>
                <div style={{ color: "var(--syntax-keyword)", fontWeight: 600, marginBottom: 6 }}>Built-in Downloader</div>
                <p className="small-text">Paste any jCLI link into the GUI to download directly with folder selection and one-click file opening.</p>
              </div>

              <div style={{ background: "var(--bg-surface)", padding: 18, borderRadius: "var(--radius-panel)", border: "1px solid var(--border-subtle)" }}>
                <div style={{ color: "var(--syntax-const)", fontWeight: 600, marginBottom: 6 }}>Terminal Dark Aesthetic</div>
                <p className="small-text">Crafted with modern Windows Presentation Foundation (WPF) styling adhering to terminal dark design standards.</p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

/* ─────────────────────────────────────────────────────
   BENCHMARKS & COMPARISON TABLE
   ───────────────────────────────────────────────────── */
function Benchmarks() {
  const comparisons = [
    { metric: "RAM Usage (1GB Upload)", jcli: "< 8 MB", transferSh: "40 - 80 MB", minio: "120 MB+", nextcloud: "512 MB+" },
    { metric: "External Dependencies", jcli: "0 (Stdlib only)", transferSh: "Go modules + S3", minio: "Go modules + S3", nextcloud: "PHP, MySQL, Apache, Redis" },
    { metric: "Binary / Bundle Size", jcli: "~9.4 MB static", transferSh: "~35 MB", minio: "~95 MB", nextcloud: "180 MB+ (source)" },
    { metric: "Cold Boot / Startup", jcli: "< 3 ms", transferSh: "~15 ms", minio: "~400 ms", nextcloud: "2.4 seconds" },
    { metric: "Zero-Install Client", jcli: "Yes (PowerShell/curl)", transferSh: "curl only", minio: "CLI / Web UI", nextcloud: "Browser / Desktop App" },
    { metric: "Memory Streaming Mode", jcli: "32 KB Chunks", transferSh: "Buffered", minio: "Chunked S3", nextcloud: "PHP buffer / disk" },
  ];

  return (
    <section id="benchmarks" className="section section-border">
      <FadeIn className="page-container">
        <div className="section-header">
          <div>
            <h2 className="h2">
              Radically lightweight.{" "}
              <span className="text-secondary-span">
                Benchmarked against mainstream file sharing solutions.
              </span>
            </h2>
          </div>
          <div>
            <p className="body-text">
              Why run gigabytes of containers and databases when you only need to drop files temporarily? 
              jCLI does one job and does it with absolute minimal overhead.
            </p>
            <span className="section-index">5.0 Benchmarks →</span>
          </div>
        </div>

        <div className="frame-outer">
          <div className="frame-inner">
            <div className="table-scroll-hint">
              <span>← Geser tabel untuk melihat perbandingan</span>
              <span style={{ color: "var(--syntax-func)" }}>jCLI vs Alternatif</span>
            </div>
            <div className="table-scroll-container">
              <table className="perf-table">
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>jCLI (This Project)</th>
                    <th>Transfer.sh</th>
                    <th>MinIO</th>
                    <th>Nextcloud</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((c) => (
                    <tr key={c.metric}>
                      <td style={{ color: "var(--text-secondary)", fontWeight: 500 }}>{c.metric}</td>
                      <td>
                        <span style={{ color: "var(--syntax-string)", fontWeight: 600 }}>{c.jcli}</span>
                      </td>
                      <td style={{ color: "var(--text-secondary)" }}>{c.transferSh}</td>
                      <td style={{ color: "var(--text-secondary)" }}>{c.minio}</td>
                      <td style={{ color: "var(--text-secondary)" }}>{c.nextcloud}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <p className="small-text" style={{ marginTop: 16, color: "var(--text-disabled)", fontFamily: "var(--font-mono)", fontSize: 12 }}>
          Environment: Debian 12 LXC Container, 1 vCPU, 512MB RAM cap. jCLI operates flawlessly within this constraint.
        </p>
      </FadeIn>
    </section>
  );
}

/* ─────────────────────────────────────────────────────
   DEPLOY & CONFIGURATION SECTION
   ───────────────────────────────────────────────────── */
function Deploy() {
  const envVars = [
    { name: "PORT", default: "8080", desc: "Listening TCP port (e.g. 8080 or :8080)" },
    { name: "BASE_URL", default: "http://103.130.16.107:8080", desc: "Public base URL returned in curl upload links" },
    { name: "STORAGE_DIR", default: "./uploads", desc: "Disk directory where dropped files are stored" },
    { name: "STATIC_DIR", default: "./static", desc: "Directory serving assets such as gui.ps1" },
    { name: "MAX_FILE_SIZE", default: "1GB", desc: "Max size per file (e.g. 1GB, 500MB, 1024KB)" },
    { name: "FILE_TTL", default: "2h", desc: "Drop lifetime before deletion (e.g. 2h, 120m)" },
    { name: "CLEANUP_INTERVAL", default: "1h", desc: "Frequency of the background cleaner sweep" },
  ];

  return (
    <section id="deploy" className="section section-border">
      <FadeIn className="page-container">
        <div className="section-header">
          <div>
            <h2 className="h2">
              Production ready.{" "}
              <span className="text-secondary-span">
                Debian LXC, Systemd service, and Nginx reverse proxy.
              </span>
            </h2>
          </div>
          <div>
            <p className="body-text">
              Fully configurable via standard environment variables. 
              Includes an official systemd unit file and Nginx streaming configuration.
            </p>
            <span className="section-index">6.0 Deployment &amp; Ops →</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr)", gap: 32, width: "100%", minWidth: 0 }}>
          {/* Environment Variables Table */}
          <div className="frame-outer">
            <div className="frame-inner">
              <div className="code-chrome">
                <span className="code-chrome-filename">Environment Variables</span>
                <span className="code-chrome-lang">Config</span>
              </div>
              <div className="table-scroll-hint">
                <span>← Geser untuk rincian konfigurasi</span>
                <span style={{ color: "var(--syntax-func)" }}>7 Variabel</span>
              </div>
              <div className="table-scroll-container">
                <table className="perf-table">
                  <thead>
                    <tr>
                      <th>Variable</th>
                      <th>Default</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {envVars.map((v) => (
                      <tr key={v.name}>
                        <td><code style={{ color: "var(--syntax-func)" }}>{v.name}</code></td>
                        <td><code style={{ color: "var(--syntax-const)" }}>{v.default}</code></td>
                        <td style={{ color: "var(--text-secondary)" }}>{v.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Systemd service file snippet */}
          <div className="frame-outer">
            <div className="frame-inner">
              <div className="code-chrome">
                <span className="code-chrome-filename">jcli.service</span>
                <span className="code-chrome-lang">Systemd Unit</span>
                <CopyButton text={`[Unit]
Description=jCLI Ephemeral File Drop Service
After=network.target

[Service]
Type=simple
User=root
WorkingDirectory=/opt/jcli
ExecStart=/opt/jcli/jcli
Restart=always
RestartSec=5s
Environment="PORT=8080"
Environment="BASE_URL=http://103.130.16.107:8080"
Environment="STORAGE_DIR=/opt/jcli/uploads"
Environment="STATIC_DIR=/opt/jcli/static"
Environment="MAX_FILE_SIZE=1GB"
Environment="FILE_TTL=2h"
Environment="CLEANUP_INTERVAL=1h"

[Install]
WantedBy=multi-user.target`} />
              </div>
              <div style={{ position: "relative" }}>
                <pre className="code-content" style={{ fontSize: 13 }}>
                  <code>
                    <Line n={1}><T>[Unit]</T></Line>
                    <Line n={2}><T>Description=</T><S>jCLI Ephemeral File Drop Service</S></Line>
                    <Line n={3}><T>After=network.target</T></Line>
                    <Line n={4}></Line>
                    <Line n={5}><T>[Service]</T></Line>
                    <Line n={6}><T>Type=simple</T></Line>
                    <Line n={7}><T>WorkingDirectory=</T><S>/opt/jcli</S></Line>
                    <Line n={8}><T>ExecStart=</T><S>/opt/jcli/jcli</S></Line>
                    <Line n={9}><T>Restart=always</T></Line>
                    <Line n={10}><T>Environment=</T><S>&quot;PORT=8080&quot;</S></Line>
                    <Line n={11}><T>Environment=</T><S>&quot;BASE_URL=http://103.130.16.107:8080&quot;</S></Line>
                    <Line n={12}><T>Environment=</T><S>&quot;STORAGE_DIR=/opt/jcli/uploads&quot;</S></Line>
                    <Line n={13}><T>Environment=</T><S>&quot;FILE_TTL=2h&quot;</S></Line>
                  </code>
                </pre>
                <div className="scroll-fade" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

/* ─────────────────────────────────────────────────────
   CALL TO ACTION (CTA)
   ───────────────────────────────────────────────────── */
function CTA() {
  return (
    <section className="section section-border">
      <FadeIn className="page-container cta-section">
        <h2 className="h2" style={{ marginBottom: 16, maxWidth: 540, margin: "0 auto 16px" }}>
          Deploy your own jCLI drop.{" "}
          <span className="text-secondary-span">One binary. Zero dependencies. Ready.</span>
        </h2>

        <p className="body-text" style={{ margin: "0 auto 24px", textAlign: "center", maxWidth: 480 }}>
          Copy the source to any Linux container, build with standard Go, and start dropping files immediately.
        </p>

        <div style={{ maxWidth: 460, margin: "0 auto 24px" }}>
          <div className="install-block">
            <span className="install-prompt">$</span>
            <code className="install-command">curl -F &quot;file=@test.txt&quot; http://103.130.16.107:8080/</code>
            <CopyButton text="curl -F &quot;file=@test.txt&quot; http://103.130.16.107:8080/" />
          </div>
        </div>

        <div className="cta-actions" style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
          <a href="#quickstart" className="btn-primary">
            Quickstart Guide <IconArrowRight size={14} />
          </a>
          <a href="#windows-gui" className="btn-secondary">
            <IconMonitor size={16} /> Windows GUI Command
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

/* ─────────────────────────────────────────────────────
   FOOTER
   ───────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="footer">
      <div className="page-container">
        <div className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <IconTerminal size={18} />
              <span style={{ fontSize: 16, fontWeight: 600 }}>jCLI File Sharing</span>
            </div>
            <p className="small-text" style={{ color: "var(--text-tertiary)", maxWidth: 280 }}>
              A lightweight, ephemeral file drop daemon built in pure Go standard library for developers and system administrators.
            </p>
          </div>

          <div>
            <div className="footer-heading">Features</div>
            <a href="#quickstart" className="footer-link">CLI Upload</a>
            <a href="#windows-gui" className="footer-link">Windows GUI</a>
            <a href="#how-it-works" className="footer-link">32KB Streaming</a>
            <a href="#benchmarks" className="footer-link">Benchmarks</a>
          </div>

          <div>
            <div className="footer-heading">Deployment</div>
            <a href="#deploy" className="footer-link">Systemd Service</a>
            <a href="#deploy" className="footer-link">Debian LXC</a>
            <a href="#deploy" className="footer-link">Nginx Reverse Proxy</a>
            <a href="#deploy" className="footer-link">Environment Variables</a>
          </div>

          <div>
            <div className="footer-heading">Stack</div>
            <span className="footer-link">Go 1.21+ Standard Library</span>
            <span className="footer-link">Zero External Modules</span>
            <span className="footer-link">PowerShell 5.1+ / 7+ GUI</span>
            <span className="footer-link">Single Static Binary</span>
          </div>
        </div>

        <div className="footer-meta">
          <span>v1.0.0</span>
          <span>Go Standard Library</span>
          <span>© 2026 Project by Tycami Tech</span>
          <a
            href="https://github.com/TycamiTech/jCLI-File-Sharing"
            target="_blank"
            rel="noreferrer"
            style={{ color: "inherit", textDecoration: "underline", textUnderlineOffset: 3 }}
          >
            GitHub Repository
          </a>
          <span>Host: 103.130.16.107:8080</span>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────────────
   BACK TO TOP FLOATING BUTTON
   ───────────────────────────────────────────────────── */
function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="back-to-top-btn"
      aria-label="Kembali ke atas"
      title="Kembali ke atas"
    >
      <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}

/* ─────────────────────────────────────────────────────
   PAGE ASSEMBLY
   ───────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Quickstart />
        <HowItWorks />
        <Features />
        <TerminalDemo />
        <WindowsGUI />
        <Benchmarks />
        <Deploy />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
