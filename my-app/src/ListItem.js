import React, {Component} from 'react'
import './ListItem.css';



// ColorClick =()=>{
//     // console.log(event)
//     this.setState({
//         done: true
//     })
// }
// const ListItem = (props) =>{
//     const item = props.item;
//     if(item.done){
//         return (
//             <div>
//                 {/* <p onclick={this.ColorClick} style={this.style} className="done-item">{item.content}</p>  */}
//                 <p className="done-item">{item.content}</p> 
               

//             </div>
//         )
//     }else{
//         return <p className="item">{item.content}</p>
//     }
// } 

class ListItem extends Component{
    constructor(props){
        super(props)
        this.state={
            done: false
        }
    }
    ColorClick =()=>{
    // console.log(event)
    this.setState({
        done: true
    })
    }
    render(){
        if(this.props.item.done){
            return (
                <div>
                    {/* <input type="button" value="改变p标签的内容" id="btn"/> */}
                    <p  onclick={this.ColorClick} className="done-item">{this.props.item.content}</p> 
                </div>
            )
        }else{
            return (
                <div>
                    <p  onclick={this.ColorClick} className="item">{this.props.item.content}</p>    
                </div>
            )
        }
    }
}


export default ListItem;