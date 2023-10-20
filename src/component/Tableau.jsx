import React, {Component} from "react";
import Ligne from './Ligne';

class Tableau extends Component{

render(){
    return(
        <div>
            <Ligne nom="Parent" nombre="1"></Ligne>
            <Ligne nom="Enfant" nombre="2"></Ligne>
        </div>
    )
}

}

export default Tableau;