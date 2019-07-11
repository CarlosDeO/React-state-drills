import React from 'react';
import Split from './composition/Split';
import Tooltip from './composition/Tooltip';
import './App.css';
import Messages from './Messages';
import TheDate from './state/TheDate';
import Counter from './Counter'
import Bomb from './state-drills/bomb';
import HelloWorld from './state-drills/HelloWorld';
import Tabs from './state/Tabs';
import RouletteGun from './state-drills/RouletteGun';

// make 2 tooltips here and another inside the App directly
const firstTooltip = (
  <Tooltip color='hotpink' message='tooltip message'>
   ipsum
  </Tooltip>
)
const secondTooltip = (
  <Tooltip color='#126BCC' message='another tooltip message'>
    officiis
  </Tooltip>
)

const tabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];

function App() {
  return (
    <main className='App'>
        {/* <Tabs tabs={tabsProp} /> */}
        

        <RouletteGun />
        <HelloWorld /> 
        <Bomb />  
        
        {/* <Counter count={123} steps={2}/> */}
        {/* <TheDate /> */}
        {/* <Messages name="Messages" unread={0}/> */}
        {/* <Messages name="Notifications" unread={10}/> */}
    </main>
  );
}

export default App;