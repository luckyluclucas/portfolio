import * as motion from "motion/react-client";
import { Github } from "lucide-react";
import Link from "next/link";
import ThemeButton from "@/components/changeThemeButton";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import LogoCarousel from "@/components/carouselLogo";
import { Separator } from "@/components/ui/separator";
import AboutMe from "@/components/aboutMe";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import Projects from "@/components/projects";
import { githubProfileLink } from "@/lib/socialMediaLinks";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { HeroNeuralLeft, HeroNeuralRight, MidNeuralLeft, MidNeuralRight, BottomNeural, DeepNeural, LSTMNeural } from "@/components/neuralDecor";

export default function Home() {
  const words = [
    {
      text: "Rean",
      className: "text-4xl md:text-5xl xl:text-6xl tracking-tighter font-black dark:text-white text-neutral-900",
    },
    {
      text: "Lucas",
      className: "text-4xl md:text-5xl xl:text-6xl tracking-tighter font-black dark:text-violet-300 text-violet-600",
    },
  ];

  const carouselItems = [
    { text: "Data Science" },
    { text: "NEXT.JS" },
    { text: "TypeScript" },
    { text: "DevOps" },
    { text: "Node" },
    { text: "Python" },
    { text: "C++" },
    { text: "Ui / Ux" },
    { text: "Web Apis" },
    { text: "PostgreSQL" },
    { text: "Oracle SQL" },
    { text: "Linux" },
    { text: "Docker" },
    { text: "I.A" },
    { text: "Redes Neurais" },
    { text: "AutoEncoders" },
    { text: "LSTM" },
    { text: "SAP" },
    { text: "Prot. Industriais" },
    { text: "HTTP" },
    { text: "OCP / ICCP" },
  ];

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 pointer-events-none">
        <div className="pointer-events-auto">
          <ThemeButton />
        </div>
        <Link href={githubProfileLink} className="pointer-events-auto">
          <motion.div
            className="rounded-full bg-slate-900/80 p-2 border border-white/10 hover:bg-slate-800 transition-colors cursor-pointer"
            whileHover={{ scale: 1.15, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: [0, -8, 8, -4, 4, 0] }}
            transition={{
              rotate: { duration: 3.5, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" },
              scale: { type: "spring", stiffness: 300, damping: 15 },
            }}
          >
            <Github color="white" fill="white" size={20} />
          </motion.div>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b dark:from-black from-zinc-50 to-background overflow-hidden">
        {/* Decorative background — neural network theme */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Ambient glows */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-[520px] h-[520px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(99,102,241,0.13) 0%, transparent 65%)",
            }}
            animate={{ x: [0, 40, 0], y: [0, -25, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(168,85,247,0.10) 0%, transparent 65%)",
            }}
            animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
            transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Neural network clusters — animated */}
          <HeroNeuralLeft className="absolute left-0 top-[8%] w-56 md:w-80 dark:opacity-[0.22] opacity-[0.26] pointer-events-none" />
          <HeroNeuralRight className="absolute right-0 top-[4%] w-52 md:w-72 dark:opacity-[0.22] opacity-[0.26] pointer-events-none" />
          <DeepNeural className="absolute left-[10%] bottom-[5%] w-72 md:w-[28rem] dark:opacity-[0.18] opacity-[0.22] pointer-events-none" />
          <LSTMNeural className="absolute right-[5%] bottom-[15%] w-64 md:w-96 dark:opacity-[0.20] opacity-[0.25] pointer-events-none" />
        </div>

        <div className="relative flex flex-col items-center justify-center px-4 gap-6 text-center pt-20">
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-52 w-52 md:h-64 md:w-64 cursor-pointer rounded-full border hover:scale-95 transition-transform duration-500"
          >
            <GlowingEffect
              spread={40}
              blur={3}
              borderWidth={12}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <Link href={githubProfileLink}>
              <Avatar className="h-full w-full">
                <AvatarImage src="https://avatars.githubusercontent.com//luckyluclucas" />
              </Avatar>
            </Link>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="h-20 md:h-24"
            style={{
              filter: "drop-shadow(0 0 18px rgba(139,92,246,0.65)) drop-shadow(0 0 40px rgba(99,102,241,0.3))",
            }}
          >
            <TypewriterEffectSmooth
              className="mx-auto"
              words={words}
              cursorClassName="md:h-10 h-8 w-[2px] bg-violet-400"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="max-w-2xl text-base md:text-xl dark:text-neutral-300 text-neutral-600 leading-relaxed"
          >
            Engenheiro de Software Full-Stack · Arquiteto de Sistemas de Machine Learning ·
            Especialista em redes neurais, automação industrial e infraestrutura de dados.
            Construo do zero ao deploy — do modelo ao pixel.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <a
              href="#contact"
              className="group relative overflow-hidden cursor-pointer inline-flex items-center gap-2 h-14 text-base py-3 px-8 hover:shadow-xl duration-300 font-semibold rounded-full text-white"
              style={{
                background: "linear-gradient(135deg, #6b7280 0%, #4b5563 100%)",
              }}
            >
              Indisponível no momento
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform duration-200">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <div className="absolute h-[200px] top-[-76px] w-5 bg-gradient-to-r from-white/10 via-white/30 to-white/10 -left-14 -rotate-45 group-hover:left-[150%] group-hover:delay-200 duration-700" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 h-14 text-base py-3 px-6 font-medium rounded-full border border-border dark:border-white/15 hover:bg-accent transition-colors duration-200"
            >
              Ver projetos
            </a>
          </motion.div>

          {/* Scroll arrow */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="pt-4"
          >
            <svg
              className="dark:text-white/30 text-black/25"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <motion.section
        initial={{ y: 40 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true, margin: "-80px" }}
        className="relative py-8 overflow-hidden"
      >
        <MidNeuralLeft className="absolute -left-10 top-0 w-72 md:w-[26rem] dark:opacity-[0.22] opacity-[0.28] pointer-events-none" />
        <MidNeuralRight className="absolute -right-10 top-0 w-72 md:w-[26rem] dark:opacity-[0.22] opacity-[0.28] pointer-events-none" />
        <LSTMNeural className="absolute left-1/4 -bottom-10 w-64 md:w-96 dark:opacity-[0.18] opacity-[0.22] pointer-events-none" />
        <Separator
          orientation="horizontal"
          className="max-w-[90vw] m-auto dark:bg-white/20 bg-black/10 my-8"
        />
        <h2 className="relative text-center z-10 dark:text-white text-2xl m-auto self-center font-semibold mb-4">
          Arsenal técnico
        </h2>
        <div className="overflow-hidden max-w-screen">
          <LogoCarousel items={carouselItems} />
        </div>
      </motion.section>

      <AboutMe />
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </>
  );
}
