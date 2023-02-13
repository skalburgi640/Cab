import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

const useEmail = (form) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    debugger
    console.log('form :::::::::::::' ,form);
    if(!form) return;
    emailjs.sendForm(process.env.SERVICE_KEY, process.env.TEMPLATE_KEY, form.current, process.env.PUBLIC_KEY)
    .then((result) => {
        setData("Our team will reach out to you !");
    }, (error) => {
        console.log(error.text);
    });
  }, [form]);

  return [data];
};

export default useEmail;