import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";
import "./styleButton.css"
import "./styleHeader.css"
interface HeaderProps {
    isDark: boolean;
    toggleTheme: () => void
}
export const Header: React.FC<HeaderProps> = ({isDark, toggleTheme}) => {

  return (
    <header >
        {/* Botão de tela tema escuro e claro */}
        <button 
            onClick={toggleTheme}
            className="SunAndMoon"
            style={{
                background: isDark ?
                "rgba(217,217,217,0.3)":
                "rgba(188,188,188,0.3)"}}
            >

             {isDark ? <Moon 
                    style={{width: "75%", height: "75%", color: "#4c41e6ff"}}
                    />
                    :
                    <Sun style={{width: "75%", height: "75%", color: "#FFEA00"}}/>}
        </button>

        {/* Botões home, about-me, projects e contact */}
        <div style={{
            display: "flex",
            flexDirection: "row",
            columnGap: "10px",

            width: "35vw", 
            height: "100px",
            }}>

            <button> Home </button>

            <button> About-me </button>

            <button> Projects </button>

            <button> Contact </button>

        </div>
    </header>
  );
};


