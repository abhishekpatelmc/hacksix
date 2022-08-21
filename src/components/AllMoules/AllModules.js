import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { ArticleData } from "../../asset/data";
import { nodeCategories } from "../../asset/data";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "./AllModule.css";

const AllModules = () => {
  const styles = {
    class: {
      minWidth: 150,
    },
    media: {
      width: 80,
      height: 80,
    },
  };

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollRight = slider.scrollRight + 500;
  };

  return (
    <div>
      <div className="Heading">
        <h1> All Module </h1>
      </div>
      <div className="outerSlider">
        <IconButton onClick={slideLeft} aria-label="Left" size="large">
          <ArrowBackIosNewIcon />
        </IconButton>
        <div id="slider" className="container">
          {nodeCategories.map((nodes, index) => {
            return (
              <Card style={styles.class} className="cardItem">
                <CardActionArea
                  component={RouterLink}
                  to={`/module/${nodes.path}`}
                >
                  <CardContent>
                    <CardMedia
                      square
                      component="img"
                      image={nodes.img}
                      alt="money"
                      style={styles.media}
                    />
                    <Typography variant="h6" color="text.primary">
                      {nodes.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })}
        </div>
        <IconButton onClick={slideRight} aria-label="right" size="large">
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default AllModules;
