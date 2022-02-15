import { useState } from "react";
import "./signup.css";
import "../UI/ui.css";
import {
  Button,
  CardContent,
  Card,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Box,
  Grid,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Signup = () => {
  const [password, setPassword] = useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setPassword({ ...password, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setPassword({
      ...password,
      showPassword: !password.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }} textAlign="center">
        <Grid
          container
          spacing={0}
          justifyContent="center"
          style={{ minHeight: "100vh" }}
          direction="column"
          alignItems="center"
        >
          <Grid item xs={6} sm={6}>
            <Card>
              <h1 className="signp-form-heading">SignUp Now</h1>
              <CardContent>
                <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
                  <TextField required id="outlined-required" label="Email" />
                </FormControl>
              </CardContent>
              <CardContent>
                <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
                  <InputLabel required htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={password.showPassword ? "text" : "password"}
                    value={password.password}
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {password.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>

                <CardContent>
                  <Button
                    id="button-customize"
                    size="large"
                    variant="contained"
                  >
                    Submit
                  </Button>
                </CardContent>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Signup;
