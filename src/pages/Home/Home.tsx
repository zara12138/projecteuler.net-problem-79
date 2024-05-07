import { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  TextField,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import { Formik, Form, FormikHelpers } from "formik";
import { validationSchema } from "./validation";
import { getShortestPassword } from "./util";

type Props = {
  data: string;
};

type FormProps = {
  digits: string;
};

const initialValues: FormProps = {
  digits: "",
};

export const Home: NextPage<Props> = ({ data }) => {
  const [loginAttempts, setLoginAttempts] = useState<string[]>([]);
  const [shortestPassword, setShortestPassword] = useState<string>("");
  const onSubmit = (values: FormProps, formikHelpers: FormikHelpers<String>): void => {
    // reset the input field
    formikHelpers.setFieldValue("digits", "");
    // add the login attempt to the list
    setLoginAttempts([...loginAttempts, values.digits]);
  };

  useEffect(() => {
    // recalculate the shortest password when new login attempts are added
    const password = getShortestPassword(loginAttempts);
    setShortestPassword(password);
  }, [loginAttempts]);

  return (
    <Grid container spacing={1}>
      {/* The possible password using data from src/resources/0079_keylog.txt */}
      <Grid item md={12}>
        <Typography variant="h5" className={styles.padding}>
          Result
        </Typography>
        <Typography variant="body1" className={styles.padding}>
          The shortest possible password is {data} based on given txt file.
        </Typography>
      </Grid>
      {/* The playground for testing the logic yourself */}
      <Grid item md={12}>
        <Card className={styles.padding}>
          <CardHeader title="Test yourself"></CardHeader>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            // @ts-ignore
            onSubmit={onSubmit}
          >
            {({ errors, dirty, handleChange, isValid, values, submitForm }) => {
              return (
                <Form>
                  <CardContent>
                    <Grid item container spacing={1}>
                      <Grid item xs={12} sm={12} md={6}>
                        <TextField
                          label="Login attempt"
                          variant="outlined"
                          fullWidth
                          name="digits"
                          value={values.digits}
                          onChange={handleChange}
                        />
                        <Typography variant="body2" color="error">
                          {errors.digits}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Button
                      disabled={!dirty || !isValid}
                      variant="contained"
                      color="primary"
                      onClick={submitForm}
                      className={styles.button}
                    >
                      Add
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={()=>{
                        setLoginAttempts([]);
                        setShortestPassword("");
                      }}
                      className={styles.button}
                    >
                      Reset
                    </Button>
                  </CardActions>
                  <Grid item xs={12} sm={12} md={12}>
                    <Typography variant="body1" className={styles.padding}>
                      {loginAttempts.length > 0
                        ? `Your login attempts: ${loginAttempts.join(", ")}`
                        : "No login attempts yet."}
                    </Typography>
                    {shortestPassword && (
                      <Typography variant="body1" className={styles.padding}>
                        The shortest possible password is {shortestPassword}.
                      </Typography>
                    )}
                  </Grid>
                </Form>
              );
            }}
          </Formik>
        </Card>
      </Grid>
    </Grid>
  );
};
