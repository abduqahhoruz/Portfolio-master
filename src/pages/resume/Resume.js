import {
  Grid,
  Icon,
  Paper,
 
  Typography,
} from "@material-ui/core";

import CustomTimeline, {
  CustomTimeLineSeparator,
} from "../../components/Timeline/Timeline";

import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import resumeData from "../../utils/resumeData";
import "./Resume.scss";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import SchoolIcon from "@material-ui/icons/School";
import TimelineDot from "@material-ui/lab/TimelineDot";
import ScrollableDiv from "../../components/ScrollableDiv/ScrollableDiv";



const Resume = () => {


  return (
    <>
      {/* About me */}
      <Grid container className="section pb_45 pt_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="aboutme_text">
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>

      {/* Education and experiences */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Resume</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container className="resume_timeline" spacing={2}>
            {/* Experiences */}
            <Grid item sm={12} md={6}>
              <ScrollableDiv>
                <CustomTimeline title="Work Experience" icon={<WorkHistoryIcon />}>
                  {[...resumeData.experiences]
                    ?.reverse()
                    ?.map((experience, idx) => (
                      <TimelineItem key={idx}>
                        <CustomTimeLineSeparator />
                        <TimelineContent className="timeline_content">
                          <Grid container spacing={1}>
                            <Grid item xs={12} md={7}>
                              <Typography className="timeline_title">
                                {experience.title}
                              </Typography>
                            </Grid>
                            <Grid
                              item
                              xs={12}
                              md={5}
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                              }}>
                              <Typography
                                variant="caption"
                                className="timeline_date">
                                {experience.date}
                              </Typography>
                            </Grid>
                          </Grid>
                          {experience.institute && (
                            <Typography className="timeline_institute">
                              {experience.institute}
                            </Typography>
                          )}

                          <Typography
                            variant="body2"
                            className="timeline_description">
                            {experience.description}
                          </Typography>
                        </TimelineContent>
                      </TimelineItem>
                    ))}
                </CustomTimeline>
              </ScrollableDiv>
            </Grid>

            {/* Education */}
            <Grid item sm={12} md={6}>
              <ScrollableDiv>
                <CustomTimeline title="Education" icon={<SchoolIcon />}>
                  {[...resumeData.educations]
                    ?.reverse()
                    ?.map((education, idx) => (
                      <TimelineItem key={idx}>
                        <CustomTimeLineSeparator />
                        <TimelineContent className="timeline_content">
                          <Grid container>
                            <Grid item xs={12} md={7}>
                              <Typography className="timeline_title">
                                {education.title}
                              </Typography>
                            </Grid>
                            <Grid
                              item
                              xs={12}
                              md={5}
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                              }}>
                              <Typography
                                variant="caption"
                                className="timeline_date">
                                {education.date}
                              </Typography>
                            </Grid>
                          </Grid>
                          {education.institute && (
                            <Typography className="timeline_institute">
                              {education.institute}
                            </Typography>
                          )}
                          <Typography
                            variant="body2"
                            className="timeline_description">
                            {education.description}
                          </Typography>
                        </TimelineContent>
                      </TimelineItem>
                    ))}
                </CustomTimeline>
              </ScrollableDiv>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Services */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">My Services</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={3} justify="space-around">
            {resumeData.services.map((service, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <div className="service">
                  <Icon className="service_icon">{service.icon}</Icon>
                  <Typography className="service_title" variant="h6">
                    {service.title}
                  </Typography>
                  <Typography className="service_description" variant="body2">
                    {service.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Skills */}
      <Grid container className="section graybg pb_45 p_50">
      <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Skills </h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="space-between" spacing={4}>
            {resumeData.skills.map((skill, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Paper elevation={0} className="skill">
                  <Typography variant="h6" className="skill_title">
                    {skill.title}
                  </Typography>
                  {skill.description.map((element, idx2) => (
                    <Typography
                      variant="body2"
                      className="skill_description"
                      key={idx2}>
                      <TimelineDot
                        variant={"outlined"}
                        className={'timeline_dot'}
                      />
                      {element}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>


    </>
  );
};

export default Resume;
