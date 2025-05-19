import { ReactNode } from "react"
import "../globals.css";
import Navbar from "@/components/Navbar"
const layout = ({children}: {children: ReactNode}) => {
  return (

    <div>
        <Navbar />
        {children}
      
    </div>
  )
}

export default layout
