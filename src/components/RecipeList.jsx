import React, { useState } from 'react';
import {
  Link,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import Blog from './Blog';
import recipeData from '../../public/data/ingredients.json';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
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

const tileData = [
  {
    id: 1,
    img: 'https://media.istockphoto.com/photos/dim-sum-hagao-picture-id877842880?k=6&m=877842880&s=612x612&w=0&h=QCioJ2wvppHOw-rn6KlHHoGUq-Wqh-LSuA5x7foQws0=',
    name: 'Har Gow (蝦餃)',
    author: 'Edmund',
  },
  {
    id: 2,
    img: 'https://preview.redd.it/hoz5zi9yiua61.jpg?width=960&crop=smart&auto=webp&s=cbf4401a6876c78d2361c967ba3dc7fe11e4898c',
    name: 'Teriyaki Carne Tacos (w/ homemade Pico de Gallo and Sriracha Mayo!)',
    author: 'Edmund',
  }
];

function RecipeList(props) {
  let match = useRouteMatch();
  const classes = useStyles();
  const [recipes, setRecipes] = useState(recipeData);
  const [recipeID, setRecipeID] = useState(null);

  const { ingredients } = recipes;
  const { directions } = recipes;


  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Recipes</ListSubheader>
        </GridListTile>
          {tileData.map((tile) => (
            <Link
              to={`/${tile.id}`}
              component={Blog[tile.id]}
              >
            <GridListTile
            className={classes.gridLink}
            key={tile.name}
            >
                <img src={tile.img} alt={tile.name} />
                <GridListTileBar
                  title={tile.name}
                  subtitle={<span>by: {tile.author}</span>}
                  actionIcon={
                    <IconButton aria-label={`info about ${tile.name}`} className={classes.icon}>
                      <InfoIcon />
                    </IconButton>
                  }
                  />
              </GridListTile>
            </Link>
          ))}
      </GridList>
    </div>
  );
}

export default RecipeList;