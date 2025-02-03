import React, {useEffect} from 'react';
import AddTextBoxButton from './addItems';
import AddRecipe from './addrecipe';



function Dashboard() {
    
     
    
   
   

    return (
        <div>
         
            <nav className="navbar navbar-light bg-light" >
  <div className="navbar-brand"style={{color : 'chocolate'}}>
    <img src="./chef.png" width="30" height="30" alt=""/>
    <strong>CHEF GPT</strong>
  </div>
 
  
</nav>
<h1><center>HELLO CHEF!</center></h1> 
            
         <br/>   


            <div className="container">
    <div className="row">
        <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Search a recipe</h5>
                <div className="card-text"><AddRecipe/></div>
              </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Get ideas</h5>
                <div className="card-text"><AddTextBoxButton/></div>
              </div>
            </div>
        </div>
        
    
</div>
</div>
        </div>
    );
}

export default Dashboard;