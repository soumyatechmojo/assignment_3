import './App.css';
import { Filter1, Filter2 } from './component/Filter';
import Product from './component/Product';
import User from './component/User';
import Records from './users.json';

function App() {
  return (
    <div className="App">
       {
        Records.map( records =>{
          return(
            <div key="id">
          
            <li>{records.username}</li>
            
            </div>
          )
        })
       }
       <User/>
       <Product/>
       <Filter1/>
       <Filter2/>
     
    </div>
  );
}

export default App;
