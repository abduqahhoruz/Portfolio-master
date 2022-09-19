import emailjs from "emailjs-com";

  
const userID = "DZ92Sr6VUxnP2wZl7";

const templateID = "Zuhriddin";
const serviceID = "zuhriddin";



export const sendEmail = (e, setOpen) => {
  e.preventDefault();

  return emailjs.sendForm(serviceID, templateID, e.target, userID).then(
    (result) => {
      return "true";
    },
    (error) => {
     
      return "error";
    }
  );
};
