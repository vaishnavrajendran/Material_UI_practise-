import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const Posts = () => {
  return (
    <div>
      <Card sx={{marginBottom:3}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              S
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Sachin Tendulkar"
          subheader="March 05, 2023"
        />
        <CardMedia
          component="img"
          height="20%"
          src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202210/r-sixteen_nine.jpg?size=948:533"
          alt="Sachin Tendulkar"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Sachin Tendulkar was the most complete batter of his time, the most
            prolific run-maker of all time, and arguably the biggest cricket
            icon the game has ever ...
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  )
}

export default Posts
