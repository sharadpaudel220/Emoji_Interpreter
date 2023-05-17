import './App.css';
import { useState } from 'react';

var userName = "User";
var colorOne = "aliceblue";
var colorTwo= "red";

const emojiDictionary= {
  "😂": "laughing",
  "🙄": "rolling eyes",
  "🔥": "fire", 
 "😍" : "heart eyes",
 '🙂': "smiling",
 '🫣':'shy',
 '😡':'angry',
 '🫡':'salute',
 '🤗':'hug',
 '😵‍💫':'confused',
 '🤒':'fever',
 '💀':'dead',
 '👽':'alien',
 "🖕🏻":"middle finger",
};
function App() {
   
  var[meaning, setmeaning] = useState("");
  
  function inputHandler(event){
    // console.log(event.target.value);
    var userInput = event.target.value; 
    var meaning = emojiDictionary[userInput];
  
    if(meaning){
     setmeaning(meaning);
    }

  else{
    meaning = "Oops!! Not available in the database";
    setmeaning(meaning);

  }
 
  }
  
  return (
    // Displaying username and welcoming user
    <div className="App">
      <h1 style={{color:colorOne}}>Welcome <span style={{color:colorTwo}}>{userName}</span></h1>
      
     <input type="text" placeholder='Enter a emoji' onChange={inputHandler} />
     <h2>{meaning}</h2>
    </div>
  );
}


export default App;
