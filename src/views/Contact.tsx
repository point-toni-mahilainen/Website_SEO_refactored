import { Grid } from "@material-ui/core";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { createUseStyles } from "react-jss";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const useStyles = createUseStyles({
  whiteWrapper: {
    backgroundColor: "#ffffff",
  },
  wrapper: {
    height: "fit-content",
    margin: "15px 0",
    padding: "0 20px",
    borderRight: "1px solid #2829A7",
    borderLeft: "1px solid #2829A7",
  },
  formTop: {
    "& input": {
      margin: "5px 0",
      width: "80%",
    },
    "& textarea": {
      margin: "5px 0",
      width: "80%",
      height: "75%",
    },
  },
  formBottom: {
    padding: "16px 0",
  },
  top: {},
  bottom: {},
});

const Contact = () => {
  const [name, setName] = useState<string | undefined>(undefined);
  const [emailAddress, setEmailAddress] = useState<string | undefined>(
    undefined
  );
  const [subject, setSubject] = useState<string | undefined>(undefined);
  const [message, setMessage] = useState<string | undefined>(undefined);

  const classes = useStyles();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    contactToBackend();
  };

  const handleChangeInput = (
    input: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const inputField = input.currentTarget.id;
    const nameValue = input.currentTarget.value;
    const emailValue = input.currentTarget.value;
    const subjectValue = input.currentTarget.value;
    const messageValue = input.currentTarget.value;

    switch (inputField) {
      case "name":
        setName(nameValue);
        break;

      case "email":
        setEmailAddress(emailValue);
        break;

      case "subject":
        setSubject(subjectValue);
        break;

      case "message":
        setMessage(messageValue);
        break;

      default:
    }
  };

  const contactToBackend = () => {
    // const url = "https://website-seo-backend.herokuapp.com/sendmail";
    const url = "http://localhost:3001/sendmail";

    const data = {
      name,
      emailAddress,
      subject,
      message,
    };

    const headers = {
      Accept: "application/json",
      ContentType: "application/json",
    };

    const config: AxiosRequestConfig = {
      url,
      method: "POST",
      data,
      headers,
    };

    axios(config)
      .then((response: AxiosResponse) => {
        console.log(response.data);
        alert(response.data);
      })
      .catch((err) => {
        alert("Jokin meni pieleen. Ole hyvä ja yritä uudelleen.");
      });
  };

  return (
    <Grid style={{ minHeight: "100%", padding: "16em 0" }}>
      <Grid
        container
        item
        xs={12}
        className={classes.whiteWrapper}
        justifyContent="center"
      >
        <Grid container item xs={6} className={classes.wrapper}>
          <Grid item xs={12} className={classes.top}>
            <p>
              Kerro meille mielipiteesi tai kysy! <br />
              <br />
              Pyrimme kehittämään jatkuvasti toimintaamme ja sen vuoksi on
              erittäin tärkeää, että saamme palautetta toimintamme kehittämisen
              tueksi.
              <br />
              <br />
              Kaikenlainen palaute on tervetullutta!
            </p>
          </Grid>
          <Grid item xs={12} className={classes.bottom}>
            <form onSubmit={handleSubmit}>
              <Grid container item xs={12} className={classes.formTop}>
                <Grid item xs={6}>
                  Nimi
                  <br />
                  <input
                    type="text"
                    value={name}
                    id="name"
                    onChange={handleChangeInput}
                  />
                  <br />
                  Sähköposti
                  <br />
                  <input
                    type="text"
                    value={emailAddress}
                    id="email"
                    onChange={handleChangeInput}
                  />
                  <br />
                  Aihe
                  <br />
                  <input
                    type="text"
                    value={subject}
                    id="subject"
                    onChange={handleChangeInput}
                  />
                </Grid>
                <Grid item xs={6}>
                  Viesti
                  <br />
                  <textarea
                    typeof="text"
                    value={message}
                    id="message"
                    onChange={handleChangeInput}
                  />
                </Grid>
              </Grid>
              <Grid container item xs={12} className={classes.formBottom}>
                <button type="submit">Lähetä</button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
