// App.js 
import React from "react"; 
import WordLetterCounte from "./WordLetterCounter"; 
// import "./App.css"; 

function App() { 
	return ( 
		<div className="App"> 
			<h1 id="top"> 
			GeeksforGeeks 
			</h1> 
			<h1> 
			Words and Letters 
			Counter 
			</h1> 
			<WordLetterCounte /> 
		</div> 
	); 
} 

export default App; 
