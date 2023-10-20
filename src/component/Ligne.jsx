import React, {Component} from "react";


class Ligne extends Component{
    
    state = {
        parent: 0,
        enfant: 0,
        total: 0
    }

    
    ajouteEnfantEtParent = () => {
        let nombre = this.props.nombre;
        this.setState(() => ({
            enfant : Number(this.state.enfant) + Number(nombre)
        }));
        this.setState(() => ({
            parent : Number(this.state.parent) + Number(nombre)
        }));
        this.setState(() => ({
            total: Number(this.state.enfant) + Number(this.state.parent)
        }));
    }
    
    render(){
        return(        
            <div>
                <button onClick={this.ajouteEnfantEtParent}>+{this.props.nombre} {this.props.nom}</button>
                {this.props.nom} somme Parent : <input value={this.state.parent}></input>
                {this.props.nom} somme enfant :<input value={this.state.enfant}></input>
                {this.props.nom} somme total : <input value={this.state.total}></input> 
            </div>
        )
    }
}

export default Ligne;