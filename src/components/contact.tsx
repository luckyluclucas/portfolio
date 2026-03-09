"use client"
import { CgMail } from "react-icons/cg";
import { BottomNeural, LSTMNeural } from "@/components/neuralDecor";
import { Separator } from "./ui/separator";
import * as motion from "motion/react-client"
import { useRouter } from "next/navigation";
import { IconType } from "react-icons/lib";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight } from "lucide-react";

type ContactItem = {
  Icon: IconType
  text: string
  delay: number
  action?: () => void
  showButton: boolean
  buttonText?: string
  iconColor: string
}

export default function Contact() {
  const route = useRouter()
  const isMobile = useIsMobile()

  const contactWays: ContactItem[] = [
    {
      Icon: CgMail,
      text: "reanlucasdev@gmail.com",
      showButton: false,
      delay: 0.05,
      iconColor: "text-red-400",
    },
  ]

  return (
    <div className="w-full overflow-hidden relative">
      <BottomNeural className="absolute -left-10 top-0 w-72 md:w-[30rem] dark:opacity-[0.18] opacity-[0.22] pointer-events-none" />
      <LSTMNeural className="absolute -right-10 bottom-0 w-64 md:w-96 dark:opacity-[0.18] opacity-[0.22] pointer-events-none" />
      <Separator
        orientation="horizontal"
        className="max-w-[90vw] m-auto dark:bg-white/20 bg-black/10 my-8"
      />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-7xl flex flex-col px-6 mx-auto"
      >
        <h2 className="text-3xl font-bold mb-2">Contato</h2>
        <Separator orientation="horizontal" className="dark:bg-white/20 bg-black/10 h-[1px] mb-4" />

        <p className="text-sm text-muted-foreground mb-6 leading-6">
          Atualmente indisponível para novos projetos ou contratações.
          Caso precise me contatar urgentemente, envie um e-mail para{" "}
          <a
            href="mailto:reanlucasdev@gmail.com"
            className="font-medium underline underline-offset-4 dark:text-white text-foreground hover:text-primary transition-colors"
          >
            reanlucasdev@gmail.com
          </a>
          .
        </p>

        <div className="flex flex-col gap-4">
          {contactWays.map(({ Icon, text, showButton, delay, action, buttonText, iconColor }, index) => (
            <motion.div
              key={index}
              initial={{ x: 50 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay, duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileTap={{ scale: 0.98 }}
              onClick={isMobile && action ? action : undefined}
              className={`group rounded-2xl border border-border dark:border-white/10 bg-muted/40 dark:bg-white/5 p-5 md:p-6 ${isMobile && action ? 'cursor-pointer' : ''} hover:bg-muted/60 dark:hover:bg-white/8 transition-all duration-300`}
            >
              <div className="flex flex-row items-center gap-5">
                <div className={`p-3 rounded-xl bg-background dark:bg-white/5 shrink-0 group-hover:scale-110 transition-transform duration-300 ${iconColor}`}>
                  <Icon size={32} />
                </div>
                <span className="text-base md:text-xl font-medium flex-1 break-all md:break-normal">
                  {text}
                </span>
                {showButton && (
                  <motion.button
                    onClick={(e) => { e.stopPropagation(); action?.() }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="hidden md:flex items-center gap-2 cursor-pointer rounded-xl px-5 py-3 bg-background hover:bg-accent border border-border font-medium text-sm transition-colors shrink-0"
                  >
                    {buttonText}
                    <ArrowRight size={14} />
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
