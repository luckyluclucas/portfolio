"use client"
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { Separator } from "./ui/separator";
import * as motion from "motion/react-client"
import { useRouter } from "next/navigation";
import { IconType } from "react-icons/lib";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { linkedinProfileLink, whatsappLink } from "@/lib/socialMediaLinks";

export default function Contact(){
    //TODO create copy clipboard with toaster for every contact form

    const route = useRouter()

    type contact = {
        Icon: IconType,
        text: string,
        delay: number,
        action?: ()=> void,
        showButton: boolean,
        animationDuration: number,
        buttonText?: string,
    }

    const contactWays: contact[] = [
        { 
            Icon: FaWhatsapp, 
            text: "(41) 9 8474-8437", 
            showButton: true, 
            delay: 0.2, 
            animationDuration: 0.6, 
            action: ()=> {route.push(whatsappLink)},
            buttonText: "mande-me uma mensagem"
        },
        { 
            Icon: FaLinkedin, 
            text: "LinkedIn", 
            showButton: true, 
            delay: 0.3, 
            animationDuration: 0.650, 
            action: ()=> {route.push(linkedinProfileLink)},
            buttonText: "ver linkedin"
        },
            
        { Icon: CgMail, text: "reanlucasdev@gmail.com", showButton: false, delay: 0.4, animationDuration: 0.7},
    ]

    const contactLiRef = useRef(null)
    const isMobile = useIsMobile()

    return(
        <div className="w-full mt-8 overflow-hidden">
            <Separator orientation="horizontal" className="max-w-[90vw] m-auto dark:bg-white/50 z-10 my-12 relative" />
            <motion.div 
                
            className="max-w-7xl flex flex-col p-4 mx-auto min-h-fit dark:bg-background rounded-lg">
                <h1 className="text-3xl my-4 indent-6 font-bold">Contato</h1>
                <Separator orientation="horizontal" className="max-w-[90vw] m-auto dark:bg-white z-10  relative" />
                {contactWays.map(({ Icon, text, showButton, delay, animationDuration, action, buttonText}, index)=>(
                    <motion.li
                    key={index}
                    onClick={ isMobile && action ? action : ()=> {} } 
                    ref={contactLiRef}
                    style={{ listStyle: "none" }}
                    initial={{ x: 40, opacity: 0}}
                    whileInView={{ x:0, opacity: 1}}
                    viewport={Icon === FaWhatsapp ? { once: true } : {}}
                    whileTap={{ scale: 0.95 }}
                    transition={{
                        x: {
                        delay: delay,
                        duration: animationDuration, 
                    },
                        opacity: {
                        delay: delay,
                        duration: animationDuration, 
                        }
                }}
                >
                    <div className="p-4 flex-1 mt-12">
                        <div className="flex flex-row text-center items-center gap-6">
                            <Icon size={64}/>
                            <h1 className="md:text-3xl mx-auto my-auto cursor-pointer">{text}</h1>
                            {showButton ? 
                                <motion.button onClick={action}
                                    className="rounded-lg hidden w-64 text-center justify-center content-center md:flex cursor-pointer bg-accent dark:bg-background/20 p-4 border-2 border-white/50"
                                    initial={{ opacity: 0, y: 50}}
                                    whileInView={{ opacity: 1, y: 0}}
                                    whileHover={{ scale: 1.05}}
                                    whileTap={{ scale: 0.95}}
                                    transition={{
                                        x: {
                                            delay: delay + 0.2,
                                            duration: animationDuration,
                                    },
                                        opacity: {
                                            delay: delay,
                                            duration: animationDuration,
                                        },
                                    }}
                                >
                                  {buttonText} 
                                </motion.button> : ''}
                       </div>
                    <Separator orientation="horizontal" className="max-w-[90vw] m-auto dark:bg-white/50 z-10 my-12 relative" />
                    </div>
                 </motion.li>
                ))}
                
                
            </motion.div>
        </div>
    )
}