import { Card, CardActions, CardContent, CardMedia, Chip, IconButton, Typography } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../slices/dataSlice";

const chipColors = {
  grass: '#4CAF50',
  poison: '#76FF03',
  fire: '#F44336',
  flying: '#B3E5FC',
  water: '#1E88E5',
  bug: '#A1887F',
  electric: '#FDD835',
  ground: '#795548',
  fairy: '#F06292',
  fighting: '#607D8B',
  psychic: '#D500F9',
  rock: '#616161',
  steel: '#78909C',
  ice: '#03A9F4',
  normal: '#212121',
  ghost: '#CFD8DC',
  dragon: '#FF3D00'
};

export default function CardList({ name, sprite, types = [], favorite, id }) {

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(toggleFavorite(id))
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia 
        sx={{ height: 200 }}
        image={sprite}
        title={name}
      />
      <CardContent sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
        <Typography  gutterBottom variant="h6">
          {name}
        </Typography>
        <IconButton 
          aria-label="add to favorites" 
          color={favorite ? 'error' : 'default'}
          onClick={handleClick}
        >
          <FavoriteIcon />
        </IconButton>
      </CardContent>
      <CardActions>
        {
          types?.map((type, index) => (
            <Chip label={type} key={`tag-${index}`} sx={{
              backgroundColor: chipColors[type] || '#ccc',
              color: 'white'
            }}/>
          ))
        }
      </CardActions>
    </Card>
  )
}