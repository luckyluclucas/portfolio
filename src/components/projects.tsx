"use client"
import * as motion from "motion/react-client"
import { Tabs, TabsContent, TabsList, TabsTrigger  } from "./ui/tabs"
import { Separator } from "./ui/separator"
import { FaGithubAlt } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaDocker, FaWordpress } from "react-icons/fa";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { easeInOut } from "motion/react"

export default function Projects(){
   
    type tabs = {
        tab: string,
        text: string
    }

    const tabs: tabs[] = [
        {
            tab: "Commerce",
            text: "Ecommerce"
        },

        {
            tab: "Estética Clínica",
            text: "Clínica de Estética",
        }
    
    ]
    const icons2 = [ {Icon: FaWordpress, label: "Wordpress"}]
    const icons = [

        { Icon: FaDocker, label: "Docker" },
        { Icon: RiNextjsFill, label: "Next.js" },
        { Icon: RiTailwindCssFill, label: "Tailwindcss" },
        { Icon: BiLogoPostgresql, label: "Postgres SQL" },
    ]

    return(
        <div  className="w-full overflow-x-hidden mt-6 bg-background mx-auto ">
            <motion.div
                className="max-w-7xl w-full mx-auto gap-4 flex px-4 py-6 sm:py-14 flex-col"
            > 
                <Separator orientation="horizontal" className="max-w-[90vw] dark:bg-white/50 my-4 z-10 bg-muted h-[1px] w-full" />
                <h1 className="indent-8 text-3xl font-bold">Meus Projetos</h1>
                    <Tabs defaultValue="Commerce" className="w-full bg-background mx-auto">
                    <TabsList className="my-2 mx-auto p-1 dark:bg-accent/50 h-12 gap-4 ">
                    {tabs.map(({ tab, text}, index)=>(
                            <TabsTrigger key={index} 
                                value={tab} 
                                className="cursor-pointer rounded-lg dark:data-[state=active]:bg-white dark:data-[state=active]:text-black my-1 p-4 sm:w-48 border-none">
                                {text}
                        </TabsTrigger>
                    ))}
                    </TabsList>
                    <motion.div 
                        initial={{ height: 0, opacity: 0}}
                        whileInView={{ height: "auto", opacity: 1 }} 
                        transition={{
                            delay: 0.3,
                            duration: 0.7,
                            ease: easeInOut,
                        }}  
                        viewport={{ once: true}}
                        className="rounded-lg h-[230px] p-4 dark:bg-accent/50  overflow-y-hidden border-1 border">
                        <TabsContent value={"Commerce"} className="flex flex-col">
                            <h1 className="md:indent-4 text-xl my-1 font-semibold flex md:flex-row w-full "> 
                                Simple commerce
                                <div className="flex flex-row gap-4 ml-auto my-auto">
                                    {icons.map(({Icon, label}, index)=>(
                                       <HoverCard key={index} openDelay={100}>
                                        <HoverCardTrigger className="cursor-pointer">
                                            <Icon />
                                        </HoverCardTrigger>
                                        <HoverCardContent className="transition-all ease-in-out duration-200 w-fit">
                                           {label} 
                                        </HoverCardContent>
                                    </HoverCard> 
                                    ))}
                                </div>
                            </h1>
                            <Separator orientation="horizontal" className="max-w-64 dark:bg-white/50 my-2 z-10 bg-muted h-[1px]" />
                            <div className="text-base indent-4">
                               O projeto já conta com funcionalidades essenciais, como o front end de um carrinho de compras simples, 
                               autenticação via JWT com persistência de dados no banco PostgreSQL, 
                               e controle de acesso por roles — com usuários administradores tendo acesso exclusivo a um 
                               dashboard protegido por validação 100% server-side 
                               (nenhuma informação de permissão é exposta ao cliente e o token jwt é verificado com a assinatura secreta gerada no servidor).
                                Também fiz uma tool para gerar dados de producst no banco de dados para fins desenvolvimento, outras tools serão adicionado no futuro.
                               A aplicação inclui uma API RESTful para gerenciamento de produtos, com resposta em JSON e suporte a queries por ID.
                                URLs amigáveis com slugify são geradas automaticamente para cada produto, otimizando o SEO.

                                 Novas funcionalidades estão sendo planejadas e serão integradas em breve.
                            </div>
                            <Link className="mt-4 w-fit flex flex-row" href="https://github.com/luckyluclucas/NextSimpleCommerce">
                                <FaGithubAlt className="mx-4"  size={28}/>
                                  <p>Source Code</p>
                            </Link>
                        </TabsContent>
                        <TabsContent value={"Estética Clínica"} className="flex flex-col">
                            <h1 className="md:indent-4 text-xl my-1 font-semibold flex md:flex-row w-full "> 
                                Clínica de estética
                                <div className="flex flex-row gap-4 ml-auto my-auto">
                                    {icons2.map(({Icon, label}, index)=>(
                                       <HoverCard key={index} openDelay={100}>
                                        <HoverCardTrigger className="cursor-pointer">
                                            <Icon />
                                        </HoverCardTrigger>
                                        <HoverCardContent className="transition-all ease-in-out duration-200 w-fit">
                                           {label} 
                                        </HoverCardContent>
                                    </HoverCard> 
                                    ))}
                                </div>
                            </h1>
                            <Separator orientation="horizontal" className="max-w-64 dark:bg-white/50 my-2 z-10 bg-muted h-[1px]" />
                            <div className="text-base indent-4">
                                <iframe className="w-full" src="https://bribellos.com.br">
                                </iframe> 
                            </div>
                            <Link className="mt-4 w-fit flex flex-row" href="">
                                <FaGithubAlt className="mx-4"  size={28}/>
                                  <p>No Source Code</p>
                            </Link>
                        </TabsContent>


                    </motion.div>
                </Tabs> 
            </motion.div>
        </div>
    )    
}