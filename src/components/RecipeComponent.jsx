import React, { useState } from 'react';
import styled from 'styled-components';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

const RecipeContainer=styled.div`
display:flex;
flex-direction:column;
padding:10px;
width:300px;
box-shadow:0 3px 10px 0 #aaa;
background-color:#FEFCF5;
&:hover{
  background-color:#FEF9EE;
}
`;

 const RecipeName=styled.span`
font-size:18px;
font-weight:bold;
color:black;
margin:10px 0;

`;
 const IngredientsText=styled.span`
font-size:18px;
  border:solid 1px green;
color:black;
margin:10px 0;
cursor:pointer;
padding:10px 15px;
border-radius:4px;
color:green;
text-align:center;
margin-bottom:12px;
&:hover{
  background-color:green;
  color:white;
}
`;
 const SeeMoreText=styled(IngredientsText)`
  color:#eb3300;
  border:solid 1px #eb3300;
  &:hover{
    background-color:#eb3300;
    color:white;
  }
`;
const CoverImage=styled.img`
height:200px;

`;

const RecipeComponent = (props) => {
    const [show,setShow]=useState(false);
    const {recipeObj}=props;
  return (
    
    <RecipeContainer>
      <Dialog open={show}>
      <DialogTitle>Ingredients</DialogTitle>
      <DialogContent>Content
      <table style={{border:'1px solid black',borderCollapse:'collapse',}}>
        <thead style={{border:'1px solid black',}}>
          <th style={{border:'1px solid black',}}>Ingredients</th>
          <th style={{border:'1px solid black',}}>Weight(grams)</th>
        </thead>
        <tbody style={{border:'1px solid black',}}>
          {recipeObj.ingredients.map((ingredientObj)=>(
            <tr>
            <td style={{border:'1px solid black',}}>{ingredientObj.text}</td>
            <td style={{border:'1px solid black',}}>{ingredientObj.weight}</td>
          </tr>
          ))}
          
        </tbody>
      </table>
      </DialogContent>
      <DialogActions>
          {/* <IngredientsText onClick={()=> window.open(recipeObj.url)} >See More</IngredientsText> */}
          <SeeMoreText onClick={()=>setShow(false)}>Close</SeeMoreText>
        </DialogActions>
      </Dialog>

        <CoverImage src={recipeObj.image} />
            <RecipeName>{recipeObj.label}</RecipeName>
            <IngredientsText onClick={()=>setShow(true)}>Ingredients</IngredientsText>
            <SeeMoreText onClick={()=> window.open(recipeObj.url)}>See complete recipe</SeeMoreText>
    </RecipeContainer>
    
  )
}

export default RecipeComponent