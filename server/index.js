import express from 'express'
import { query } from './suggest.js';

import cors from 'cors';
import dotenv from 'dotenv';
const app= express();

dotenv.config();
app.use(cors());
app.use(cors({origin : 'https://chefgptbackend.vercel.app'}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/',(req,res)=>{
  res.send("HELLO CHEFS")
})

app.post('/ingredients', (req,result)=>{
   let commandString="What dishes can we make with ";
   req.body.ingredients.forEach((item)=>{commandString+=item; commandString+=", "});
   commandString+="?";
   query({"inputs" : commandString}).then(res=>{
    result.send(res[0].generated_text)});
});

app.post('/recipe', (req,result)=>{
  let commandString="How to make ";
   commandString+=req.body.name;
   commandString+="?";
   console.log(req.body.name);
   
  query({"inputs": commandString}).then(res=>{result.send(res[0].generated_text)});
});


const PORT = process.env.PORT||3000

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`)
  
});




