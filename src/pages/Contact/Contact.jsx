import React, { useState } from "react";
import resumeData from "../../utils/resumeData";
import {
    Grid,
  
    Snackbar,
    TextField,
    Typography,
  } from "@material-ui/core";
  import CustomButton from "../../components/Button/Button";
  import { Alert } from "@material-ui/lab";
 
  import { sendEmail } from "../../utils/emailer";
  import './Contact.scss'
  import '../resume/Resume.scss'
import Spinner from "../../components/Spinner/Spinner";
const Contact = () => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const handleSubmit = (e) => {
      sendEmail(e)
        .then((res) => {
          res === "true" ? setOpen("true") : setOpen("error");
        })
        .then(() => {
          setName("");
          setEmail("");
          setMessage("");
        });
    };
  return (
    <div >
              {/* Contact */}
      <form className="top_50" onSubmit={handleSubmit}>
        <Grid
          container
          spacing={6}
          id="contact"
          className="section pt_45 pb_45">
          {/* Contact form */}
          <Grid item xs={12} lg={7}>
            <Grid container>
              <Grid item className="section_title mb_30">
                <span></span>
                <h6 className="section_title_text">Contact Form</h6>
              </Grid>

              <Grid item xs={12} >
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="user_name"
                      label="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      type="email"
                      name="user_email"
                      label="E-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="message"
                      label="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      multiline
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomButton type="submit" text="Submit" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* Contact information */}
          <Grid item xs={12} lg={5} >
            <Grid container  >
              <Grid item className="section_title mb_30">
                <span></span>
                <h6 className="section_title_text">Contact information</h6>
              </Grid>

              <Grid item xs={12} >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography className="contactInfo_item">
                      <span>Address: </span> {resumeData.address}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className="contactInfo_item">
                      <span>Phone: </span> {resumeData.phone}
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography className="contactInfo_item">
                      <span>Email: </span> {resumeData.email}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className="contactInfo_item">
                      <span>Job: </span> {resumeData.title}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Grid container className="contactInfo_socialsContainer">
                  {Object.keys(resumeData.socials).map((key, idx) => (
                    <Grid item className="contactInfo_social" key={idx}>
                      <a href={resumeData.socials[key].link}>
                        {resumeData.socials[key].icon}
                      </a>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} className='mt-5'>
            <Grid container>
              <Grid item className="section_title mb_30">
                <span></span>
                <h6 className="section_title_text">Contact Map</h6>
              </Grid>
              </Grid>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.50263581282!2d69.13928304249946!3d41.28251254641893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2str!4v1655985874978!5m2!1sru!2str"  className="Map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

              </Grid>
     
        </Grid>
      </form>
      
      {Boolean(open) && (
        <Snackbar
          open={Boolean(open)}
          autoHideDuration={4000}
          onClose={() => setOpen(false)}>
          {open === "true" ? (
            <Alert onClose={() => setOpen(false)} severity="success">
              Message Sent!
            </Alert>
          ) : (
            <Alert onClose={() => setOpen(false)} severity="error">
              Failed to send message.
            </Alert>
          )}
        </Snackbar>
      )}
    
    </div>
  )
}

export default Contact