import React, { useState } from 'react';
import {
  Link,
  Switch,
  Route
} from "react-router-dom";
import Recipe from './pages/Recipe';
import recipes from '../../public/data/recipes.json';

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
      <GridList cellHeight={300} cols={3} spacing={20} className={classes.gridList}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
          <ListSubheader component="div">Recipes</ListSubheader>
        </GridListTile>
          {recipes.map((recipe) => (
            <GridListTile
            className={classes.gridLink}
            key={recipe.name}
            >
            <img src={recipe.img} alt={recipe.name} />
            <Link
                to={`recipes/${recipe.id}`}
               >
                <GridListTileBar
                  title={recipe.name}
                  subtitle={<span>Posted: {recipe.datePosted}</span>}
                    />
                  </Link>
                </GridListTile>
                ))}
      </GridList>
    </Grid>
  );
}

export default RecipeList;