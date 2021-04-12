import React, { useState } from 'react';
import {
  Link,
  Switch,
  Route
} from "react-router-dom";
import Recipe from './Recipe';
import recipes from '../../public/data/ingredients.json';

import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  ListSubheader
} from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 600,
    height: 600,
  },
  gridLink: {
    cursor: 'pointer',
    '&:hover': {
      background: '#e1e1e1',
      border: '1px solid red'
    },
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


function RecipeList(props) {
  const classes = useStyles();
  // const [recipes, setRecipes] = useState(recipeData);

  return (
    <Grid className={classes.root}>
      {/* <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Recipes</ListSubheader>
        </GridListTile> */}
        <ul>

          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <Link
                to={`recipes/${recipe.id}`}
                >
                {recipe.name}
                </Link>
            </li>
            // <GridListTile
            // className={classes.gridLink}
            // key={recipe.name}
            // >
            // <img src={recipe.img} alt={recipe.name} />
            // <Link
            //     to={{path:`recipes/${recipe.id}`}}
            //     component={props => (
              //       <Blog {...props} data={recipe}/>)
              //     }>
              //   <GridListTileBar
              //     title={recipe.name}
              //     subtitle={<span>by: Edmund</span>}
              //     actionIcon={
                //       <IconButton aria-label={`info about ${recipe.name}`} className={classes.icon}>
                //         <InfoIcon />
                //       </IconButton>
                //     }
                //     />
                //   </Link>
                // </GridListTile>
                ))}
      </ul>
      {/* </GridList> */}
    </Grid>
  );
}

export default RecipeList;