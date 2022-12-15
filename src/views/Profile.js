import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProfileStepper from "../components/ProfileStepper";
import { CATEGORIES, STEPS_CONFIG } from "../utils/objects/Frontend";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentStep } from "../redux/reducers/ProfileReducer";
import { Button } from "@mui/material";

const drawerWidth = 300;

const Profile = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const currentStep = useSelector((state) => state.profileReducer.currentStep);
  const totalQuestionsCompleted = useSelector(
    (state) => state.profileReducer.totalQuestionsCompleted
  );
  const totalQuestions = useSelector(
    (state) => state.profileReducer.totalQuestions
  );

  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <h2
        style={{
          marginLeft: 90,
        }}
      >
        PROFILE
      </h2>
      {/* <Toolbar /> */}
      <Divider />
      <div
        style={{
          width: 120,
          height: 120,
          marginLeft: 80,
          marginTop: 30,
          marginBottom: 30,
        }}
      >
        <CircularProgressbar
          value={(totalQuestionsCompleted / totalQuestions) * 100}
          text={`${Math.round(
            (totalQuestionsCompleted / totalQuestions) * 100
          )} %`}
          maxValue={100}
          styles={buildStyles({
            rotation: 0.5,
            strokeLinecap: "flat",
            textSize: "16px",
            pathTransitionDuration: 1,
            pathColor: "darkblue",
            textColor: "#000000",
          })}
        />
      </div>
      <List>
        {CATEGORIES.map((category, index) => (
          <div>
            <ListItem key={index} disablePadding>
              {currentStep === index ? (
                <div
                  style={{
                    width: "10px",
                    height: "40px",
                    background: "darkblue",
                  }}
                ></div>
              ) : (
                <div></div>
              )}
              <ListItemButton
                onClick={() => {
                  dispatch(setCurrentStep(index));
                }}
              >
                <ListItemIcon
                  style={{
                    fontWeight: "700",
                  }}
                >
                  {category.icon}
                </ListItemIcon>
                <ListItemText
                  primary={category.label}
                  style={{
                    fontWeight: "700",
                  }}
                />
                <p
                  primary={
                    STEPS_CONFIG?.pages?.[currentStep]?.questions?.length
                  }
                  style={
                    currentStep === index
                      ? {
                          border: "2px solid",
                          padding: "12px",
                          borderRadius: "40%",
                        }
                      : {
                          border: "2px solid",
                          padding: "6px",
                          borderRadius: "30%",
                          color: "black",
                        }
                  }
                >
                  {STEPS_CONFIG.pages[index].questions.length}
                </p>
              </ListItemButton>
            </ListItem>
          </div>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <React.Fragment>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          {/* <Toolbar style={{ background: "darkblue" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Profile
            </Typography>
          </Toolbar> */}
        </AppBar>

        <Box
          style={{
            boxShadow:
              "0px 2px 11px -19px rgb(0 0 0 / 20%), 0px 2px 7px 0px rgb(0 0 0 / 14%), 0px 1px 110px 23px rgb(0 0 0 / 12%)",
          }}
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <div
            className="stepper-desktop"
            // style={{
            //   margin: "auto",
            //   width: "50%",

            //   padding: "10px",
            // }}
          >
            <ProfileStepper />
          </div>
        </Box>
      </Box>
    </React.Fragment>
  );
};

Profile.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Profile;
