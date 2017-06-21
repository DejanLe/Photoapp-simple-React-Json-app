import React, {Component} from 'react';

class Photo extends Component{
	render(){
		return(
			<div className="box">
			 <h1>{this.props.item.name}</h1> 
             <p>{this.props.item.state}</p>  
              <p>{this.props.item.info}</p>  
			<img className="city img-responsive" src={this.props.item.image} alt="" />
			 
			</div>

			);
	}
}

export default Photo;