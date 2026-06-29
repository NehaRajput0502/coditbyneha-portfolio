import {
  ArrowUpRight,
  Sparkles,
  Moon,
  Timer,
  Leaf,
  Waves,
} from "lucide-react";

const tags = [
  {
    title: "Calm",
    subtitle: "Slow down",
    icon: Moon,
    className: "reset-tag reset-tag-calm",
  },
  {
    title: "Quick",
    subtitle: "Under 1 min",
    icon: Timer,
    className: "reset-tag reset-tag-quick",
  },
  {
    title: "Light",
    subtitle: "No pressure",
    icon: Leaf,
    className: "reset-tag reset-tag-light",
  },
  {
    title: "Relax",
    subtitle: "Breathe",
    icon: Waves,
    className: "reset-tag reset-tag-relax",
  },
];

export default function GamesHub() {
  return (
    <section className="reset-page">
      <style>{resetCss}</style>

      <div className="reset-blob reset-blob-a" />
      <div className="reset-blob reset-blob-b" />

      <div className="reset-content">
        <div className="reset-badge fade-up">
          <Sparkles size={15} />
          Mind Reset Zone
        </div>

        <div className="reset-labels fade-up">
          <span>Breathe In</span>
          <span>Breathe Out</span>
        </div>

        <div className="reset-zone">
          <div className="reset-tags-layer">
            {tags.map((tag) => {
              const Icon = tag.icon;

              return (
                <div key={tag.title} className={tag.className}>
                  <span className="reset-tag-icon">
                    <Icon size={18} />
                  </span>

                  <span>
                    <span className="reset-tag-title">{tag.title}</span>
                    <span className="reset-tag-subtitle">{tag.subtitle}</span>
                  </span>
                </div>
              );
            })}
          </div>

          <div className="reset-orb-wrap" aria-hidden="true">
            <div className="reset-ring" />
            <div className="reset-halo" />
            <div className="reset-core">
              <div className="reset-inner" />
            </div>
          </div>
        </div>

        <p className="reset-subtitle fade-up">
          Explore small reset games when your mind feels ready.
        </p>

        <div className="reset-actions fade-up">
          <a
            href="https://senseboost.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="reset-primary"
          >
            Explore Now <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

const resetCss = `
  .reset-page {
    position: relative;
    min-height: 100svh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: clamp(24px, 5vw, 56px) 18px;
    box-sizing: border-box;
    text-align: center;
    overflow: hidden;
    color: #e7ecf5;
    font-family: ui-sans-serif, -apple-system, "Segoe UI", Roboto, Inter, system-ui, sans-serif;
    background:
      radial-gradient(circle at 18% 12%, rgba(96,165,250,0.18), transparent 28%),
      radial-gradient(circle at 82% 12%, rgba(168,85,247,0.13), transparent 28%),
      radial-gradient(circle at 50% 92%, rgba(34,211,238,0.08), transparent 30%),
      linear-gradient(180deg, #05070d 0%, #03050a 100%);
  }

  .reset-blob {
    position: absolute;
    border-radius: 999px;
    filter: blur(64px);
    pointer-events: none;
    z-index: 0;
  }

  .reset-blob-a {
    left: 8%;
    top: 10%;
    width: clamp(150px, 22vw, 250px);
    height: clamp(150px, 22vw, 250px);
    background: rgba(96,165,250,0.1);
    animation: resetBlobA 10s ease-in-out infinite;
  }

  .reset-blob-b {
    right: 10%;
    top: 8%;
    width: clamp(170px, 26vw, 290px);
    height: clamp(170px, 26vw, 290px);
    background: rgba(168,85,247,0.1);
    animation: resetBlobB 12s ease-in-out infinite;
  }

  .reset-content {
    position: relative;
    z-index: 1;
    width: min(100%, 1120px);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .reset-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,0.1);
    background: rgba(255,255,255,0.05);
    padding: 8px 16px;
    color: #bfdbfe;
    font-size: 14px;
    font-weight: 800;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }

  .reset-labels {
    display: flex;
    width: min(100%, 430px);
    justify-content: space-between;
    padding: 0 12px;
    margin-top: clamp(22px, 4vw, 34px);
    font-size: clamp(9px, 2vw, 11px);
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.42);
    font-weight: 850;
    box-sizing: border-box;
  }

  .reset-zone {
    position: relative;
    width: 100%;
    max-width: 880px;
    height: clamp(190px, 30vw, 290px);
    margin: 6px auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .reset-tags-layer {
    display: none;
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .reset-tag {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 11px 14px;
    border-radius: 16px;
    border: 1px solid rgba(255,255,255,0.09);
    background: rgba(255,255,255,0.05);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .reset-tag-calm {
    left: 5%;
    top: 18%;
    animation: resetFloat1 6s ease-in-out infinite;
  }

  .reset-tag-quick {
    right: 5%;
    top: 22%;
    animation: resetFloat2 7s ease-in-out infinite;
  }

  .reset-tag-light {
    left: 10%;
    bottom: 14%;
    animation: resetFloat3 8s ease-in-out infinite;
  }

  .reset-tag-relax {
    right: 10%;
    bottom: 14%;
    animation: resetFloat4 9s ease-in-out infinite;
  }

  .reset-tag-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 12px;
    background: rgba(96,165,250,0.1);
    color: #bfdbfe;
    flex-shrink: 0;
  }

  .reset-tag-title {
    display: block;
    color: #fff;
    font-weight: 900;
    font-size: 14px;
    text-align: left;
    line-height: 1.1;
  }

  .reset-tag-subtitle {
    display: block;
    color: rgba(255,255,255,0.45);
    font-size: 12px;
    text-align: left;
    line-height: 1.35;
    margin-top: 2px;
  }

  .reset-orb-wrap {
    position: relative;
    width: clamp(175px, 28vw, 265px);
    height: clamp(175px, 28vw, 265px);
  }

  .reset-ring {
    position: absolute;
    inset: 0;
    margin: auto;
    width: 86%;
    height: 86%;
    border-radius: 50%;
    border: 1px solid rgba(147,197,253,0.2);
    animation: resetBreathe 4.5s ease-in-out infinite;
  }

  .reset-halo {
    position: absolute;
    inset: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: rgba(96,165,250,0.12);
    filter: blur(42px);
    animation: resetGlow 4.5s ease-in-out infinite;
  }

  .reset-core {
    position: absolute;
    inset: 0;
    margin: auto;
    width: 48%;
    height: 48%;
    border-radius: 50%;
    background: rgba(147,197,253,0.2);
    box-shadow: 0 0 80px rgba(96,165,250,0.28);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: resetPulseCore 4.5s ease-in-out infinite;
  }

  .reset-inner {
    width: 56%;
    height: 56%;
    border-radius: 50%;
    background: rgba(191,219,254,0.28);
    filter: blur(4px);
    animation: resetPulseInner 4.5s ease-in-out infinite;
  }

  .reset-title {
    margin: clamp(8px, 1.8vw, 16px) 0 0;
    max-width: 950px;
    font-size: clamp(36px, 7vw, 76px);
    font-weight: 950;
    line-height: 0.96;
    letter-spacing: -0.065em;
    color: #fff;
  }

  .reset-title span {
    display: block;
    background: linear-gradient(90deg, #bfdbfe, #ffffff, #a5f3fc);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .reset-subtitle {
    margin: 18px auto 0;
    max-width: 590px;
    font-size: clamp(14px, 2.2vw, 17px);
    line-height: 1.65;
    color: rgba(255,255,255,0.62);
  }

  .reset-actions {
    display: flex;
    justify-content: center;
    margin-top: 24px;
  }

  .reset-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    min-height: 46px;
    border-radius: 999px;
    padding: 12px 21px;
    border: 1px solid rgba(127,231,224,0.65);
    color: #061016;
    background: linear-gradient(135deg, #a5f3fc, #7fe7e0);
    box-shadow: 0 16px 45px rgba(103,232,249,0.16);
    font-size: 14px;
    font-weight: 900;
    text-decoration: none;
    transition: transform 180ms ease, box-shadow 180ms ease;
  }

  .reset-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 55px rgba(103,232,249,0.2);
  }

  .fade-up {
    animation: resetFadeUp 0.8s ease both;
  }

  @media (min-width: 1024px) {
    .reset-tags-layer {
      display: block;
    }
  }

  @media (max-width: 520px) {
    .reset-page {
      padding-left: 14px;
      padding-right: 14px;
    }

    .reset-labels {
      letter-spacing: 0.15em;
    }

    .reset-zone {
      height: clamp(180px, 48vw, 230px);
    }

    .reset-orb-wrap {
      width: clamp(165px, 50vw, 215px);
      height: clamp(165px, 50vw, 215px);
    }

    .reset-title {
      font-size: clamp(34px, 12vw, 48px);
    }

    .reset-primary {
      width: min(100%, 310px);
    }
  }

  @keyframes resetBreathe {
    0%, 100% { transform: scale(1); opacity: 0.75; }
    50% { transform: scale(1.16); opacity: 1; }
  }

  @keyframes resetGlow {
    0%, 100% { transform: scale(1); opacity: 0.16; }
    50% { transform: scale(1.26); opacity: 0.34; }
  }

  @keyframes resetPulseCore {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.14); }
  }

  @keyframes resetPulseInner {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(0.8); }
  }

  @keyframes resetFloat1 {
    0%, 100% { transform: translate(0,0); }
    50% { transform: translate(6px,-8px); }
  }

  @keyframes resetFloat2 {
    0%, 100% { transform: translate(0,0); }
    50% { transform: translate(-6px,8px); }
  }

  @keyframes resetFloat3 {
    0%, 100% { transform: translate(0,0); }
    50% { transform: translate(-5px,7px); }
  }

  @keyframes resetFloat4 {
    0%, 100% { transform: translate(0,0); }
    50% { transform: translate(5px,-7px); }
  }

  @keyframes resetBlobA {
    0%, 100% { transform: translate(0,0); }
    50% { transform: translate(18px,-18px); }
  }

  @keyframes resetBlobB {
    0%, 100% { transform: translate(0,0); }
    50% { transform: translate(-18px,22px); }
  }

  @keyframes resetFadeUp {
    from {
      opacity: 0;
      transform: translateY(16px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .reset-ring,
    .reset-halo,
    .reset-core,
    .reset-inner,
    .reset-tag,
    .reset-blob,
    .fade-up {
      animation: none !important;
    }
  }
`;