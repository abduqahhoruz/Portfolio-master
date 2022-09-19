/* eslint-disable */
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Grow,
  IconButton,
  Tab,
  Tabs,
  Tooltip,
  Typography,
} from "@material-ui/core";

import { PauseCircleOutline, PlayCircleOutline } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import resumeData from "../../utils/resumeData";
import "./Portfolio.scss";

const shuffle = (arr) =>
  [...arr].reduceRight(
    (res, _, __, s) => (
      res.push(s.splice(0 | (Math.random() * s.length), 1)[0]), res
    ),
    []
  );

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");
  const [isShuffle, setIsShuffle] = useState(false);
  const [projectDialog, setProjectDialog] = useState(false);
  const [projects, setProjects] = useState(resumeData.projects);

  const [interval, setinterval] = useState(null);

  useEffect(() => {
    return () => clearInterval(interval);
  }, []);

  // projects render
  useEffect(() => {
    if (isShuffle) {
      setinterval(
        setInterval(() => {
          setProjects([]);
          setProjects(shuffle(resumeData.projects));
        }, 5000)
      );
    } else {
      clearInterval(interval);
      setInterval(null);
    }
  }, [isShuffle]);

  useEffect(() => {
    if (tabValue !== "All") {
      setIsShuffle(false);
    }
  }, [tabValue]);

  return (
    <Grid container spacing={1} className="section pb_45 pt_45">
      
      {/* Title */}
      <Grid item className="section_title mb_20">
        <span></span>
        <h6 className="section_title_text">Portfolio</h6>
      </Grid>

      {/* Tabs */}
      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Tabs
          value={tabValue}
          indicatorColor="white"
          className="customTabs"
          onChange={(event, newValue) => setTabValue(newValue)}
          variant="scrollable"
          
        >
          <Tab
            label="All"
            value="All"
            className={
              tabValue === "All" ? "customTabs_item active" : "customTabs_item"
            }
          />

          {[...new Set(resumeData.projects.map((item) => item.tag))].map(
            (tag) => (
              <Tab
                label={tag}
                value={tag}
                className={
                  tabValue === tag
                    ? "customTabs_item active"
                    : "customTabs_item"
                }
              />
            )
          )}
        </Tabs>

        <IconButton onClick={() => setIsShuffle(!isShuffle)}>
          {isShuffle ? (
            <Tooltip title={"Pause Shuffle"}>
              <PauseCircleOutline />
            </Tooltip>
          ) : (
            <Tooltip title={"Shuffle List"}>
              <PlayCircleOutline />
            </Tooltip>
          )}
        </IconButton>
      </Grid>

      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {projects?.map((project, idx) => (
            <>
              {tabValue === project.tag || tabValue === "All" ? (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <Grow in timeout={1000}>
                    <Card
                      className="customCard"
                      onClick={() => setProjectDialog(project)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className="customCard_image"
                          image={project.images?.[0]}
                          title={project.title}
                        />
                        <CardContent>
                          <Typography
                            variant={"body2"}
                            className="customCard_title"
                          >
                            {project.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            className="customCard_caption"
                          >
                            {project.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>

      <Dialog
        open={Boolean(projectDialog)}
        onClose={() => setProjectDialog(false)}
        className="projectDialog"
        maxWidth={"lg"}
        fullWidth
      >
        <DialogTitle onClose={() => setProjectDialog(false)}>
          {projectDialog.title}
        </DialogTitle>
        <DialogContent   style={{ height: "80vh" }}>
          {projectDialog.images && (
            <ImageGallery  images={projectDialog.images} />
          )}

          <Typography className="projectDialog_description">
            {projectDialog.description}
          </Typography>
        </DialogContent>
        <DialogActions className="projectDialog_actions">
          {projectDialog?.links?.map((link) => (
            <a
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="projectDialog_icon"
            >
              {link.icon}
            </a>
          ))}
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Portfolio;
