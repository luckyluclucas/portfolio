"use client"
import { Separator } from "@radix-ui/react-separator"
import { SiTypescript, SiPostgresql, SiNextdotjs, SiJavascript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaDocker, FaGit, FaLinux, FaNodeJs, FaWordpress, FaReact } from "react-icons/fa";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from "react"; 
import AutoScroll from 'embla-carousel-auto-scroll'
import * as motion from "motion/react-client"
import { easeInOut } from "motion/react";
import { githubProfileLink, linkedinProfileLink, whatsappLink } from "@/lib/socialMediaLinks";

export default function AboutMe(){

    const [ activeTab, setActiveTab] = useState("Linux")

    const iconsValues = [
        { icon: FaLinux, label: "Linux" },
        { icon: FaNodeJs, label: "Node" },
        { icon: FaWordpress, label: "WordPress" },
        { icon: FaReact, label: "React" },
        { icon: RiTailwindCssFill, label: "TailWindCss" },
        { icon: SiTypescript, label: "TypeScript" },
        { icon: SiPostgresql, label: "PostgresSQL" },
        { icon: SiNextdotjs, label: "Next.js" },
        { icon: SiJavascript, label: "JavaScript" },
        { icon: FaDocker, label: "Docker"},
        { icon: FaGit, label: "Git"}
    ]

    const iconsDescriptions: Record<string, string> = {
        "Linux":"Entusiasta de sistemas Linux, meu daily drive é um arch",
        "Node": "Possuo uma boa familiaridade com o runtime do Node.js",
        "WordPress": "Já entreguei projetos com wordpress, apesar de não ser minha principal ferramenta / área de especialização",
        "Docker": "Costumo utilizar containers Docker para executar tanto o banco de dados PostgreSQL quanto as aplicações que desenvolvo.",
        "JavaScript": "Atualmente minha segunda linguagem de escolha, acabo sempre optando por typescript devido ao melhor suporte a tipagens.",
        "Next.js": "Framework que mais utilizo para desenvolvimento web",
        "React": "Simplesmente a lib mais famosa para front end, meu GOTO para qualquer front end web",
        "TailWindCss": "Melhor maneira de escrever css",
        "TypeScript": "Js da microsoft com types, minha principal liguagem",
        "PostgresSQL": "O banco de dados que sempre uso em meus projetos, open source e bom",
        "Git": "Versionador de código utilizado em todos meus projetos."
    }

    const icons = iconsValues.map((item)=>(
        {
            ...item,
            text: iconsDescriptions[item.label] || "",
        }
    ))

return(
    <div className="overflow-hidden">
    <motion.div
        initial={{ opacity: 0, y: -100}}
        whileInView={{ opacity: 100, y: 0}}
        transition={{
            delay: 0.2,
            duration: 0.7,
            ease: easeInOut,
        }}
        // viewport={{ once: true}}
        className="relative max-w-screen"
    >    
        <div className="relative w-full max-w-[100vw] p-6 mx-auto md:max-w-7xl gap-4  min-h-[300px] flex flex-col">
                <Separator orientation="horizontal" className="max-w-[90vw] dark:bg-white z-10 bg-muted h-[1px] w-full dark:bg-white" />
                <h1 className="indent-8 text-3xl font-bold">Sobre Mim</h1>
                <Separator orientation="horizontal" className="max-w-[90vw] dark:bg-white z-10 bg-muted h-[1px] w-full dark:bg-white" />
                <div className="flex flex-col md:flex-row text-base leading-8 indent-4 rounded-lg border-1 p-4 min-h-76 border-muted dark:border-white/50">
                    Há quatro anos venho me dedicando ao universo da programação. Fluente em inglês, tenho domínio sólido do ecossistema JavaScript/TypeScript, 
                    atuando com confiança tanto no front-end quanto no back-end. 
                    Atualmente curso Análise e Desenvolvimento de Sistemas na PUC Paraná e sou natural de Curitiba, onde resido. 
                     Desde cedo, sempre fui fascinado pelo universo da tecnologia — da desmontagem de hardwares 
                     à lógica por trás dos softwares. Meu objetivo é simples e apaixonado: trabalhar com qualquer área relacionada à TI,
                      seja na manutenção e operação do hardware ou no desenvolvimento, manutenção e criação de software para qualquer solução.
                <Separator orientation="vertical" className="bg-muted dark:bg-white/50 max-h-[90%] mx-6 w-[1px]" />
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Linkedin</AccordionTrigger>
                        <AccordionContent>
                            <Link href={linkedinProfileLink}> Linkedin </Link> 
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Github</AccordionTrigger>
                        <AccordionContent>
                        <Link href={githubProfileLink}> Github </Link> 
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>WhastApp</AccordionTrigger>
                        <AccordionContent>
                        <Link href={whatsappLink}> WhatsApp - (41) 9 84748437 </Link> 
                        </AccordionContent>
                    </AccordionItem>
                    </Accordion>
                </div>
                <Carousel className="px-4 overflow-hidden"
                opts={{
                    loop: true
                }}

                plugins={
                    [ AutoScroll({
                        speed: 1,
                        startDelay: 100,
                        stopOnInteraction: false,
                        stopOnMouseEnter: true,
                    
                    })]
                }
            >
                    <CarouselContent className="" >
                        {icons.map(({icon: Icon, label}, index) =>(
                            <CarouselItem key={index}
                            onClick={() => setActiveTab(label)}
                            className={`
                            ${label == activeTab ? 'bg-accent border-1 border-muted ': ''} md:m-2 min-w-fit rounded-lg
                            cursor-pointer basis-1/3 md:basis-1/6 items-center p-4 flex-col text-center leading-10 font-semibold`}>
                                <Icon className="m-auto" size={48}/> 
                                <p className="bottom-0">{label}</p>
                            </CarouselItem> 
                        ))
                        }
                    </CarouselContent>
                    <CarouselPrevious className="md:ml-22"/>
                    <CarouselNext className="md:mr-22"/>
                </Carousel>
                <Tabs value={activeTab} onValueChange={setActiveTab} className={`w-full bg-background`}>
                    <TabsList className="w-full dark:bg-background scrollbar-hide">
                    {icons.map(({ label }) =>(
                        <TabsTrigger key={label} value={label} className={`${label == activeTab ? 'bg-accent scale-105' : 'hidden md:flex' }`}>  
                            {label}
                        </TabsTrigger>
                    ))} 
                    </TabsList>
                {icons.map(({ label, text }) => (
                        <TabsContent key={label} value={label} className="border-1 rounded-lg">
                            <div className="m-auto p-8 text-xl items-center text-center transition-all ease-in-out duration-500
                            w-full leading-6 border-muted border-1 rounded-lg">{text}</div> 
                        </TabsContent>
                    ))} 
                </Tabs>
            </div>
        </motion.div>
        </div>
    )
}