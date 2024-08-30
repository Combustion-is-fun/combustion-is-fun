import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../pages/Pages.css";
export default function MediaCard() {
  return (
    <div>
    <Card className="mycard">
      <CardMedia
        sx={{height: 200}}
        image="https://www.reptilecentre.com/cdn/shop/articles/2946733f1f65584baa93e7509e72f011.jpg?v=1718288664"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}
