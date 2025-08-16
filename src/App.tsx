import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";

export default function App() {
  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div style={{
      display: "flex",
      background: 
      isDark
      ? "#050021" : "#CCCCCC",
      padding: "50px 50px 25px 50px",
      width: "93.3vw",
      height: "90.89vh",
      flexDirection: "column"
    }}>
      <div 
        style={{
          width: "98%",
          height: "100%",
          display: "flex",
          padding: "0 16px",
          borderRadius: "50px",
          background: isDark
          ?"linear-gradient(to left, #06001C, #18016F, #1B017B, #615782)"
          : "linear-gradient(to right, #746B96, #827D93, #AEA9C2, #FFFFFF)",
          color: isDark ? "white" : "black"
        }}>
        
          <Header isDark={isDark} toggleTheme={toggleTheme} />
          < Body />
        
      </div>
      
      
    </div>
      
  );
}