"use client"
import { useTheme } from "next-themes"
import { MoonIcon } from "lucide-react"
import { SunIcon } from "lucide-react"
import { GiMoonOrbit } from "react-icons/gi";

export default function ThemeButton() {

  const { theme, setTheme } = useTheme()

  if (theme !== 'light' && theme !== 'dark') {
    return null
  }

  return (
    <button
      onClick={() => theme == 'light' ? setTheme('dark') : setTheme('light')}
      className={`absolute hover:cursor-pointer z-10 top-1 left-1 p-2 rounded-full ${theme == 'dark' ? 'bg-transparent' : 'bg-white/22 rounded-full'}`}>
      {theme == 'light' ?
        <GiMoonOrbit size={32} color="black" fill="black" /> :
        <SunIcon size={28} color="white" fill="white" />
      }
    </button>
  )
}
