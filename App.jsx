import React from "react";
import { motion } from "framer-motion";
import {
  Recycle,
  Shirt,
  HeartHandshake,
  Users,
  Music,
  Drama,
  Camera,
  BookOpen,
  Megaphone,
  MapPin,
  CalendarDays,
  Clock3,
  ArrowRight,
  Sparkles,
  MessageCircle,
  Instagram,
  Mail,
  HandHelping,
  Palette,
} from "lucide-react";

const siteConfig = {
  instagramUrl: "https://www.instagram.com/revesterua/",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Travessa+Manuel+Oliveira+173,+Mutondo,+S%C3%A3o+Gon%C3%A7alo",
  meetingDate: "1º de maio de 2026",
  meetingTime: "15h",
  meetingAddress: "Travessa Manuel Oliveira, 173 — Mutondo, São Gonçalo",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Tag({ children }) {
  return <span className="tag">{children}</span>;
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="section-title">
      <div className="eyebrow">
        <Sparkles size={16} />
        {eyebrow}
      </div>
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  );
}

function InfoCard({ icon: Icon, title, text, tone }) {
  return (
    <div className={`card tone-${tone}`}>
      <div className="icon-wrap">
        <Icon size={24} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function MenuLink({ href, children }) {
  return <a href={href} className="menu-link">{children}</a>;
}

function CtaButton({ href, children, variant = "primary", external = false }) {
  return (
    <a
      href={href}
      className={`btn btn-${variant}`}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />
      <div className="bg-orb orb-3" />

      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand-lockup">
            <div className="brand-badge">
              <div className="brand-core">RR</div>
            </div>
            <div>
              <div className="brand-name">
                <span className="purple">Re</span>
                <span className="green">Veste</span>
                <span className="orange"> Rua</span>
              </div>
              <div className="brand-sub">Cultura Circular de Base</div>
            </div>
          </div>

          <nav className="menu">
            <MenuLink href="#inicio">Início</MenuLink>
            <MenuLink href="#quem-somos">Quem somos</MenuLink>
            <MenuLink href="#acoes">Ações</MenuLink>
            <MenuLink href="#brecho">Brechó</MenuLink>
            <MenuLink href="#varal">Varal</MenuLink>
            <MenuLink href="#multilinguagens">Multilinguagens</MenuLink>
            <MenuLink href="#participar">Como participar</MenuLink>
            <MenuLink href="#encontro">1º encontro</MenuLink>
            <MenuLink href="#contato">Contato</MenuLink>
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="container hero-grid">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
              <Tag>Chega mais! 💚</Tag>
              <h1 className="hero-title">
                <span className="purple">Cultura</span>
                <br />
                <span className="orange">que veste</span>
                <br />
                <span className="green">o território</span>
              </h1>
              <p className="hero-text">
                O <strong>ReVeste Rua</strong> é um coletivo cultural comunitário que nasce no Mutondo, em São Gonçalo, com identidade na <strong>cultura circular de base</strong> e com vocação <strong>multilinguagens</strong>. O coletivo articula reuso, brechó cultural, varal solidário, escuta, encontro, criação e ação comunitária como formas de fortalecer o território por meio da cultura.
              </p>

              <div className="button-row">
                <CtaButton href="#quem-somos">
                  Conhecer o coletivo <ArrowRight size={18} />
                </CtaButton>
                <CtaButton href={siteConfig.instagramUrl} variant="secondary" external>
                  Instagram do coletivo
                </CtaButton>
              </div>

              <div className="tag-row">
                <Tag>Brechó cultural</Tag>
                <Tag>Varal solidário</Tag>
                <Tag>Multilinguagens</Tag>
              </div>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7, delay: 0.1 }}>
              <div className="hero-poster">
                <div className="hero-gradient">
                  <div className="hero-panel">
                    <div className="round-logo">
                      <span className="purple">Re</span>
                      <span className="green">V</span>
                      <span className="green">este</span>
                      <span className="orange"> Rua</span>
                    </div>
                    <h3>Cultura Circular de Base</h3>
                    <p>Um espaço vivo de encontro, escuta, troca, criação e participação.</p>
                    <div className="mini-grid">
                      <div>♻️ Cultura circular</div>
                      <div>👕 Brechó cultural</div>
                      <div>🫶 Varal solidário</div>
                      <div>🎭 Multilinguagens</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="quem-somos" className="section">
          <div className="container">
            <SectionTitle
              eyebrow="Quem somos"
              title="Um coletivo com cara, cor e propósito"
              subtitle="A identidade central do ReVeste Rua está na cultura circular de base: reuso de roupas, brechó cultural, ações solidárias, mobilização comunitária e fortalecimento do território. A partir desse eixo, o coletivo constrói uma presença cultural viva, acessível e conectada com a realidade da comunidade."
            />

            <div className="grid grid-4">
              <InfoCard icon={Recycle} title="Cultura circular de base" text="O reuso vira linguagem, cuidado e potência no território." tone="green" />
              <InfoCard icon={Shirt} title="Brechó cultural" text="Roupas, estética, criatividade e circulação de sentidos." tone="orange" />
              <InfoCard icon={HeartHandshake} title="Ações solidárias" text="Varal solidário, escuta e mobilização comunitária." tone="purple" />
              <InfoCard icon={Users} title="Espaço de encontro" text="Troca, convivência, criação e participação coletiva." tone="yellow" />
            </div>

            <div className="split-grid">
              <div className="dark-panel">
                <div className="pill-dark">Nossa vibe</div>
                <h3>Cultura não é só palco</h3>
                <p>
                  Aqui, a roupa pode virar linguagem, o brechó pode virar experiência cultural, a solidariedade pode virar mobilização e a sede pode virar ponto de convivência comunitária.
                </p>
              </div>

              <div className="mini-cards">
                {[
                  "Cultura de base feita com a comunidade e para a comunidade",
                  "Economia circular com criatividade e responsabilidade",
                  "Ações culturais, sociais e formativas conectadas com o território",
                  "Construção de um espaço acolhedor, aberto e participativo",
                ].map((item) => (
                  <div key={item} className="mini-card">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="acoes" className="section">
          <div className="container">
            <SectionTitle
              eyebrow="Ações do coletivo"
              title="O que já move e o que ainda vai crescer"
              subtitle="O ReVeste Rua nasce com ações que combinam cultura, cuidado, circulação, escuta e presença real no território, buscando transformar práticas cotidianas em experiências culturais comunitárias."
            />
            <div className="grid grid-4">
              <InfoCard icon={Shirt} title="Brechó Cultural" text="Mais do que roupa: uma experiência cultural com estética, memória e circularidade." tone="orange" />
              <InfoCard icon={HeartHandshake} title="Varal Solidário" text="Cuidado com o território por meio da partilha e da dignidade." tone="green" />
              <InfoCard icon={Users} title="Rodas de conversa" text="Escuta, trocas e diálogos sobre questões que atravessam a comunidade." tone="purple" />
              <InfoCard icon={MapPin} title="Ações no território" text="Presença real, mobilização e fortalecimento de vínculos locais." tone="yellow" />
            </div>
          </div>
        </section>

        <section id="brecho" className="section">
          <div className="container two-col">
            <div>
              <Tag>Brechó Cultural</Tag>
              <h2 className="subsection-title">Reuso com estética, memória e criatividade</h2>
              <p className="subsection-text">
                O brechó cultural do ReVeste Rua não se limita à circulação de peças. Ele articula roupa, identidade, expressão, economia circular e convivência comunitária. Cada peça carrega história, possibilidade de reinvenção e potência cultural, fortalecendo a proposta do coletivo de transformar o reuso em linguagem e presença no território.
              </p>
              <div className="bullet-grid">
                {["Reuso com propósito", "Curadoria de peças", "Moda circular e criatividade", "Fortalecimento das ações do coletivo"].map((item) => (
                  <div key={item} className="mini-card">{item}</div>
                ))}
              </div>
            </div>
            <div className="gradient-panel orange-panel">
              <Palette size={40} />
              <h3>Roupa também é linguagem</h3>
              <p>Aqui, o reuso ganha sentido cultural e comunitário. O brechó vira lugar de circulação de histórias, estética popular, criatividade e pertencimento.</p>
            </div>
          </div>
        </section>

        <section id="varal" className="section">
          <div className="container two-col reverse-mobile">
            <div className="gradient-panel green-panel">
              <HandHelping size={40} />
              <h3>Solidariedade com dignidade</h3>
              <p>O Varal Solidário é uma ação de partilha e cuidado com o território. A gente acredita que acolhimento, escuta e dignidade também fazem cultura.</p>
            </div>
            <div>
              <Tag>Varal Solidário</Tag>
              <h2 className="subsection-title">Partilha, cuidado e presença real</h2>
              <p className="subsection-text">
                O Varal Solidário conecta solidariedade e cultura comunitária. Ele nasce como gesto de cuidado, mas também como ferramenta de mobilização, encontro e escuta do território, reafirmando que dignidade, partilha e acolhimento também são formas de ação cultural.
              </p>
              <div className="bullet-grid">
                {[
                  "Recebimento e triagem de doações",
                  "Distribuição com prioridade para quem mais precisa",
                  "Registro e memória das ações",
                  "Ação social articulada à cultura de base",
                ].map((item) => (
                  <div key={item} className="mini-card">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="multilinguagens" className="section">
          <div className="container">
            <SectionTitle
              eyebrow="Sim, somos multilinguagens"
              title="Aqui cabe criação, encontro e diversidade cultural"
              subtitle="Mesmo tendo como eixo central a cultura circular de base, o ReVeste Rua acolhe e valoriza diferentes formas de expressão cultural e artística, entendendo que a diversidade de linguagens amplia sua capacidade de criação, mobilização e atuação comunitária."
            />

            <div className="grid grid-3">
              <InfoCard icon={Music} title="Música" text="Vivências, apresentações, rodas e encontros sonoros." tone="purple" />
              <InfoCard icon={Drama} title="Artes cênicas" text="Teatro, performance, intervenção e presença corporal." tone="orange" />
              <InfoCard icon={Camera} title="Fotografia e audiovisual" text="Registro, memória, comunicação e expressão visual." tone="green" />
              <InfoCard icon={BookOpen} title="Literatura" text="Poesia, leitura, escrita, oralidade e formação." tone="yellow" />
              <InfoCard icon={Shirt} title="Moda e reuso" text="Roupas, estética, circularidade e criatividade." tone="pink" />
              <InfoCard icon={Megaphone} title="Produção cultural" text="Organização, comunicação e articulação de ações e encontros." tone="mint" />
            </div>

            <div className="big-quote">
              <p>
                A diversidade de linguagens <span className="orange">não bagunça</span> o coletivo — <span className="green">amplia a nossa força</span>.
              </p>
            </div>
          </div>
        </section>

        <section id="participar" className="section">
          <div className="container">
            <SectionTitle
              eyebrow="Como participar"
              title="Quem pode chegar junto?"
              subtitle="Pessoas que acreditam na força da cultura comunitária, topam construir em grupo e desejam fortalecer o território com criatividade, compromisso, escuta e responsabilidade coletiva."
            />

            <div className="grid grid-2">
              <div className="gradient-panel purple-panel">
                <h3>Perfis que combinam com o coletivo</h3>
                <ul className="white-list">
                  <li>Quem curte construir em grupo</li>
                  <li>Quem respeita processos coletivos</li>
                  <li>Quem soma com criatividade e compromisso</li>
                  <li>Quem entende a importância do território e da comunidade</li>
                </ul>
              </div>

              <div className="gradient-panel orange-panel">
                <h3>Pontos de atenção</h3>
                <ul className="white-list">
                  <li>O coletivo é aberto, mas precisa de compromisso e responsabilidade</li>
                  <li>Participar não é só estar no nome</li>
                  <li>Escuta, organização e registro fazem parte da caminhada</li>
                  <li>Diversidade, sem perder a identidade central do ReVeste Rua</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="encontro" className="section">
          <div className="container">
            <div className="meeting-shell">
              <div className="meeting-card">
                <SectionTitle
                  eyebrow="1º encontro do ReVeste Rua"
                  title="Vem trocar ideia com a gente"
                  subtitle="Encontro voltado aos membros que estão iniciando o coletivo e a agentes culturais interessados em conhecer, somar e construir essa caminhada desde o começo."
                />

                <div className="grid grid-3">
                  <div className="meeting-item tone-purple">
                    <CalendarDays size={32} />
                    <div>{siteConfig.meetingDate}</div>
                  </div>
                  <div className="meeting-item tone-green">
                    <Clock3 size={32} />
                    <div>{siteConfig.meetingTime}</div>
                  </div>
                  <div className="meeting-item tone-orange">
                    <MapPin size={32} />
                    <div>{siteConfig.meetingAddress}</div>
                  </div>
                </div>

                <div className="agenda-box">
                  <h4>Pauta sugerida</h4>
                  <ul>
                    <li>⭐ acolhida e apresentação</li>
                    <li>⭐ quem somos e onde queremos chegar</li>
                    <li>⭐ organização inicial do coletivo</li>
                    <li>⭐ brechó cultural, varal solidário e multilinguagens</li>
                  </ul>
                </div>

                <div className="button-row center">
                  <CtaButton href={siteConfig.instagramUrl} external>
                    Confirmar interesse pelo Instagram <ArrowRight size={18} />
                  </CtaButton>
                  <CtaButton href={siteConfig.mapsUrl} variant="secondary" external>
                    Abrir local no mapa
                  </CtaButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="section">
          <div className="container">
            <SectionTitle
              eyebrow="Contato e redes"
              title="Fala com a gente e acompanha o corre"
              subtitle="O ReVeste Rua está só começando. Quem quiser acompanhar, somar, fortalecer ações ou simplesmente conhecer melhor o coletivo, pode chegar junto e caminhar com a gente desde essa etapa inaugural."
            />

            <div className="grid grid-3">
              <div className="card neutral">
                <div className="icon-wrap"><Instagram size={24} /></div>
                <h3>Instagram</h3>
                <p>Acompanha os primeiros conteúdos, convites e movimentos do coletivo.</p>
                <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" className="contact-link">@revesterua</a>
              </div>

              <div className="card neutral">
                <div className="icon-wrap"><MessageCircle size={24} /></div>
                <h3>Participação</h3>
                <p>Quer entrar, colaborar, apoiar ou indicar alguém? Chega junto.</p>
                <div className="small-strong">Membros • agentes culturais • parceiros</div>
              </div>

              <div className="card neutral">
                <div className="icon-wrap"><Mail size={24} /></div>
                <h3>Território</h3>
                <p>Mutondo, São Gonçalo — cultura de base, presença e construção coletiva.</p>
                <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer" className="contact-link">Ver localização no mapa</a>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer-cta">
          <div className="container">
            <div className="footer-card">
              <div>
                <div className="pill-dark">Se identificou?</div>
                <h3>Então chega mais e vem construir com a gente.</h3>
                <p>
                  O ReVeste Rua é um espaço aberto de encontro, criação, escuta e ação comunitária. A diversidade é bem-vinda, desde que venha acompanhada de compromisso, responsabilidade e presença real na construção do coletivo.
                </p>
              </div>
              <div className="footer-side">
                <div className="footer-small-title">Resumo no papo reto</div>
                <div className="footer-list">
                  <div>• coletivo cultural comunitário</div>
                  <div>• cultura circular de base</div>
                  <div>• brechó cultural e varal solidário</div>
                  <div>• multilinguagens</div>
                  <div>• Mutondo | São Gonçalo</div>
                </div>
                <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" className="footer-link">
                  Abrir Instagram <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
