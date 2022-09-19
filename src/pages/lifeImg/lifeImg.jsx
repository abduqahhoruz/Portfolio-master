import React, { useEffect, useState } from "react";


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
  
    Tooltip,
  
    Typography,
  } from "@material-ui/core";
  
  import { PauseCircleOutline, PlayCircleOutline } from "@material-ui/icons";

   import Fullscreen from "./fullscreen";

  import "../portfolio/Portfolio.scss";
  import './lifeImg.scss'
  import { lifeImages} from "../../utils/portfolioImages"; 


const shuffle = (arr) =>
[...arr].reduceRight(
  (res, _, __, s) => (
    res.push(s.splice(0 | (Math.random() * s.length), 1)[0]), res
  ),
  []
);



const Img = () => {

 
  const [isShuffle, setIsShuffle] = useState(false);
  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState(lifeImages);

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
          setProjects(shuffle(projects));
        }, 5000)
      );
    } else {
      clearInterval(interval);
      setInterval(null);
    }
  }, [isShuffle]);


  return (
 
    <>
     <Grid container spacing={1} className="section pb_45 pt_45">
    
  

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
          {/* Title */}
      <Grid item className="section_title mb_20">
        <span></span>
        <h6 className="section_title_text">Life images</h6>
      </Grid>
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
        <Grid item xs={12}>
        <Grid container spacing={3}>
          {projects.map((project, idx) => (
            <>
              
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <Grow in timeout={1000}>
                    <Card
                      className="customCard"
                      onClick={() => setOpen(true)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className="customCard_image"
                          image={project}
                        
                        />
                       
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
             
            </>
          ))}
        </Grid>
      </Grid>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="projectDialog"
        maxWidth={"lg"}
        fullWidth
      >
        {/* <DialogTitle onClose={() => setProjectDialog(false)}>
          {projectDialog.title}
        </DialogTitle> */}
        <DialogContent   style={{ height: "80vh" }}>
        
            <Fullscreen  images={projects} />
        

          {/* <Typography className="projectDialog_description">
            {projectDialog.description}
          </Typography> */}
        </DialogContent>
        {/* <DialogActions className="projectDialog_actions">
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
        </DialogActions> */}
      </Dialog>
</Grid>
</>
  
  )
}

export default Img;