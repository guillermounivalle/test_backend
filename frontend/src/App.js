
import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap';
import axios from 'axios';


class App extends Component {
    constructor(props){
        super(props)

        this.state = {
          showHideList: false
        }
        this.showHideList = this.showHideList.bind(this);
        this.getCountriesList = this.getCountriesList.bind(this);
        this.buttonTitle = this.buttonTitle.bind(this);
        this.showList = this.showList.bind(this)
    }

    //Axios es la libreria que nos permite obtener los datos desde el endpoint desde el backend
    async getCountriesList () {
      const countries = await axios.get('http://localhost:4000/api/countries');
      console.log("Countries ===>" + countries)
    };

    showHideList(){
      this.setState({showHideList: !this.state.showHideList})
      
    }

    buttonTitle(){
      if(!this.state.showHideList){
        return "Show List"
      }
      else{
        return "Hide List"
      }
    }

    showList(){
      const countries = this.getCountriesList();
      const sizeCountriesList = countries.lenght;
      for(var i = 0; i < sizeCountriesList; i++ ){
        return(
          <div>
            //Fila por iteracciòn
          </div>
        )
      }
      return(
        <div>
          Tabla completa
        </div>
      )
    }

    render() {
        return (
            <div class="container">
                <Carousel>
                <div>
                    <img src={"assets/ciat_1.jpg"} />
                    <p className="legend">CIAT</p>
                </div>
                <div>
                    <img src="assets/ciat_2.jpg" />
                    <p className="legend">CIAT 2</p>
                </div>
                <div>
                    <img src="assets/ciat_3.jpg" />
                    <p className="legend">CIAT 3</p>
                </div>
            </Carousel>
            <div>
                texto    
            </div>  
            <button onClick={this.showHideList}>
              {this.buttonTitle()}
            </button>     
            {this.showList()}
        </div>
    )
  }
}

export default App;
