
import { useContext } from 'react';
import './App.css'
import { MyContext } from './customRedux/CustomRedux';

function App({ children }) { 
  const { store } = useContext(MyContext);
  console.log(store);
  
  return (
      <div className="App">
        {children}
           
      </div>
 
  )
}

export default App;