import React, { useCallback}          from 'react';
import Button         from '@material-ui/core/Button';
const { ipcRenderer } = require("electron");   

const HomePage:React.FC = () => {

  
  const send = useCallback((message)=>{
    console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"
    ipcRenderer.on('asynchronous-reply', (event:any, arg:any) => {
      console.log(arg) // prints "pong"
    })
    ipcRenderer.send('asynchronous-message', message)
  },[])

  return (
    <Button variant="contained" color="primary" onClick={()=>send("Ola Mundo Porra")}>Clique</Button>
  );
}

export default HomePage;