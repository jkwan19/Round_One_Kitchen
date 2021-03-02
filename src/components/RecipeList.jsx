import React, { useState } from 'react';
import {
  Link,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import Blog from './Blog';
import recipes from '../../public/data/ingredients.json';

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


function RecipeList(props) {
  let match = useRouteMatch();
  const classes = useStyles();
  // const [recipes, setRecipes] = useState(recipeData);

  return (
    <div className={classes.root}>
      {/* <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Recipes</ListSubheader>
        </GridListTile> */}
        <ul>

          {recipes.map((recipe) => (
            <li>
              <Link
                to={`${match.url}/id?recipeID=${recipe.id}`}
                component={props => (
                  <Blog />)
                }
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
    </div>
  );
}

export default RecipeList;