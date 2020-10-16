import React from 'react';
import liste from './component/Liste'
export default class app extends React.Component {
  constructor (){
    super()
    this.state={
      valeur : "bjr",
      tab : [],
    }
  }
ajouter = ()=> {
let a = this.state
let b ={
    valeur:a.valeur, 
    validate: false,
    edit: false,

}
a.tab.push(b)
this.setState(a)
console.log(a.tab);
}

  
  updateInputValue(evt) {
    this.setState({
      valeur: evt.target.value
    });
  }
  

    render() {


        return (
            <div className="container">
                <h1 className="text-center mt-5">
                    To do List
                            </h1>
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-center">
                            <input onChange={evt => this.updateInputValue(evt)} type="text" className="input mx-3 w-100" placeholder="Que dois-je faire ?" value={this.state.valeur } />
                            <button className="btn updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }btn-secondary" onClick={()=> this.ajouter()} > Ajouter </button>
                        </div>
                    </div>
                </div>
                <ul className="list-group">

                </ul>
            </div>

        )
    }
}






























