"use client"
import { useTheme } from "next-themes"
import { MoonIcon } from "lucide-react"
import { SunIcon } from "lucide-react"

export default function ThemeButton(){
    
    const { theme, setTheme } = useTheme()

    if(theme !== 'light' && theme !== 'dark'){
        return null
    }
 
    return(
      <button 
      onClick={()=> theme == 'light' ? setTheme('dark'): setTheme('light')}
      className={`absolute hover:cursor-pointer z-10 top-1 left-1 p-2 rounded-full ${theme == 'dark' ? 'bg-slate-900/50': 'bg-slate-900/50'}`}>
        { theme == 'light' ?
        <MoonIcon color="white" fill="#585c6b" /> :
        <SunIcon size={28} color="white" fill="white"/>
        }
      </button>
    )
}