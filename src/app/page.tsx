import * as motion from "motion/react-client"
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

export default function Home() {
const carouselItems = [
  { text: "NEXT.JS",}, 
  { text: "TYPESCRIPT"},
  { text: "Javascript"},
  { text: "Node"},
  { text: "Express"},
  { text: "Shadcn UI"},
  { text: "Motion"},
  { text: "Apis rest", },
  { text: "PostgresSQL"},
  { text: "Tailwind"},
  { text: "Linux"},
  { text: "React"},
  { text: "Docker"},
];
  return (
    <>
    <div className="bg-gradient-to-b dark:from-black from-zinc-400 to-bg-background gap-2">
      <ThemeButton />
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.6,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="relative mt-16 transition-transform ease-in-out duration-300 md:hover:scale-95 cursor-pointer h-60 w-60 transition-transform ease-in-out duration-500 rounded-full border p-0 z-10">
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
          <Avatar className="h-60 w-60">
            <AvatarImage src="https://avatars.githubusercontent.com//luckyluclucas" />
          </Avatar>
          </Link>
        </div>
        <h1 className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          rean lucas 
        </h1>
        <div className="md:indent-4 md:leading-12 md:mx-22 text-base text-center md:text-4xl dark:text-neutral-200 py-4">
          Desenvolvedor FullStack, viciado em tech desde sempre e entusiasta de sistemas Linux nas horas vagas, Fluente em Inglês e códigos
        </div>
        
        <Link download href="/Curriculo.pdf" className="cursor-pointer bg-slate-900/40 group overflow-hidden h-16 text-center text-lg py-4 px-6  relative hover:shadow-xl hover:ring-1 dark:hover:ring-zinc-200/60 duration-300 font-semibold dark:bg-slate-900 rounded-full w-fit text-white ">
          Currículo 
          <div className="absolute h-[200px] top-[-76] w-5 bg-gradient-to-r from-white/10
           via-white/50 to-white-10 -left-14 -rotate-45 blur-sm group-hover:left-[150%] group-hover:delay-200 duration-700"></div>
        </Link>

      </motion.div>
     <Link
     href={githubProfileLink}
     className="absolute top-1 right-1 rounded-full bg-slate-900/50 p-2"
     >
        <Github color="white" fill="white"/> 
      </Link>
    
    </div>
    <motion.div
      initial={{ opacity: 0.0, }}
      whileInView={{ opacity: 1,}}
      transition={{
        delay: 0.2,
        duration: 0.4,
        ease: "easeInOut",
      }}
      viewport={{ once: true}}
    >
      <Separator orientation="horizontal" className="max-w-[90vw] m-auto dark:bg-white/50 z-10 my-12 relative" />
      <h2 className="relative text-center z-10 dark:text-white text-2xl m-auto self-center font-semibold">Minha stack</h2>
      <div className="overflow-hidden max-w-screen">
        <LogoCarousel items={carouselItems} animate /> 
      </div>
    </motion.div>
    <AboutMe />
    <Projects />
    <Contact />
    <Footer />
    </>
  );
}
