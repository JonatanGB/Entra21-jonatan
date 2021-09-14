import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { Text } from "react-native";


const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#eeeeee",
      background: "#444",
      borderColor: "#000"
    }
  };
  
  const ThemeContext = React.createContext(themes.light);
  const ContextoContext= React.createContext();
  
  export function UseContextScreen() {
    return (
        <>
            <ContextoContext.Provider value={"Texto passado por Context"}>
                <Contexto />
            </ContextoContext.Provider>
            <ThemeContext.Provider value={themes.dark}>
                <Toolbar />
            </ThemeContext.Provider>
        </>
    );
  }
  
  function Toolbar(props) {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }

  function Contexto(props){
      return(
          <div>
              <Conteudo />
          </div>
      )
  }
  
  function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
      <button style={{ background: theme.background, color: theme.foreground, borderColor: theme.borderColor }}>
        Estilizado pelo themeContext!
      </button>
    );
  }

  function Conteudo(){
      const content = useContext(ContextoContext);
      return(
          <Text>
              {content}
          </Text>
      )
  }