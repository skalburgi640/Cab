import { useState, useEffect } from "react";

const useEmail = (obj) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    emailjs.sendForm(process.env.SERVICE_KEY, process.env.TEMPLATE_KEY, form.current, process.env.PUBLIC_KEY)
    .then((result) => {
        setData("Our team will reach out to you !");
    }, (error) => {
        console.log(error.text);
    });
  }, [obj]);

  return [data];
};

export default useEmail;