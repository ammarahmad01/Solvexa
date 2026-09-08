
import Script from 'next/script';
import Animations from '../components/Animations';
import HeroGlobe from '../components/HeroGlobe';

export default function Home() {
  return (
    <>
      <Script src="https://ajax.googleapis.com/ajax/libs/threejs/r125/three.min.js" strategy="beforeInteractive" />
      <Animations />
      <div className="fixed inset-0 pointer-events-none z-0"><div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-secondary-container/20 blur-[140px] rounded-full"></div><div className="absolute top-1/3 -left-48 w-[600px] h-[600px] bg-primary-container/10 blur-[160px] rounded-full"></div><div className="absolute bottom-0 right-0 w-[800px] h-[500px] bg-surface-container-highest/30 blur-[180px] rounded-full"></div></div><header className="fixed top-0 left-0 right-0 z-50 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop pt-space-md pointer-events-none"><div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-space-lg rounded-full bg-surface-container-low/70 backdrop-blur-2xl shadow-[0_16px_40px_-10px_rgba(12,3,30,0.8),0_0_20px_rgba(212,175,55,0.12)] border border-outline-variant/30 pointer-events-auto transition-all duration-300 hover:border-primary-container/40"><div className="flex items-center gap-space-sm"><a className="flex items-center group" data-path="home" href="#"><img src="assets/logo.png" alt="Solvexa Logo" className="h-10 w-auto object-contain drop-shadow-md group-hover:opacity-90 transition-opacity" /></a></div><nav className="hidden xl:flex items-center gap-space-2xs p-space-2xs rounded-full bg-surface-container-lowest/50 border border-outline-variant/20" data-active-classes="bg-surface-container-highest text-primary font-semibold shadow-[inset_0_1px_1px_rgba(242,202,80,0.2)]"><a aria-current="page" className="px-space-md py-space-xs rounded-full transition-all bg-surface-container-highest text-primary font-semibold shadow-[inset_0_1px_1px_rgba(242,202,80,0.2)]" data-path="home" href="#">Home</a><a className="px-space-md py-space-xs rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all" data-path="about" href="#">About</a><a className="px-space-md py-space-xs rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all" data-path="services" href="#">Services</a><a className="px-space-md py-space-xs rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all" data-path="portfolio" href="#">Portfolio</a><a className="px-space-md py-space-xs rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all" data-path="testimonials" href="#">Testimonials</a><a className="px-space-md py-space-xs rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all" data-path="team" href="#">Team</a></nav><div className="flex items-center gap-space-sm"><a className="relative inline-flex items-center justify-center px-space-lg py-space-xs rounded-full font-label-md text-label-md font-bold text-on-primary bg-gradient-to-r from-primary-fixed via-primary to-primary-container shadow-[0_4px_20px_rgba(212,175,55,0.35)] hover:shadow-[0_0_28px_rgba(242,202,80,0.65)] hover:scale-105 active:scale-95 transition-all duration-300 border border-primary-fixed/40" data-path="contact" href="#"><span className="relative z-10">Contact</span></a></div></div></header><main className="w-full pt-20 relative z-10"><div className="flex flex-col w-full text-on-surface select-none relative overflow-x-hidden">

        <div className="fixed inset-0 w-full h-full pointer-events-none -z-10 opacity-70" style={{ display: "block" }}>
          <canvas id="shader-canvas-ANIMATION_5" style={{ display: "block", width: "100%", height: "100%" }}></canvas>

        </div>




        <section className="relative w-full min-h-[85vh] flex items-center justify-center pt-8 lg:pt-12 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop pb-space-xl overflow-hidden" id="home">

          <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-space-2xl z-10 relative lg:pl-8">


            <div className="w-full lg:w-[45%] flex flex-col items-start text-left z-20">


              <h1 className="font-title-lg text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] lg:leading-[1.05] font-extrabold tracking-tight text-white mb-space-md drop-shadow-md">
                Digital experiences <br />
                built to move <br />
                <span className="bg-gradient-to-r from-primary-fixed to-primary-container bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(212,175,55,0.3)]">businesses forward.</span>
              </h1>


              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-space-xl">
                We design and build digital experiences, software, and AI solutions that help businesses grow.
              </p>


              <div className="flex flex-wrap items-center gap-space-md">
                <a className="group relative inline-flex items-center gap-space-sm px-space-xl py-4 rounded-full font-label-md text-label-md font-bold text-on-primary bg-gradient-to-r from-primary-fixed via-primary to-primary-container hover:shadow-[0_0_24px_rgba(242,202,80,0.5)] active:scale-95 transition-all duration-300" href="#services">
                  <span>Explore Services</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
                <a className="inline-flex items-center gap-space-sm px-space-xl py-4 rounded-full font-label-md text-label-md font-semibold text-on-surface bg-surface-container-lowest/50 hover:bg-surface-container-high/80 backdrop-blur-xl border border-outline-variant/30 hover:border-outline-variant active:scale-95 transition-all duration-300" href="#portfolio">
                  <span>View Our Work</span>
                </a>
              </div>
            </div>

            {/* 3D Globe */}
            <div className="w-full lg:w-[55%] relative h-[450px] sm:h-[550px] lg:h-[600px] flex items-center justify-center pointer-events-auto">

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[350px] h-[350px] bg-gradient-to-tr from-[#6807ba]/20 to-[#d4af37]/15 blur-[90px] rounded-full"></div>
              </div>

              <div className="w-full h-full bg-transparent relative z-10">
                <HeroGlobe />
              </div>

            </div>
          </div>
        </section>



        <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-4xl" id="about">
          <div className="max-w-7xl mx-auto flex flex-col gap-space-3xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">The Dual Horizon</span>
                <h2 className="font-headline-lg text-headline-lg font-bold bg-gradient-to-r from-on-surface via-secondary to-primary-fixed bg-clip-text text-transparent">
                  Convergence of Logic &amp; Artistry
                </h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
                We don&apos;t separate mathematical rigor from emotional aesthetics. Solvexa builds sovereign computational structures wrapped in cinematic spatial choreography.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl items-stretch">

              <div className="relative rounded-2xl bg-surface-container-lowest/80 p-space-xl backdrop-blur-2xl shadow-xl overflow-hidden border border-outline-variant/30 flex flex-col justify-between">
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-secondary-container/20 blur-[90px] rounded-full pointer-events-none"></div>
                <div>
                  <div className="flex items-center justify-between pb-space-sm mb-space-md border-b border-outline-variant/20">
                    <div className="flex items-center gap-space-xs">
                      <span className="w-3 h-3 rounded-full bg-error/70"></span>
                      <span className="w-3 h-3 rounded-full bg-primary/70"></span>
                      <span className="w-3 h-3 rounded-full bg-secondary/70"></span>
                      <span className="font-label-caps text-label-caps text-on-surface-variant ml-space-xs">KERNEL::SOLVEXA_CORE_V4</span>
                    </div>
                    <span className="font-label-caps text-label-caps text-primary">REAL-TIME TELEMETRY</span>
                  </div>
                  <div className="font-label-md text-label-md text-on-surface-variant space-y-space-xs font-mono">
                    <p className="text-secondary-fixed">&gt; init neural_fabric --latent-dim 4096 --fp16</p>
                    <p className="text-primary">&gt; status: 99.98% optimal cluster state</p>
                    <p className="text-on-surface-variant">&gt; pipeline: hyper-distributed tensor routing ready</p>
                    <p className="text-secondary">&gt; rendering layer: WebGL dynamic multi-pass buffer [OK]</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-space-sm pt-space-xl mt-space-xl border-t border-outline-variant/20">
                  <div>
                    <p className="font-headline-sm text-headline-sm font-bold text-primary">12ms</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Global Inference</p>
                  </div>
                  <div>
                    <p className="font-headline-sm text-headline-sm font-bold text-secondary">100M+</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Tokens Processed</p>
                  </div>
                  <div>
                    <p className="font-headline-sm text-headline-sm font-bold text-primary-fixed">0ms</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Frame Drift</p>
                  </div>
                </div>
              </div>

              <div className="relative rounded-2xl bg-gradient-to-br from-surface-container-high/60 to-surface-container-lowest/90 p-space-xl backdrop-blur-2xl shadow-xl overflow-hidden border border-primary/20 flex flex-col justify-between">
                <div className="absolute -left-16 -bottom-16 w-72 h-72 bg-primary-container/15 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="w-full h-48 relative overflow-hidden rounded-xl bg-surface-container-lowest/50 mb-space-md flex items-center justify-center">
                  <svg className="w-full h-full object-cover" preserveAspectRatio="none" viewBox="0 0 400 160">
                    <defs>
                      <linearGradient id="goldRibbon" x1="0%" x2="100%" y1="0%" y2="100%">
                        <stop offset="0%" stopColor="#FFE088" stopOpacity="0.9"></stop>
                        <stop offset="50%" stopColor="#F2CA50" stopOpacity="0.6"></stop>
                        <stop offset="100%" stopColor="#6807BA" stopOpacity="0.2"></stop>
                      </linearGradient>
                    </defs>
                    <path d="M-20,80 C60,10 140,150 220,70 C300,-10 360,120 440,60" fill="none" stroke="url(#goldRibbon)" strokeLinecap="round" strokeWidth="4"></path>
                    <path d="M-20,100 C70,30 150,160 230,90 C310,20 370,140 440,80" fill="none" stroke="#DBB8FF" strokeDasharray="3,6" strokeOpacity="0.4" strokeWidth="1.5"></path>
                  </svg>
                  <div className="absolute bottom-3 right-3 px-space-xs py-space-2xs rounded bg-surface-container/80 backdrop-blur-md">
                    <span className="font-label-caps text-label-caps text-primary">SCULPTURAL FLUID DYNAMICS</span>
                  </div>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Kinetic Elegance</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Every system is tailored to captivate human intuition. We forge brand architectures that turn complex technological capabilities into visceral, tactile sensations.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
              <div className="p-space-lg rounded-xl bg-surface-container/60 hover:bg-surface-container-high/80 transition-all duration-300 backdrop-blur-xl border border-outline-variant/20 hover:border-primary/40 shadow-lg group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary-container/20 text-primary mb-space-md group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">neurology</span>
                </div>
                <h4 className="font-title-lg text-title-lg font-semibold text-on-surface mb-space-xs">Autonomous Intelligence</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Domain-specific multi-agent models orchestrated for decision supremacy and mission-critical velocity.
                </p>
              </div>
              <div className="p-space-lg rounded-xl bg-surface-container/60 hover:bg-surface-container-high/80 transition-all duration-300 backdrop-blur-xl border border-outline-variant/20 hover:border-primary/40 shadow-lg group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-secondary-container/30 text-secondary mb-space-md group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">deployed_code</span>
                </div>
                <h4 className="font-title-lg text-title-lg font-semibold text-on-surface mb-space-xs">Architectural Rigor</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Fault-tolerant microservices, resilient distributed databases, and deterministic zero-latency networks.
                </p>
              </div>
              <div className="p-space-lg rounded-xl bg-surface-container/60 hover:bg-surface-container-high/80 transition-all duration-300 backdrop-blur-xl border border-outline-variant/20 hover:border-primary/40 shadow-lg group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary-container/20 text-primary-fixed mb-space-md group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">draw</span>
                </div>
                <h4 className="font-title-lg text-title-lg font-semibold text-on-surface mb-space-xs">Human-Centric Craft</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Transcendent UX interfaces crafted with spatial depth, micro-haptics, and luminous clarity.
                </p>
              </div>
            </div>
          </div>
        </section>



        <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-4xl bg-surface-container-lowest/40" id="services">
          <div className="max-w-7xl mx-auto flex flex-col gap-space-3xl">
            <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-space-xs">
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">Master Disciplines</span>
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">Architectural Pillars</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Engineered for visionary founders and Fortune 100 leaders seeking asymmetric strategic advantage.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-xl">

              <div className="relative rounded-2xl bg-gradient-to-b from-surface-container-high/70 via-surface-container/50 to-surface-container-lowest/90 p-space-xl backdrop-blur-2xl border border-outline-variant/20 hover:border-primary/60 transition-all duration-500 shadow-xl hover:shadow-[0_0_35px_rgba(242,202,80,0.2)] flex flex-col justify-between group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/25 transition-all"></div>
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-primary-container/20 flex items-center justify-center text-primary mb-space-lg shadow-inner group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-3xl">hub</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-space-xs">AI &amp; Intelligent Systems</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
                    Proprietary cognitive compute pipelines, enterprise foundational fine-tuning, and deterministic autonomous reasoning agents.
                  </p>
                  <div className="flex flex-wrap gap-space-2xs mb-space-lg">
                    <span className="px-space-xs py-space-2xs rounded-full font-label-caps text-label-caps bg-surface-container-highest text-primary-fixed">Custom LLMs</span>
                    <span className="px-space-xs py-space-2xs rounded-full font-label-caps text-label-caps bg-surface-container-highest text-secondary-fixed">Autonomous Agents</span>
                    <span className="px-space-xs py-space-2xs rounded-full font-label-caps text-label-caps bg-surface-container-highest text-on-surface-variant">Predictive Models</span>
                    <span className="px-space-xs py-space-2xs rounded-full font-label-caps text-label-caps bg-surface-container-highest text-primary">NLP Systems</span>
                  </div>
                </div>
                <a className="inline-flex items-center gap-space-xs font-label-md text-label-md text-primary font-semibold group-hover:translate-x-1 transition-transform" href="#contact">
                  <span>Commission AI Pipeline</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </a>
              </div>

              <div className="relative rounded-2xl bg-gradient-to-b from-surface-container-high/70 via-surface-container/50 to-surface-container-lowest/90 p-space-xl backdrop-blur-2xl border border-outline-variant/20 hover:border-secondary/60 transition-all duration-500 shadow-xl hover:shadow-[0_0_35px_rgba(219,184,255,0.2)] flex flex-col justify-between group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none group-hover:bg-secondary/30 transition-all"></div>
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-secondary-container/30 flex items-center justify-center text-secondary mb-space-lg shadow-inner group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-3xl">terminal</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-space-xs">Product Engineering</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
                    Resilient full-stack computational software, real-time distributed microservices, and microsecond-optimized data pipelines.
                  </p>
                  <div className="flex flex-wrap gap-space-2xs mb-space-lg">
                    <span className="px-space-xs py-space-2xs rounded-full font-label-caps text-label-caps bg-surface-container-highest text-secondary">Next-Gen Full-Stack</span>
                    <span className="px-space-xs py-space-2xs rounded-full font-label-caps text-label-caps bg-surface-container-highest text-primary-fixed">Distributed Cloud</span>
                    <span className="px-space-xs py-space-2xs rounded-full font-label-caps text-label-caps bg-surface-container-highest text-on-surface-variant">Sub-ms APIs</span>
                    <span className="px-space-xs py-space-2xs rounded-full font-label-caps text-label-caps bg-surface-container-highest text-secondary-fixed">Rust / WASM</span>
                  </div>
                </div>
                <a className="inline-flex items-center gap-space-xs font-label-md text-label-md text-secondary font-semibold group-hover:translate-x-1 transition-transform" href="#contact">
                  <span>Engineer Architecture</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </a>
              </div>

              <div className="relative rounded-2xl bg-gradient-to-b from-surface-container-high/70 via-surface-container/50 to-surface-container-lowest/90 p-space-xl backdrop-blur-2xl border border-outline-variant/20 hover:border-primary-container/60 transition-all duration-500 shadow-xl hover:shadow-[0_0_35px_rgba(242,202,80,0.2)] flex flex-col justify-between group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/20 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/20 transition-all"></div>
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-primary-container/20 flex items-center justify-center text-primary mb-space-lg shadow-inner group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-3xl">auto_awesome</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-space-xs">Creative &amp; Digital Growth</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
                    Cinematic identity ecosystems, 3D WebGL user interactions, and programmatic narrative campaigns generating compounding valuation.
                  </p>
                  <div className="flex flex-wrap gap-space-2xs mb-space-lg">
                    <span className="px-space-xs py-space-2xs rounded-full font-label-caps text-label-caps bg-surface-container-highest text-primary">Spatial Brand Identity</span>
                    <span className="px-space-xs py-space-2xs rounded-full font-label-caps text-label-caps bg-surface-container-highest text-secondary-fixed">3D Motion Systems</span>
                    <span className="px-space-xs py-space-2xs rounded-full font-label-caps text-label-caps bg-surface-container-highest text-primary-fixed">Growth Engines</span>
                  </div>
                </div>
                <a className="inline-flex items-center gap-space-xs font-label-md text-label-md text-primary font-semibold group-hover:translate-x-1 transition-transform" href="#contact">
                  <span>Amplify Venture</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </section>



        <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-4xl" id="portfolio">
          <div className="max-w-7xl mx-auto flex flex-col gap-space-3xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">Verified Deployments</span>
                <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">Spatial Archive</h2>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="px-space-sm py-space-2xs rounded-full bg-surface-container-high text-primary font-label-caps text-label-caps border border-primary/20">4 FLAGSHIPS SHOWN</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-xl">

              <div className="group relative rounded-2xl bg-surface-container-low/80 backdrop-blur-2xl border border-outline-variant/30 hover:border-primary/50 overflow-hidden transition-all duration-500 shadow-xl flex flex-col">
                <div className="relative w-full h-64 overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Futuristic cybernetic interface showing neural graph clusters glowing in violet and auric gold with dark obsidian purple backdrop and volumetric lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgKBpQ-WFQtos4ZGQDlR1YhWQMiAcn5hw9IhN1gsnkCj6gQkL2Y2sqljgtv09vh0GT_vyH2CXrHTc2W18hqaqlp0KRCR9Vt7BXTkfBBAP8cp2s5XOUzoj6eK8vuejHQ_7KInR9zs4X2pw9dyWRV60AVgdWk_WdnC_gYJ7ksmve91LlqQCg5WCsKYhBa0a6QNN53KjBg9aTv6WQyqwPLXa3SemgWXkzSFWURchlLtEPEQ-5gZs7X5h-GA" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
                  <span className="absolute top-4 left-4 px-space-sm py-space-2xs rounded-full bg-surface-container-lowest/80 backdrop-blur-md border border-primary/40 font-label-caps text-label-caps text-primary">Enterprise AI</span>
                </div>
                <div className="p-space-lg flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface group-hover:text-primary transition-colors">Aetheria OS</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-space-2xs">
                      Sovereign Enterprise AI &amp; Neural Orchestration Platform powering 4,000+ autonomous agent pipelines in zero-trust enclaves.
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md border-t border-outline-variant/20 flex items-center justify-between">
                    <span className="font-label-caps text-label-caps text-secondary-fixed font-semibold">120K QPS CAPACITY</span>
                    <a className="inline-flex items-center gap-space-2xs font-label-md text-label-md text-primary font-semibold hover:underline" href="#contact">
                      <span>View Case Study</span>
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="group relative rounded-2xl bg-surface-container-low/80 backdrop-blur-2xl border border-outline-variant/30 hover:border-primary/50 overflow-hidden transition-all duration-500 shadow-xl flex flex-col">
                <div className="relative w-full h-64 overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="High-frequency financial algorithm dashboard with multi-monitor 3D candlestick charts, golden telemetry indicators, deep purple cosmic space background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7eZfhTjBBmImKQPXdAQIvVwI8ermU3iBIF4VILstQmSavnr7t9iSwNqmj4rPeQdsRhgYRDvNT-t9ENWD6y2B3SnAtNRpDE2V98z1b_HCy4Lw_lEcY6D24CrrJXSXlA2k1e7cK88a-NbcOrEQOCYQstGrK3x18GqwmFHQoOKASQ9OiGPFZLDFNiYjCzP17uK0xVNbjwIz1wLdye77uJVY0nIjwADwF50RUz3mNbPhkSOgYhWKIMyRzOQ" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
                  <span className="absolute top-4 left-4 px-space-sm py-space-2xs rounded-full bg-surface-container-lowest/80 backdrop-blur-md border border-primary/40 font-label-caps text-label-caps text-primary">Fintech</span>
                </div>
                <div className="p-space-lg flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface group-hover:text-primary transition-colors">Kroma Global</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-space-2xs">
                      Autonomous high-frequency DeFi trading terminal with multi-layered visual liquidity simulations and automated arbitrage bots.
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md border-t border-outline-variant/20 flex items-center justify-between">
                    <span className="font-label-caps text-label-caps text-secondary-fixed font-semibold">$2.4B 24H VOLUME</span>
                    <a className="inline-flex items-center gap-space-2xs font-label-md text-label-md text-primary font-semibold hover:underline" href="#contact">
                      <span>View Case Study</span>
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="group relative rounded-2xl bg-surface-container-low/80 backdrop-blur-2xl border border-outline-variant/30 hover:border-primary/50 overflow-hidden transition-all duration-500 shadow-xl flex flex-col">
                <div className="relative w-full h-64 overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Sleek aerodynamic electric hypercar model in a dark studio with golden light strips, 3D WebGL exploded components, cosmic violet specular reflections" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy3WIcE-1McGJpkTWDBPlFO5sMKpKPfi4vyVF4B9Amf_OVD5mT6q9_8x_FhF8GmzH4JGRngqrZumO0dn6DEldPJWWCn49sFZtYc-U6IfUFSF5JtB3qTbcLeZTb3RgoCqKNnDqNadvuaJkRKE9KSnuuqjo_QjmBvaBXEVYAvQhL9uOFmijHvx9ajqihFrUzlpQxkn0XWx-dPSVlegyW6KBqdSrCSBWlOrjzZ1IvaibOf9sRhUZBQ0f0yw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
                  <span className="absolute top-4 left-4 px-space-sm py-space-2xs rounded-full bg-surface-container-lowest/80 backdrop-blur-md border border-primary/40 font-label-caps text-label-caps text-primary">WebGL / 3D</span>
                </div>
                <div className="p-space-lg flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface group-hover:text-primary transition-colors">Veloce Hyperdrive</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-space-2xs">
                      Photorealistic spatial 3D WebGL configurator enabling ultra-high net worth patrons to customize hypercars in sub-millimeter detail.
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md border-t border-outline-variant/20 flex items-center justify-between">
                    <span className="font-label-caps text-label-caps text-secondary-fixed font-semibold">60 FPS WEB RENDERING</span>
                    <a className="inline-flex items-center gap-space-2xs font-label-md text-label-md text-primary font-semibold hover:underline" href="#contact">
                      <span>View Case Study</span>
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="group relative rounded-2xl bg-surface-container-low/80 backdrop-blur-2xl border border-outline-variant/30 hover:border-primary/50 overflow-hidden transition-all duration-500 shadow-xl flex flex-col">
                <div className="relative w-full h-64 overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Holographic DNA double helix glowing in metallic gold and electric purple particles, volumetric diagnostic data cards floating in ambient dark space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDutnUgel5dGrh-DeJAediEoEJKS6p_PTifXbf6zGKe3sJM5OLEmTiBmnj9OokofOXzfOBwueRXXX5tK4raIJnlFU23jAxoBsKeikFp7UkFSg0tUWJzudF1BplivFxLj3sOosQoOllONxqvrLuOpZXdHZ729DnxzsLjNIED_sW01pNRRqTWtTpdparhE-nTPp4bZhb-goxDDq2l7P891Uo0qex0BVET1LeHL92V5LL26XHewUNq8qP5FA" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
                  <span className="absolute top-4 left-4 px-space-sm py-space-2xs rounded-full bg-surface-container-lowest/80 backdrop-blur-md border border-primary/40 font-label-caps text-label-caps text-primary">HealthTech</span>
                </div>
                <div className="p-space-lg flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface group-hover:text-primary transition-colors">Sovereign Health</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-space-2xs">
                      Predictive genomic intelligence platform analyzing trillions of base pairs to simulate therapeutic interventions in silico.
                    </p>
                  </div>
                  <div className="pt-space-md mt-space-md border-t border-outline-variant/20 flex items-center justify-between">
                    <span className="font-label-caps text-label-caps text-secondary-fixed font-semibold">99.4% ACCURACY</span>
                    <a className="inline-flex items-center gap-space-2xs font-label-md text-label-md text-primary font-semibold hover:underline" href="#contact">
                      <span>View Case Study</span>
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-4xl overflow-hidden bg-surface-container-lowest/50" id="testimonials">
          <div className="max-w-7xl mx-auto flex flex-col gap-space-3xl items-center text-center">
            <div className="flex flex-col items-center gap-space-xs max-w-2xl">
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">Global Endorsements</span>
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">Trusted by Vanguard Leaders</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                What founders and institutional leaders state about our architectural speed and transcendent design fidelity.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg w-full text-left">

              <div className="p-space-xl rounded-2xl bg-surface-container/70 backdrop-blur-2xl border border-outline-variant/30 hover:border-primary/50 shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div className="flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-primary text-sm gap-1">
                      <span className="material-symbols-outlined text-base">star</span>
                      <span className="material-symbols-outlined text-base">star</span>
                      <span className="material-symbols-outlined text-base">star</span>
                      <span className="material-symbols-outlined text-base">star</span>
                      <span className="material-symbols-outlined text-base">star</span>
                    </div>
                    <span className="font-label-caps text-label-caps px-space-xs py-space-2xs rounded bg-surface-container-highest text-secondary font-semibold">Silicon Valley AI Lab</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface italic">&quot;Solvexa compressed a multi-quarter LLM rollout into 6 weeks without losing a single ounce of architectural elegance. Their visual language alone doubled our series B valuation multiple.&quot;</p>
                </div>
                <div className="flex items-center gap-space-sm pt-space-md mt-space-lg border-t border-outline-variant/20">
                  <img className="w-12 h-12 rounded-full object-cover border border-primary/40" data-alt="Sophisticated executive portrait of a technology venture founder, moody studio lighting with violet rim lights and warm golden ambient key light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGLn-5M6b-bnMKvGSu9ZMoqhCL6KQVOfepTlqwf5XY2fVC-Ds2WPAWSKTjuXOtKXkvvPkl5_zt995YfZRe7rNduXLrJP9duyiOmHObNjf_Xo9XfcD9_9eS-1fGiKsUb3YUBYRnFpkIlXoqZtb7i1Cv8IXSOdDSp81CSUjNVETlRLcJWybsyjDqfWZTgHmMlAzBP8SLZSGYPx-S3byeAzXUPDziPnlXJek9PwijcHeRMRfnHAGYC8sarQ" />
                  <div>
                    <p className="font-title-lg text-title-lg text-on-surface font-bold">Marcus Sterling</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Managing Director, Apex Capital</p>
                  </div>
                </div>
              </div>

              <div className="p-space-xl rounded-2xl bg-gradient-to-b from-surface-container-high/90 to-surface-container/80 backdrop-blur-2xl border border-primary/50 shadow-[0_0_40px_rgba(242,202,80,0.15)] transition-all duration-300 flex flex-col justify-between">
                <div className="flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-primary text-sm gap-1">
                      <span className="material-symbols-outlined text-base">star</span>
                      <span className="material-symbols-outlined text-base">star</span>
                      <span className="material-symbols-outlined text-base">star</span>
                      <span className="material-symbols-outlined text-base">star</span>
                      <span className="material-symbols-outlined text-base">star</span>
                    </div>
                    <span className="font-label-caps text-label-caps px-space-xs py-space-2xs rounded bg-primary/20 text-primary font-bold">Lumina Studios</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface font-medium italic">&quot;In twenty years of software venture architecture, I have never witnessed a team execute both deep algorithmic optimization and haute couture digital branding at this level of majesty.&quot;</p>
                </div>
                <div className="flex items-center gap-space-sm pt-space-md mt-space-lg border-t border-primary/20">
                  <img className="w-12 h-12 rounded-full object-cover border border-primary" data-alt="Portrait of a visionary female studio director with focused eyes, cinematic dark purple studio lighting with subtle gold jewelry accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY4zT0_m1TRm7QiXFDZ4HSefeJ4UXT_oJr-xPKrhSBLbbKiCt4HzFDXmEs9JwcpKugsczpksIZ7fHGq0rNiZZQp63q6wgSWk8vZg85Mc4i3rTg6bOurwfNXQtS7dwnMI8U6h--sS9BMFV5O3yZPRZo73WMuYIDU9Dwgfh1u8eJfX9EfTTOcxCK2v2QOwKAOmV6UEAJI_ErWVeoXwXaq57oF1q3JY5ureSrg6W2PMaqUy2PCV6mcZC0Ug" />
                  <div>
                    <p className="font-title-lg text-title-lg text-on-surface font-bold">Aria Vane</p>
                    <p className="font-body-sm text-body-sm text-primary">Chief Innovation Officer, Lumina</p>
                  </div>
                </div>
              </div>

              <div className="p-space-xl rounded-2xl bg-surface-container/70 backdrop-blur-2xl border border-outline-variant/30 hover:border-primary/50 shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div className="flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-primary text-sm gap-1">
                      <span className="material-symbols-outlined text-base">star</span>
                      <span className="material-symbols-outlined text-base">star</span>
                      <span className="material-symbols-outlined text-base">star</span>
                      <span className="material-symbols-outlined text-base">star</span>
                      <span className="material-symbols-outlined text-base">star</span>
                    </div>
                    <span className="font-label-caps text-label-caps px-space-xs py-space-2xs rounded bg-surface-container-highest text-secondary font-semibold">Nexus Sovereign Cloud</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface italic">&quot;Their 3D WebGL interfaces run like clockwork at 60 FPS on mobile devices. Solvexa sets the absolute golden benchmark in modern spatial computing.&quot;</p>
                </div>
                <div className="flex items-center gap-space-sm pt-space-md mt-space-lg border-t border-outline-variant/20">
                  <img className="w-12 h-12 rounded-full object-cover border border-primary/40" data-alt="Distinguished executive in a dark minimalist blazer, low-key lighting with royal violet highlights and warm subtle golden rim light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiQFgUQQw4otoMb-yz4_HAebN2TnH3ZH9JIbMD3lVAv_tneQWJO6Kuk0fStB9dl-rwXICxSLYyapJRyG_-hILdOtMEyZL0YnV86iHiZowSOXMZe80SxdVHNoephWYKkikdOR3Atd9uAFWvBZVMtVMoPu2A9YWMLgasC2w6n8aK_6hbRiyP3bzzhsCVVEwZgbFoyF0SRNAfN01zqS0-ZMVGR9W6M1RS23rZjsOhYbAYl66M1ESkWpda_A" />
                  <div>
                    <p className="font-title-lg text-title-lg text-on-surface font-bold">Dr. Lucian Mercer</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">VP of Engineering, Nexus Cloud</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-4xl" id="team">
          <div className="max-w-7xl mx-auto flex flex-col gap-space-3xl">
            <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-space-xs">
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">The Brain Trust</span>
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">Architectural Leadership</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Engineers, kinetic artists, and quantum theoreticians united by unconditional precision.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">

              <div className="group relative rounded-2xl bg-surface-container-low/80 backdrop-blur-xl border border-outline-variant/20 hover:border-primary/60 p-space-md flex flex-col items-center text-center transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(242,202,80,0.2)]">
                <div className="relative w-40 h-40 rounded-full mb-space-md overflow-hidden border-2 border-outline-variant/40 group-hover:border-primary transition-all duration-300">
                  <img className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500" alt="Ammar Ahmad" src="/assets/ammar2.png" />
                </div>
                <h3 className="font-title-lg text-title-lg font-bold text-on-surface group-hover:text-primary transition-colors">Ammar Ahmad</h3>
                <p className="font-label-caps text-label-caps text-primary tracking-wider uppercase mt-1">Founder &amp; CEO</p>
                <div className="flex items-center gap-space-xs mt-space-md">
                  <a className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" href="https://www.linkedin.com/in/ammar-ahmad-012a29261/" target="_blank" rel="noopener noreferrer">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </a>
                </div>
              </div>

              <div className="group relative rounded-2xl bg-surface-container-low/80 backdrop-blur-xl border border-outline-variant/20 hover:border-primary/60 p-space-md flex flex-col items-center text-center transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(242,202,80,0.2)]">
                <div className="relative w-40 h-40 rounded-full mb-space-md overflow-hidden border-2 border-outline-variant/40 group-hover:border-primary transition-all duration-300">
                  <img className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500" alt="Rohan Bin Ejaz" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8J-dd7ZesLr8C9B9kkD1qz7IhLAMO_u2AEG4tSj4oGAXOEKWGGk4PjLrO-vjGtCDkYVes0v6v5YjtYGLYZHjp_B9n2BgIG-5fdi7fcwj_bNsQUn5Hyt-w59idKFrrXJQNor3706SkWRqAbklml_hxkvqM5mR9Ry_7O7fsJgfzWKk_vGbRdqOeNbbEWhGik9tPOlXPU5IemjeXrGRp94i4BCiFjC0H4DpzCmsieubI-j0b5H4vPIMVTQ" />
                </div>
                <h3 className="font-title-lg text-title-lg font-bold text-on-surface group-hover:text-primary transition-colors">Rohan Bin Ejaz</h3>
                <p className="font-label-caps text-label-caps text-secondary tracking-wider uppercase mt-1">CoFounder &amp; CTO</p>
                <div className="flex items-center gap-space-xs mt-space-md">
                  <a className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" href="https://www.linkedin.com/in/rohan-bin-ejaz-514177317/" target="_blank" rel="noopener noreferrer">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </a>
                </div>
              </div>

              <div className="group relative rounded-2xl bg-surface-container-low/80 backdrop-blur-xl border border-outline-variant/20 hover:border-primary/60 p-space-md flex flex-col items-center text-center transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(242,202,80,0.2)]">
                <div className="relative w-40 h-40 rounded-full mb-space-md overflow-hidden border-2 border-outline-variant/40 group-hover:border-primary transition-all duration-300">
                  <img className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500" alt="Abdullah Abbasi" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB_ZEwyt2IUWp0qghaFXAv0Ew7Auam3ruxG1rlj9qzrrzxgobXn9jbZWTq5nqFPySdwquYkPgWbOQPC-l1ehUQ5e5oSvZyvCEe7SgtkL4ISsPoiREJWUDuc0zvAozfRWB8eelN3Oi0qaISejt0ANtKTdSdWelh1zz6QkT5xjfpF1qPdYYkZCW04ZLfCeNRe51tLHW-gVpcmpm-YeNrLUOfSPpfjfd25UWY6TLYF8f3si9FIW--4_yQ1Q" />
                </div>
                <h3 className="font-title-lg text-title-lg font-bold text-on-surface group-hover:text-primary transition-colors">Abdullah Abbasi</h3>
                <p className="font-label-caps text-label-caps text-primary-fixed tracking-wider uppercase mt-1">CoFounder &amp; CMO</p>
                <div className="flex items-center gap-space-xs mt-space-md">
                  <a className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" href="https://www.linkedin.com/in/abdullah-abbasi-03133a404/" target="_blank" rel="noopener noreferrer">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>



        <section className="relative w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-4xl" id="contact">
          <div className="max-w-7xl mx-auto flex flex-col gap-space-3xl">
            <div className="flex flex-col items-center text-center gap-space-xs">
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">Get In Touch</span>
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">Contact Us</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                Have a project in mind or want to learn more about how we can help your business grow? Reach out to us — we&apos;d love to hear from you.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-stretch">

              {/* Google Map */}
              <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-outline-variant/30 shadow-2xl min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106890.27416498498!2d73.0078209!3d33.5651107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df948974419acb%3A0x984357e1632d30f!2sRawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1694100000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Solvexa Location - Rawalpindi, Pakistan"
                ></iframe>
              </div>

              {/* Contact Info Card */}
              <div className="lg:col-span-5 rounded-2xl bg-surface-container/70 backdrop-blur-2xl border border-primary/30 p-space-xl shadow-2xl flex flex-col justify-center gap-space-xl">

                <div className="flex flex-col gap-space-xs">
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Let&apos;s Build Something Great</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    We&apos;re based in Rawalpindi, Pakistan and serve clients worldwide. Get in touch through any of the channels below.
                  </p>
                </div>

                <div className="flex flex-col gap-space-lg">
                  {/* Location */}
                  <div className="flex items-start gap-space-md group">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary-container/20 text-primary shrink-0 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-2xl">location_on</span>
                    </div>
                    <div className="flex flex-col gap-space-2xs">
                      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Our Office</span>
                      <span className="font-body-lg text-body-lg text-on-surface">Rawalpindi, Pakistan</span>
                    </div>
                  </div>

                  {/* Phone */}
                  <a href="tel:+923288521417" className="flex items-start gap-space-md group hover:translate-x-1 transition-transform">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-secondary-container/30 text-secondary shrink-0 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-2xl">call</span>
                    </div>
                    <div className="flex flex-col gap-space-2xs">
                      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Call Us</span>
                      <span className="font-body-lg text-body-lg text-on-surface">+92 328 8521417</span>
                    </div>
                  </a>

                  {/* Email */}
                  <a href="mailto:info.solvexa@gmail.com" className="flex items-start gap-space-md group hover:translate-x-1 transition-transform">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary-container/20 text-primary-fixed shrink-0 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-2xl">mail</span>
                    </div>
                    <div className="flex flex-col gap-space-2xs">
                      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Email Us</span>
                      <span className="font-body-lg text-body-lg text-on-surface">info.solvexa@gmail.com</span>
                    </div>
                  </a>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-outline-variant/40 to-transparent"></div>

                {/* Social Links */}
                <div className="flex items-center gap-space-sm">
                  <span className="font-label-caps text-label-caps text-on-surface-variant">Follow Us</span>
                  <a className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-high/60 border border-outline-variant/30 text-on-surface-variant hover:text-primary hover:border-primary-container/60 hover:bg-surface-container-highest transition-all duration-300 shadow-sm" href="https://www.linkedin.com/company/solvexa1/posts/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </a>
                  <a className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-high/60 border border-outline-variant/30 text-on-surface-variant hover:text-primary hover:border-primary-container/60 hover:bg-surface-container-highest transition-all duration-300 shadow-sm" href="https://www.facebook.com/profile.php?id=61573528962536" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                  </a>
                  <a className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-high/60 border border-outline-variant/30 text-on-surface-variant hover:text-primary hover:border-primary-container/60 hover:bg-surface-container-highest transition-all duration-300 shadow-sm" href="https://www.instagram.com/solvexa_/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </section>


      </div></main><footer className="w-full relative z-10 mt-space-4xl bg-surface-container-lowest border-t border-outline-variant/20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full object-cover" preserveAspectRatio="none" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,160L40,176C80,192,160,224,240,218.7C320,213,400,171,480,160C560,149,640,171,720,186.7C800,203,880,213,960,197.3C1040,181,1120,139,1200,133.3C1280,128,1360,160,1400,176L1440,192" fill="none" stroke="#f2ca50" strokeDasharray="4,8" strokeWidth="0.8"></path>
            <path d="M0,64L48,96C96,128,192,192,288,208C384,224,480,192,576,165.3C672,139,768,117,864,133.3C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160" fill="none" stroke="#dbb8ff" strokeWidth="0.6"></path>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-3xl relative z-10 flex flex-col gap-space-2xl">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl">

            <div className="flex flex-col gap-space-md col-span-1 md:col-span-2 lg:col-span-1">
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center gap-space-xs">
                  <img src="assets/logo.png" alt="Solvexa Logo" className="h-14 w-auto object-contain drop-shadow-md" />
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">We design and build digital experiences, software, and AI solutions that help businesses grow.</p>
              </div>

            </div>


            <div className="flex flex-col gap-space-md">
              <h3 className="font-title-lg text-title-lg font-bold text-on-surface">Quick Links</h3>
              <nav className="flex flex-col gap-space-xs">
                <a href="#home" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">Home</a>
                <a href="#about" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">About</a>
                <a href="#services" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">Services</a>
                <a href="#portfolio" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">Portfolio</a>
                <a href="#team" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">Team</a>
              </nav>
            </div>


            <div className="flex flex-col gap-space-md">
              <h3 className="font-title-lg text-title-lg font-bold text-on-surface">Contact Us</h3>
              <ul className="flex flex-col gap-space-xs">
                <li>
                  <a href="https://solvxa.github.io/website/#" className="flex items-center gap-space-xs font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-base">location_on</span>
                    Rawalpindi, Pakistan
                  </a>
                </li>
                <li>
                  <a href="https://solvxa.github.io/website/#" className="flex items-center gap-space-xs font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-base">call</span>
                    +92 328 8521417
                  </a>
                </li>
                <li>
                  <a href="mailto:info.solvexa@gmail.com" className="flex items-center gap-space-xs font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-base">mail</span>
                    info.solvexa@gmail.com
                  </a>
                </li>
              </ul>
            </div>


            <div className="flex flex-col gap-space-md">
              <h3 className="font-title-lg text-title-lg font-bold text-on-surface">Connect</h3>
              <div className="flex items-center gap-space-sm">
                <a className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-high/60 border border-outline-variant/30 text-on-surface-variant hover:text-primary hover:border-primary-container/60 hover:bg-surface-container-highest transition-all duration-300 shadow-sm" href="https://www.linkedin.com/company/solvexa1/posts/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
                <a className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-high/60 border border-outline-variant/30 text-on-surface-variant hover:text-primary hover:border-primary-container/60 hover:bg-surface-container-highest transition-all duration-300 shadow-sm" href="https://www.facebook.com/profile.php?id=61573528962536" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                </a>
                <a className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-high/60 border border-outline-variant/30 text-on-surface-variant hover:text-primary hover:border-primary-container/60 hover:bg-surface-container-highest transition-all duration-300 shadow-sm" href="https://www.instagram.com/solvexa_/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-outline-variant/40 to-transparent"></div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-on-surface-variant">
            <div className="flex items-center gap-space-xs">
              <span>© 2026 Solvexa. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
