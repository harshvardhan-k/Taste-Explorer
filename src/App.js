import styled from 'styled-components';
import React from 'react';
import { useState } from 'react';
import { AppNameComp, SearchComp, AppIcon, SearchInput, SearchIcon } from './components/HeaderComponents';
import RecipeComponent from './components/RecipeComponent';
import axios from 'axios';
import bg from './middle.jpg';
import sideimg from './vegan-food.png';
import searchicon from './search.png';
import { APPLICATION_ID,APPLICATION_KEY } from './helper';
const Container = styled.div`
display:flex;
flex-direction:column;

`;
const Header = styled.div`
color:white;
background-color:blue;
display:flex;
flex-direction:row;
padding:1.25rem;
font-size:150%;
font-weight:bold;
box-shadow:0 3px 6px 0 #555;
align-items:center;
justify-content:space-between;
height:5rem;

`;
const RecipeListContainer = styled.div`
display:flex;
flex-direction: row;
flex-wrap:wrap;
gap:20px;
padding:30px;
justify-content: space-evenly;
`;
const IdleImg=styled.img`
width:35%;
height:35%;
margin-left:5%;
opacity:50%;
`;



function App() {
  const [timeoutId, newtimeoutId] = useState();
  const [recipeList, updateRecipeList] = useState([]);



  const fetchRecipe = async (query) => {
    const response = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APPLICATION_ID}&app_key=${APPLICATION_KEY}`
    );
    updateRecipeList(response.data.hits);
  };

  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchRecipe(event.target.value), 500);
    newtimeoutId(timeout);
  }//debouncing concept



  return (

<Container>
      <Header>
        <AppNameComp><AppIcon src={sideimg} />Taste Explorer</AppNameComp>
        <SearchComp><SearchIcon src={searchicon} /><SearchInput placeholder="Search Recipe" onChange={onTextChange} /></SearchComp>
      </Header>
      
        <RecipeListContainer>

          {recipeList.length ? recipeList.map((recipeObj) => (<RecipeComponent recipeObj={recipeObj.recipe} />)):
          <IdleImg src={bg}></IdleImg>
          }

        </RecipeListContainer>
      </Container>

  );
}

export default App;
