import { Typography } from "@material-ui/core";
import React from "react";
import CustomTimeline, { CustomTimeLineSeparator } from "../Timeline/Timeline";
import PersonIcon from '@mui/icons-material/Person';
import resumeData from "../../utils/resumeData";
import "./Profile.scss";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import CustomButtom from "../Button/Button";
import GetAppIcon from "@material-ui/icons/GetApp";

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimeLineSeparator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span>{" "}
          <a href={link} target="_blank" rel="noopener noreferrer">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}:</span> {text}
        </Typography>
      )}
    </TimelineContent>  
  </TimelineItem>
);
 const profileData={...resumeData}
 delete  profileData.socials.Facebook
const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>

      <figure className="profile_image">
        <img src={require("../../assets/images/User.jpg")} alt="" />
      </figure>

      <div className="profile_information">
        <CustomTimeline icon={<PersonIcon />}>
          <CustomTimelineItem title="Name" text={resumeData.name} />
          <CustomTimelineItem title="Job" text={resumeData.title} />
          <CustomTimelineItem
            title="Email"
            text={resumeData.email}
            link={`mailto:${resumeData.email}`}
          />

          {Object.keys(profileData.socials).map((key, idx) => (
            <CustomTimelineItem
              key={idx}
              title={key}
              text={profileData.socials[key].text}
              link={profileData.socials[key].link}
            />
          ))}
        </CustomTimeline>

        <div className="button_container" style={{ display: "flex" }}>
          <a
            href={resumeData.resume}
            target={"_blank"}
            rel="noopener noreferrer"
            className="a_nostyles"
          >
            <CustomButtom text={"Download CV"} icon={<GetAppIcon />} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
