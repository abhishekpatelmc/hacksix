import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import moneybag from "../../asset/img/money-bag.png";
import { nodeCategories } from "../../asset/data";
import "./TimelineNodePage.css";

export default function TimelineNodePage() {
  const styles = {
    class: {
      maxWidth: 700,
    },
    media: {
      width: 100,
      height: 100,
    },
  };

  return (
    <>
      <div className="container">
        <div className="partition-1">
          <Typography variant="h4" align="center">
            Let's start making good financial choices.
          </Typography>
          <Typography variant="body-1" align="center">
            Choose from one of the modules chosen specifically for your profile
            and keep track of your progress.
          </Typography>
        </div>
        <div className="partition-2">
          <div className="roadmap-container">
            <Timeline position="alternate">
              {nodeCategories.map((nodes, index) => {
                return (
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Card style={styles.class}>
                        <CardActionArea
                          component={RouterLink}
                          to={`/module/${nodes.path}`}
                        >
                          <CardContent>
                            <CardMedia
                              square
                              component="img"
                              image={moneybag}
                              alt="money"
                              style={styles.media}
                            />
                            <Typography variant="h5" color="text.primary">
                              {nodes.name}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </TimelineContent>
                  </TimelineItem>
                );
              })}
            </Timeline>
          </div>
        </div>
      </div>
    </>
  );
}
