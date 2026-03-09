"use client"
import { Separator } from "@/components/ui/separator"
import { MidNeuralRight, BottomNeural, DeepNeural, LSTMNeural } from "@/components/neuralDecor"
import { SiTypescript, SiPostgresql, SiReact, SiSap, SiCplusplus } from "react-icons/si";
import {
  FaDocker, FaPython, FaGit, FaLinux, FaNodeJs,
  FaBrain, FaRobot, FaSitemap, FaLayerGroup, FaHistory,
  FaChartBar, FaCogs, FaPaintBrush, FaGlobe, FaDatabase,
  FaIndustry, FaPlug, FaNetworkWired,
  FaWhatsapp, FaLinkedin, FaGithub,
} from "react-icons/fa";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState, useRef, useEffect, ElementType } from "react";
import * as motion from "motion/react-client"
import { githubProfileLink, linkedinProfileLink, whatsappLink } from "@/lib/socialMediaLinks";

type SkillItem = {
  icon: ElementType
  label: string
  text: string
}

const skills: SkillItem[] = [
  {
    icon: FaLinux,
    label: "Linux",
    text: "Entusiasta de sistemas Linux, mas alterno todo dia entre windows e linux.",
  },
  {
    icon: FaNodeJs,
    label: "Node.js",
    text: "Runtime JavaScript server-side amplamente utilizado para APIs, microsserviços e ferramentas CLI. Aposentei para ficar no Python World.",
  },
  {
    icon: SiTypescript,
    label: "TypeScript",
    text: "Superset tipado de JavaScript que uso como linguagem principal em projetos web. Tipos estáticos eliminam classes inteiras de bugs em runtime.",
  },
  {
    icon: SiPostgresql,
    label: "PostgreSQL",
    text: "Banco de dados relacional open source que eu toco em alguns projetos. Confiável, extensível e com suporte robusto a JSON, índices avançados e transações.",
  },
  {
    icon: FaDocker,
    label: "Docker",
    text: "Containerização de aplicações e bancos de dados para ambientes reprodutíveis em desenvolvimento e produção. Um need to have hoje em dia.",
  },
  {
    icon: FaGit,
    label: "Git",
    text: "Controle de versão distribuído utilizado em 100% dos meus projetos. Branching strategies, rebase, cherry-pick e gestão de conflitos.",
  },
  {
    icon: FaPython,
    label: "Python",
    text: "Linguagem principal para data science, machine learning e automação. Uso em pipelines de dados, treinamento de modelos e back-end com Flask.",
  },
  {
    icon: FaBrain,
    label: "Machine Learning",
    text: "Implementação de modelos supervisionados e não-supervisionados: LSTM Autoencoder, Random Forest, regressão e clustering para análise preditiva.",
  },
  {
    icon: SiReact,
    label: "React / Next.js",
    text: "Ecossistema JS/TS completo: React para interfaces reativas e componentização, Next.js para SSR/SSG, roteamento server-side e API routes integradas. Aposentei para o Python World",
  },
  {
    icon: FaChartBar,
    label: "Data Science",
    text: "Análise exploratória, visualização de dados, feature engineering e modelagem estatística para extração de insights a partir de datasets reais.",
  },
  {
    icon: FaCogs,
    label: "DevOps",
    text: "Pipelines CI/CD, gestão de infraestrutura como código, automação de deploys e monitoramento de sistemas em ambientes de produção.",
  },
  {
    icon: SiCplusplus,
    label: "C++",
    text: "Linguagem para sistemas embarcados, drivers e aplicações com requisitos críticos de performance. Base sólida em ponteiros, memória e STL. Já brinquei mas não uso profissionalmente",
  },
  {
    icon: FaPaintBrush,
    label: "UI / UX",
    text: "Design de interfaces centrado no usuário, prototipagem, sistemas de design e implementação de layouts responsivos e acessíveis.",
  },
  {
    icon: FaGlobe,
    label: "Web APIs",
    text: "Desenvolvimento e consumo de APIs RESTful com autenticação JWT, versionamento de endpoints, rate limiting e documentação OpenAPI.",
  },
  {
    icon: FaDatabase,
    label: "Oracle SQL",
    text: "Banco de dados relacional corporativo amplamente utilizado em ambientes industriais e integrado ao SAP. Experiência com queries complexas e PL/SQL.",
  },
  {
    icon: FaRobot,
    label: "I.A",
    text: "Aplicação de algoritmos de inteligência artificial para automação de decisões, previsão de falhas, reconhecimento de padrões e otimização de processos.",
  },
  {
    icon: FaSitemap,
    label: "Redes Neurais",
    text: "Arquiteturas de deep learning: feedforward, CNN, RNN e suas variantes. Treinamento, regularização, otimização e avaliação de modelos em PyTorch.",
  },
  {
    icon: FaLayerGroup,
    label: "AutoEncoders",
    text: "Redes encoder-decoder para aprendizado não-supervisionado de representações latentes. Aplicadas em compressão de dados e detecção de anomalias por erro de reconstrução.",
  },
  {
    icon: FaHistory,
    label: "LSTM",
    text: "Long Short-Term Memory para modelagem de dependências temporais longas em séries temporais multivariadas — vibração, temperatura e corrente elétrica.",
  },
  {
    icon: SiSap,
    label: "SAP",
    text: "Experiência com integração e operação de módulos SAP em ambientes industriais e corporativos, incluindo consulta e extração de dados.",
  },
  {
    icon: FaIndustry,
    label: "Prot. Industriais",
    text: "Protocolos de comunicação industrial: Modbus, DNP3, IEC 61850 e outros padrões de automação utilizados em sistemas SCADA e subestações.",
  },
  {
    icon: FaNetworkWired,
    label: "HTTP",
    text: "Domínio completo do protocolo HTTP/HTTPS: métodos, headers, status codes, cache, CORS, REST e WebSockets para comunicação em tempo real.",
  },
  {
    icon: FaPlug,
    label: "OCP / ICCP",
    text: "Inter-Control Center Communications Protocol (ICCP/TASE.2) para interoperabilidade entre centros de controle em redes de energia elétrica e sistemas SCADA.",
  },
]

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState("Linux")

  // RAF-based infinite scroll — same approach as the skills carousel at the top.
  // Two identical copies: when |x| reaches scrollWidth/2 we reset to 0.
  // At that exact pixel the visual content is indistinguishable → zero flash.
  const trackRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)
  const xRef = useRef(0)
  const pausedRef = useRef(false)
  const doubled = [...skills, ...skills]

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const tick = () => {
      if (!pausedRef.current) {
        xRef.current -= 0.45
        const half = track.scrollWidth / 2
        if (Math.abs(xRef.current) >= half) xRef.current = 0
        track.style.transform = `translate3d(${xRef.current}px, 0, 0)`
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  const socialLinks = [
    { Icon: FaLinkedin, label: "LinkedIn", href: linkedinProfileLink },
    { Icon: FaGithub, label: "GitHub", href: githubProfileLink },
    { Icon: FaWhatsapp, label: "WhatsApp — (41) 9 8474-8437", href: whatsappLink },
  ]

  return (
    <div className="overflow-hidden relative">
      <MidNeuralRight className="absolute -right-8 top-10 w-72 md:w-[30rem] dark:opacity-[0.20] opacity-[0.25] pointer-events-none" />
      <BottomNeural className="absolute -left-8 bottom-0 w-72 md:w-[34rem] dark:opacity-[0.20] opacity-[0.25] pointer-events-none" />
      <DeepNeural className="absolute right-1/4 bottom-0 w-72 md:w-[32rem] dark:opacity-[0.14] opacity-[0.18] pointer-events-none" />
      <LSTMNeural className="absolute left-1/3 top-1/2 w-56 md:w-80 dark:opacity-[0.14] opacity-[0.18] pointer-events-none" />
      <motion.div
        initial={{ y: 60 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative"
      >
        <div className="w-full max-w-7xl p-6 mx-auto flex flex-col gap-6">
          <Separator orientation="horizontal" className="dark:bg-white/20 bg-black/10 h-[1px] w-full" />
          <h2 className="text-3xl font-bold">Sobre Mim</h2>
          <Separator orientation="horizontal" className="dark:bg-white/20 bg-black/10 h-[1px] w-full" />

          {/* Bio + Social Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ x: -40 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: "-80px" }}
              className="md:col-span-2 rounded-2xl border border-border dark:border-white/10 p-6 bg-muted/40 dark:bg-white/5 leading-8 text-muted-foreground"
            >
              <p className="mb-4">
                Tecnologia não é minha profissão — é minha linguagem nativa. Desde criança desmontando hardware até arquitetar sistemas de ML em produção, cada layer desta stack foi dominada por necessidade, não por currículo.
                Transito com naturalidade entre Python para modelagem de redes neurais, TypeScript para interfaces reativas e protocolos industriais como ICCP/TASE.2 — porque um verdadeiro engenheiro não escolhe um domínio, domina todos os que o problema exige.
              </p>
              <p>
                Cursando Análise e Desenvolvimento de Sistemas na PUC-Paraná e com experiência prática em ambientes industriais críticos (SAP, SCADA, subestações), minha vantagem não é conhecer as ferramentas — é saber exatamente qual ferramenta resolve cada problema em menos tempo e com mais precisão.
                Implemento, otimizo e entrego. Do zero ao deploy.
              </p>
            </motion.div>

            <div className="flex flex-col gap-3">
              {socialLinks.map(({ Icon, label, href }, i) => (
                <motion.div
                  key={label}
                  initial={{ x: 30 }}
                  whileInView={{ x: 0 }}
                  transition={{ delay: i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true, margin: "-60px" }}
                  whileHover={{ x: 4 }}
                >
                  <Link
                    href={href}
                    target="_blank"
                    className="flex items-center gap-3 rounded-xl border border-border dark:border-white/10 p-4 bg-muted/40 dark:bg-white/5 hover:bg-accent transition-all duration-200"
                  >
                    <Icon size={22} className="shrink-0" />
                    <span className="font-medium text-sm">{label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Icon carousel — RAF-based, no Embla, no loop glitch */}
          <div
            className="overflow-hidden py-2"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            }}
            onMouseEnter={() => { pausedRef.current = true }}
            onMouseLeave={() => { pausedRef.current = false }}
          >
            <div ref={trackRef} className="flex w-max will-change-transform gap-1">
              {doubled.map(({ icon: Icon, label }, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(label)}
                  className={`
                    shrink-0 w-24 rounded-xl cursor-pointer p-3 flex flex-col items-center gap-2 text-center
                    ${label === activeTab
                      ? "bg-accent border border-border dark:border-white/20"
                      : "border border-transparent hover:bg-accent/40"
                    }
                    transition-colors duration-200
                  `}
                >
                  <Icon size={34} />
                  <p className="text-[10px] font-semibold leading-tight">{label}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Description panel */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full dark:bg-background/50 overflow-x-auto scrollbar-hide h-auto flex-wrap">
              {skills.map(({ label }) => (
                <TabsTrigger
                  key={label}
                  value={label}
                  className={`${label === activeTab ? "bg-accent scale-105" : "hidden md:flex"} transition-all duration-200`}
                >
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
            {skills.map(({ label, text }) => (
              <TabsContent key={label} value={label}>
                <div className="p-8 text-lg text-center leading-8 rounded-2xl border border-border dark:border-white/10 bg-muted/40 dark:bg-white/5">
                  {text}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </motion.div>
    </div>
  )
}
