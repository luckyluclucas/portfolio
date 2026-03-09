"use client"
import * as motion from "motion/react-client"
import { Separator } from "./ui/separator"
import { HeroNeuralLeft, MidNeuralRight, LSTMNeural, DeepNeural } from "@/components/neuralDecor"
import { FaLock, FaPython } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { SiFlask, SiPytorch, SiNumpy, SiPlotly } from "react-icons/si";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { ElementType } from "react";

type Project = {
  title: string
  category: string
  description: string
  icons: { Icon: ElementType, label: string }[]
  githubUrl: string
  hasSource: boolean
}

const projects: Project[] = [
  {
    title: "Detecção de Anomalias Industriais",
    category: "Machine Learning / IoT",
    description:
      "Sistema de monitoramento preditivo não-supervisionado baseado em LSTM Autoencoder implementado em PyTorch para detecção de falhas em equipamentos industriais. O encoder comprime séries temporais multivariadas de vibração, temperatura e corrente elétrica em representação latente de baixa dimensão; o decoder as reconstrói, e desvios no erro de reconstrução (MSE) acima do limiar percentil calibrado sinalizam anomalia iminente. API REST em Flask serve inferência em tempo real e persiste histórico de eventos detectados. Frontend interativo em Plotly exibe dashboards com séries temporais sobrepostas ao envelope de normalidade, heatmaps do erro de reconstrução por canal e alertas dinâmicos. Pré-processamento, janelamento temporal e feature engineering realizados com NumPy.",
    icons: [
      { Icon: FaPython, label: "Python" },
      { Icon: SiPytorch, label: "PyTorch" },
      { Icon: SiFlask, label: "Flask" },
      { Icon: SiPlotly, label: "Plotly" },
      { Icon: SiNumpy, label: "NumPy" },
    ],
    githubUrl: "",
    hasSource: false,
  },
  {
    title: "Outros Projetos",
    category: "Confidencial",
    description:
      "Os outros projetos são confidenciais e não podem ser disponibilizados por questões tanto éticas quanto profissionais. Entre em contato para mais informações.",
    icons: [{ Icon: VscCode, label: "Código" }],
    githubUrl: "",
    hasSource: false,
  },
]

export default function Projects() {
  return (
    <div className="w-full overflow-x-hidden bg-background mx-auto relative">
      <HeroNeuralLeft className="absolute -left-10 top-0 w-72 md:w-[28rem] dark:opacity-[0.20] opacity-[0.25] pointer-events-none" />
      <MidNeuralRight className="absolute -right-10 bottom-0 w-72 md:w-[28rem] dark:opacity-[0.20] opacity-[0.25] pointer-events-none" />
      <LSTMNeural className="absolute left-1/4 top-1/2 w-64 md:w-[26rem] dark:opacity-[0.14] opacity-[0.18] pointer-events-none" />
      <DeepNeural className="absolute right-1/4 -bottom-10 w-72 md:w-[30rem] dark:opacity-[0.14] opacity-[0.18] pointer-events-none" />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl w-full mx-auto flex flex-col gap-6 px-6 py-10"
      >
        <Separator orientation="horizontal" className="dark:bg-white/20 bg-black/10 h-[1px] w-full" />
        <h2 className="text-3xl font-bold">Meus Projetos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className="group relative rounded-2xl border border-border dark:border-white/10 bg-muted/40 dark:bg-white/5 p-6 flex flex-col gap-4 overflow-hidden"
            >
              {/* Hover accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold mt-0.5">{project.title}</h3>
                </div>
                <div className="flex items-center gap-2 shrink-0 flex-wrap justify-end max-w-[140px]">
                  {project.icons.map(({ Icon, label }, i) => (
                    <div
                      key={i}
                      title={label}
                      className="p-2 rounded-lg dark:bg-white/8 bg-black/5 hover:bg-accent transition-colors cursor-default"
                    >
                      <Icon size={15} />
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="dark:bg-white/10 bg-black/10 h-[1px]" />

              <p className="text-sm text-muted-foreground leading-7 flex-1">
                {project.description}
              </p>

              {project.hasSource ? (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  className="flex items-center gap-2 w-fit text-sm font-medium hover:underline underline-offset-4 mt-auto group/link"
                >
                  <ExternalLink size={14} />
                  Ver no GitHub
                  <ExternalLink size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                </Link>
              ) : (
                <div className="flex items-center gap-2 w-fit text-sm text-muted-foreground mt-auto">
                  <FaLock size={13} />
                  Código privado
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
