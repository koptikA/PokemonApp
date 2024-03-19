import './App.css'
import { Header } from "./components/Header/Header";

function App({ children }) {    
  return (
      <div className="App">
                    
        {children}
           
      </div>
 
  )
}

export default App;