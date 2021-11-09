import {useState} from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Notes from './components/Notes';
import AddNotes from './components/AddNotes';
import NotePage from './components/NotePage';

function App(){
const [ontoggle, setToggle] = useState(false)   
const click = ()=>{
    setToggle(!ontoggle)
}
  if (!ontoggle){
  return (
    <div className="App">
      <Header />
      <Search />
      <Notes />
      <AddNotes click={click}/>
  </div>
  )}
  else{
    return(
    <div className="App">
      <NotePage />
    </div>
    )
  }
}

export default App;
