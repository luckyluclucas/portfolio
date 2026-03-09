"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { SunIcon } from "lucide-react"
import { GiMoonOrbit } from "react-icons/gi"
import * as motion from "motion/react-client"

export default function ThemeButton({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div className={`w-10 h-10 rounded-full ${className ?? ''}`} />
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <motion.button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.88 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className={`hover:cursor-pointer z-10 p-2 rounded-full transition-colors ${
        isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'
      } ${className ?? ''}`}
    >
      {isDark ? (
        <motion.div
          key="sun"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          <SunIcon size={24} color="white" fill="white" />
        </motion.div>
      ) : (
        <motion.div
          key="moon"
          animate={{ rotate: [0, 15, -10, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
        >
          <GiMoonOrbit size={24} color="black" fill="black" />
        </motion.div>
      )}
    </motion.button>
  )
}
