import React, { useCallback}          from 'react';
import Button         from '@material-ui/core/Button';
const {ipcRenderer} = window.require('electron')

const HomePage = () => {

  const send = useCallback((message)=>{
    ipcRenderer.send('asynchronous-message', message)
  },[])

  return (
    <Button variant="contained" color="primary" onClick={()=>send("Ola Mundo Porra")}>Clique</Button>
  );
}

export default HomePage;