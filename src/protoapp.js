import React, {Component} from 'react';


class Photoapp extends Component{
	
 render(){
 const author_message =  (
<div> 
 <h1>The best Photo for 2017 year</h1>
		<h3> Author:  www.nikolicdejan.com</h3>  
 	   <p>Thank you for visiting my Photoapp</p>  
 </div>
 	); 
		return(
				<div className="photoapp"> 
					    {author_message}   
				</div>
					 
			);
	}
}
export default Photoapp;