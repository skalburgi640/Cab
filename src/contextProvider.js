import { createContext } from "react";
import emailjs from "@emailjs/browser";

const UserContext = createContext({
  handleEmailSend: () => {},
});

export const AppContext = ({ children }) => {
  const handleEmailSend = (form) => {
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_KEY,
        process.env.REACT_APP_TEMPLATE_KEY,
        form,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("`Booking confirmed! Our team will reach out you shortly.");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <UserContext.Provider value={{ handleEmailSend: handleEmailSend }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserConsumer = UserContext.Consumer;
