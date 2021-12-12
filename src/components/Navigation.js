import React, {Component} from 'react';
import Features from './Features';

class Navigation extends Component{

    constructor(){
        super();
        this.state = {
            gif: '',
            flag: 1
        }
    }

    async apiCall(url){
        try{
          const response = await fetch(url)
          const data = await response.json()
          this.setState({ gif: data.data, flag:1})
        }catch(e){
          console.log(e)
        }    
    }

    getGifs(){
        this.apiCall('https://api.giphy.com/v1/gifs/random?api_key=WuqjgJMnbC3Slgr89zKUaRsgZOss368i&tag=&rating=g')
    }

    async componentDidMount(){
        console.log("Componente Navegation montado!!!")
        console.log("flag inicial es: ", this.state.flag)
    }

    componentDidUpdate(){
        console.log("Componente Navegation actualizado!!!")
        console.log("flag es: ", this.state.flag)
    }

    showGifs(){
        this.setState({
            flag: 0
        })
    }

    render(){
        let componente;
    
        if(this.state.gif !== ''){
            console.log('Ya tengo mi primer gif random!!!')
            componente = <div className= {this.state.flag ? 'center':'none'}>
                            <h5>Gif generado aleatoriamente</h5>
                            <button className="btn btn-success" onClick={()=>this.showGifs()}>Ocultar random</button>
                            <br></br>
                            <Features {...this.state.gif} />
                        </div>
        }
        return(
            <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                <a className="navbar-brand" href="https://developers.giphy.com/">GIPHY APP</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="nav ml-auto">
                    <li className="nav-item">
                    <button className="btn btn-success" onClick={()=> this.getGifs()}>Cargar random</button>
                    </li>
                </ul>
                </div>
            </nav>
            {componente}
            </React.Fragment>
        );
    }
}

export default Navigation;