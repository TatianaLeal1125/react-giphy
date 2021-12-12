import '../App.css';
import '../assets/css/app.css'
import Navigation from './Navigation';
import Gif from './Gif'
import React, {Component} from 'react';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      gifs: []
    }
  }

  async apiCall(url){
    try{
      const response = await fetch(url)
      const data = await response.json()
      this.setState({ gifs: data})
    }catch(e){
      console.log(e)
    }    
  }

  componentDidMount(){
      console.log("Componente montado!!!")
      this.getGifs()
  }

  getGifs(){
    this.apiCall('https://api.giphy.com/v1/gifs/trending?api_key=WuqjgJMnbC3Slgr89zKUaRsgZOss368i&limit=25&rating=g')
  }

  componentDidUpdate(){
    console.log("Me actualicé")
  }


  render(){
    let contenido;
    if(this.state.gifs.length === 0){
      contenido = <p>Cargando gif...</p>
    }else{
      contenido = <Gif {...this.state.gifs }/>
    }

    return (
      <React.Fragment>
        <Navigation />
        {contenido}
      </React.Fragment>
    )
  }
}

export default App;
