import React, { Component } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom'
import { withFormik } from "formik";
import * as Yup from 'yup';
import { FormHelperText } from "@material-ui/core";


const useStyles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class Login extends Component {

  render(){

    const { classes, values, handleChange, handleSubmit, errors } = this.props;
  
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
          Đăng Nhập
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Tên Đăng Nhập"
              name="name"
              autoComplete="name"
              autoFocus
              value={values.name}
              onChange={handleChange}
            />
            <FormHelperText>{errors.name}</FormHelperText>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mật Khẩu"
              type="password"
              id="password"
              autoComplete="current-password"
              value={values.password}
              onChange={handleChange}    
            />
            <FormHelperText>{errors.password}</FormHelperText>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              
            >
              Đăng Nhập
            </Button>

              <Button component={Link} to="/quenmatkhau">
                Quên Mật Khẩu ?
              </Button>
          </form>
        </div>  
      </Container>
    );
  }
}

const FormikForm = withFormik({

  mapPropsToValues(){
    return{
      name:"",
      password:"",
    }
  },

  handleSubmit(value,{resetForm}){
    console.log(JSON.stringify(value,null,2))
    resetForm({
      name:"",
      password:"",
    })
  },

  validationSchema:Yup.object().shape({

    name:Yup
    .string()
    .required("Tên đăng nhập là bắt buộc")
    .min(5,'Tên đăng nhập ít nhất 5 kí tự')
    .max(30,'Tên đăng nhập nhiều nhất là 30 kí tự'),

    password:Yup
    .string()
    .required("Mật khẩu là bắt buộc")
    .min(5,'Mật khẩu ít nhất 5 kí tự')
    .max(30,'Mật khẩu nhiều nhất là 30 kí tự')

  }),
})(Login)

export default withStyles(useStyles)(FormikForm);