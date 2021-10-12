import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";

import SearchIcon from "@material-ui/icons/Search";
import LocalAirportIcon from "@material-ui/icons/LocalAirport";
import DirectionsBoatIcon from "@material-ui/icons/DirectionsBoat";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EventNoteIcon from "@material-ui/icons/EventNote";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IOSSwitch from "./MySwitch";
import { useState } from "react";

const logo = (
  <svg width="128" height="25" viewBox="0 0 128 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.51505 8.35856C9.30975 8.59981 9.99093 8.91202 10.5728 9.30937L9.56519 11.3529C8.99755 10.9981 8.38733 10.7285 7.72034 10.5298C7.05336 10.3311 6.44313 10.2318 5.87549 10.2318C5.29365 10.2318 4.83953 10.3311 4.51313 10.544C4.18674 10.7569 4.01644 11.0691 4.01644 11.4948C4.01644 11.9205 4.21512 12.2469 4.59828 12.474C4.99563 12.7011 5.64843 12.9565 6.55666 13.2545C7.42233 13.51 8.14608 13.7654 8.71372 14.0208C9.28137 14.2763 9.76387 14.6594 10.1754 15.1703C10.587 15.6812 10.7856 16.3624 10.7856 17.1997C10.7856 18.4485 10.3173 19.3993 9.38071 20.0521C8.44409 20.7049 7.28041 21.0171 5.87549 21.0171C4.91049 21.0171 3.97387 20.861 3.05144 20.5488C2.12902 20.2366 1.36269 19.7967 0.738281 19.2432L1.71747 17.2706C2.27093 17.7531 2.93791 18.1363 3.71843 18.4201C4.51313 18.7039 5.26527 18.86 6.00321 18.86C6.62762 18.86 7.1385 18.7465 7.52166 18.5194C7.90483 18.2924 8.1035 17.9518 8.1035 17.4835C8.1035 17.1287 7.98997 16.8449 7.74872 16.6036C7.50747 16.3766 7.22365 16.1921 6.89725 16.0502C6.55666 15.9083 6.07416 15.7522 5.43556 15.5535C4.58409 15.298 3.88872 15.0426 3.36365 14.8014C2.82438 14.5601 2.37027 14.1911 1.9871 13.6944C1.60394 13.2119 1.40527 12.5592 1.40527 11.7361C1.40527 10.5156 1.85938 9.5932 2.75343 8.95459C3.64747 8.31599 4.78277 8.00378 6.11674 8.00378C6.92563 8.00378 7.72034 8.11731 8.51505 8.35856Z" fill="white"></path>
    <path d="M22.99 9.73511C23.9975 10.8704 24.4942 12.474 24.4942 14.5459C24.4942 14.7588 24.48 15.0994 24.4516 15.5819H14.7733C15.0003 16.5753 15.4686 17.3558 16.164 17.9234C16.8736 18.4911 17.725 18.7749 18.7326 18.7749C19.428 18.7749 20.0808 18.6472 20.7052 18.3917C21.3296 18.1363 21.8689 17.7673 22.3372 17.2848L23.7989 18.8458C23.1602 19.5412 22.3939 20.0663 21.4857 20.4353C20.5916 20.8042 19.5983 21.0029 18.5055 21.0029C17.2 21.0029 16.0647 20.7333 15.0713 20.1798C14.0921 19.6405 13.3258 18.8742 12.7723 17.895C12.233 16.9158 11.9492 15.7947 11.9492 14.5317C11.9492 13.2687 12.2189 12.1334 12.7723 11.1542C13.3116 10.175 14.0779 9.40871 15.0713 8.84106C16.0505 8.28761 17.1716 8.00378 18.4346 8.00378C20.4781 8.01798 21.9824 8.59981 22.99 9.73511ZM21.0032 11.1258C20.3646 10.5298 19.5131 10.246 18.4772 10.246C17.4696 10.246 16.6323 10.544 15.9653 11.1258C15.2983 11.7219 14.8868 12.5308 14.7165 13.5525H22.025C21.9966 12.5308 21.6418 11.7219 21.0032 11.1258Z" fill="white"></path>
    <path d="M54.6644 20.9178H51.9114V18.7323C51.443 19.4845 50.8328 20.0521 50.0807 20.4495C49.3144 20.8468 48.4345 21.0313 47.4269 21.0313C46.2065 21.0313 45.1422 20.7617 44.2197 20.2082C43.2973 19.6548 42.5878 18.8884 42.0769 17.8951C41.566 16.9017 41.3105 15.7664 41.3105 14.475C41.3105 13.212 41.566 12.0909 42.0769 11.1117C42.5878 10.1325 43.3115 9.36616 44.2197 8.82689C45.1422 8.28763 46.1923 8.00381 47.3844 8.00381C48.4061 8.00381 49.3002 8.20248 50.0665 8.61403C50.8186 9.01138 51.443 9.59322 51.9397 10.3453V3.07947L54.6928 6.00285V15.5393V20.9178H54.6644ZM50.4213 17.5687C51.145 16.7881 51.514 15.7948 51.514 14.5743C51.514 13.3397 51.145 12.3321 50.4213 11.5516C49.6975 10.7711 48.7467 10.3737 47.5972 10.3737C46.4478 10.3737 45.5111 10.7711 44.7732 11.5516C44.0353 12.3321 43.6663 13.3397 43.6521 14.5743C43.6663 15.7948 44.0353 16.8023 44.7732 17.5687C45.5111 18.3492 46.4478 18.7323 47.5972 18.7323C48.7467 18.7323 49.6833 18.3492 50.4213 17.5687Z" fill="white"></path>
    <path d="M37.9058 9.33782C38.7573 10.2177 39.1689 11.4239 39.1689 12.9566V20.9178H36.4016V13.7371C36.4016 12.7721 36.1319 12.02 35.5785 11.4523C35.0392 10.8989 34.2871 10.615 33.3221 10.615C32.3003 10.6292 31.4631 10.9556 30.8103 11.5942C30.1575 12.2328 29.7885 13.0701 29.6892 14.0919V20.9036L26.9219 17.9944V12.9991C26.9219 11.949 29.0506 7.94709 33.9039 7.80518C35.4082 7.77679 37.0686 8.45797 37.9058 9.33782Z" fill="white"></path>
    <path d="M67.2932 10.3434V9.35136H61.7572V20.3914H62.8612V15.2874H66.5732L66.4132 14.2954H62.8612V10.3434H67.2932ZM75.4942 12.4234C75.4942 13.8314 74.4702 14.5674 72.8382 14.5674H71.3662V10.3274H73.0302C74.6302 10.3274 75.4942 11.0794 75.4942 12.4234ZM73.9902 15.3674C75.5102 15.0474 76.6142 14.0714 76.6142 12.3594C76.6142 10.4394 75.2382 9.35136 73.0782 9.35136H70.2622V20.3914H71.3662V15.5114H72.7902L76.3742 20.5034L77.4942 20.2634L73.9902 15.3674ZM86.1403 20.3914V19.3994H81.3243V15.1114H85.1643L85.0043 14.1194H81.3243V10.3434H85.9803V9.35136H80.2203V20.3914H86.1403ZM90.3788 20.3914V9.35136H89.2748V20.3914H90.3788ZM102.644 19.4794V14.5994H98.74L98.9 15.5914H101.556V18.9034C100.82 19.3514 100.068 19.5914 99.028 19.5914C96.436 19.5914 94.964 17.7194 94.964 14.8714C94.964 12.0234 96.436 10.1354 98.9 10.1354C100.164 10.1354 101.172 10.5834 101.988 11.2394L102.18 10.1034C101.332 9.49536 100.276 9.14336 98.916 9.14336C95.828 9.14336 93.828 11.4954 93.828 14.8874C93.828 18.2634 95.748 20.5994 99.012 20.5994C100.436 20.5994 101.62 20.1514 102.644 19.4794ZM114.649 20.3914V9.35136H113.545V14.1194H107.417V9.35136H106.313V20.3914H107.417V15.1114H113.545V20.3914H114.649ZM125.851 10.3434L125.691 9.35136H117.563V10.3434H121.147V20.3914H122.235V10.3434H125.851Z" fill="white"></path>
  </svg>
);

const useStyle = makeStyles(theme => ({
  main: {
    marginTop: "64px",
    backgroundColor: "#f1f2f5",
    paddingTop: "24px",
    paddingBottom: "96px"
  },
  container: {
    maxWidth: "1240px",
    marginLeft: "auto",
    marginRight: "auto",
    minHeight: "100vh"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  new_booking: {
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 4)
    }
  },
  mr: {
    marginRight: theme.spacing(3)
  },
  btn: {
    textTransform: "none"
  },
  btn_white: {
    color: "#fff"
  },
  btn_white_border: {
    border: "1px solid #fff"
  },
  search_input: {
    paddingTop: "5px",
    paddingBottom: "5px"
  },
  search_input_root: {
    paddingTop: "5px",
    paddingBottom: "5px",
    backgroundColor: "#0a77d3",
    [theme.breakpoints.up("lg")]: {
      width: "450px"
    }
  },
  search_input_label: {
    color: "#fff",
    opacity: "50%",
    fontSize: "18px"
  },
  logo_div: {
    display: "flex",
    alignItems: "center"
  },
  paper: {
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  service_btn: {
    width: "100%",
    minWidth: "100px",
    maxWidth: "300px",
    display: "block",
    textAlign: "left",
    height: "86.5px",
    position: "relative",
    overflow: "hidden",
    [theme.breakpoints.down("xs")]: {
      margin: "auto"
    }
  },
  selected_service_btn: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    "&:hover": {
      backgroundColor: "#0a77d3"
    }
  },
  service_icon: {
    position: "absolute",
    fontSize: 68,
    bottom: -15,
    right: -20,
    opacity: "50%"
  },
  service_icon_active: {
    opacity: "100%"
  },
  isActive: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.getContrastText(theme.palette.primary.main),
    "&:hover": {
      backgroundColor: "#0a77d3"
    }
  },
  direction_input: {
    border: "none",
    width: "100%"
  },
  direction_input_root: {
    backgroundColor: "#f1f2f5",
    width: "100%"
  },
  direction_input_label: {
    marginLeft: 30
  },
  dimensions_grey: {
    backgroundColor: "transparent",
    color: "#acb1bb",
    width: 180
  },
  dimensions: {
    color: theme.palette.primary.main,
    backgroundColor: "#fff"
  },
  dimensions_container: {
    backgroundColor: "#f1f2f5",
    marginBottom: theme.spacing(7),
    width: "360px",
    padding: 3,
    borderRadius: 9
  }
}));

const navButtons = [
  "Air Freight",
  "Sea Freight",
  <span>
    Inland <br /> (Truck &#38; Barge)
  </span>,
  <span>
    Custom <br /> Clearance
  </span>
];

function App() {
  const classes = useStyle();
  const [selectedService, setSelectedService] = useState(0);
  const [importToggle, setImportToggle] = useState(true);
  const [dimensions, setDimensions] = useState(true);
  const [radioSelect1, setRadioSelect1] = useState(true);
  const [radioSelect2, setRadioSelect2] = useState({ one: false, two: false, three: false, four: false });

  return (
    <div className="App">
      <header className="App-header">
        <AppBar color="primary" position="fixed">
          <Toolbar className={classes.toolbar}>
            <div className={classes.logo_div}>
              <div style={{ marginRight: "5rem" }}>
                <a href="/">{logo}</a>
              </div>
              <Hidden smDown>
                <TextField
                  label="Search"
                  id="search-input"
                  size="small"
                  InputLabelProps={{
                    className: classes.search_input_label
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon style={{ color: "#fff" }} />
                      </InputAdornment>
                    ),
                    classes: { input: classes.search_input, root: classes.search_input_root }
                  }}
                  variant="outlined"
                />
              </Hidden>
            </div>
            <Hidden smDown>
              <div>
                <Button className={clsx(classes.btn, classes.btn_white, classes.btn_white_border, classes.mr)} variant="outlined">
                  Request Quote
                </Button>
                <Button className={clsx(classes.btn, classes.btn_white)} variant="contained" color="secondary">
                  Book Shipment
                </Button>
              </div>
            </Hidden>
            <Hidden mdUp>
              <IconButton aria-label="menu icon">
                <MenuIcon style={{ color: "#fff" }} />
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>
      </header>

      <main className={classes.main}>
        <div className={classes.container}>
          <div className={classes.new_booking}>
            <Hidden lgUp>
              <IconButton aria-label="arrow back" edge="start">
                <ArrowBackIcon />
              </IconButton>
            </Hidden>
            <Typography style={{ position: "relative" }} variant="h2" gutterBottom>
              <ArrowBackIcon style={{ position: "absolute", left: -72 }} />
              New Booking
            </Typography>
            <Typography variant="body1" style={{ marginBottom: "36px" }}>
              Fill in the information below to get a quote or create a new booking
            </Typography>
          </div>

          <Paper className={classes.paper}>
            <Typography variant="h3" style={{ marginBottom: "24px" }}>
              Select a service
            </Typography>

            <Grid spacing={4} container>
              {navButtons.map((item, index) => (
                <Grid xs={12} sm={3} key={`item-${index}`} item>
                  <Button
                    onClick={e => setSelectedService(index)}
                    variant="outlined"
                    className={clsx(classes.service_btn, classes.btn, {
                      [classes.selected_service_btn]: index === selectedService
                    })}
                  >
                    {item}
                    <span className={classes.icon}>
                      {index === 0 ? (
                        <LocalAirportIcon className={clsx(classes.service_icon, { [classes.service_icon_active]: index === selectedService })} />
                      ) : index === 1 ? (
                        <DirectionsBoatIcon className={clsx(classes.service_icon, { [classes.service_icon_active]: index === selectedService })} />
                      ) : index === 2 ? (
                        <LocalShippingIcon className={clsx(classes.service_icon, { [classes.service_icon_active]: index === selectedService })} />
                      ) : (
                        <span>
                          <svg width="54" height="72" style={{ position: "absolute", bottom: -20, right: -20 }} viewBox="0 0 26 30" fill={index === selectedService ? "#fff" : "#81868B"} xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0L1.49756 2.67617L2.99998 5.35233V6.70122C2.99998 7.26759 3.5961 7.79071 4.60903 8.22305C4.53866 8.6047 4.50139 8.99063 4.49756 9.37739C4.49756 11.1547 5.28901 12.8591 6.69781 14.1159C8.1066 15.3726 10.0173 16.0786 12.0097 16.0786C14.002 16.0786 15.9127 15.3726 17.3215 14.1159C18.7303 12.8591 19.5218 11.1547 19.5218 9.37739C19.518 8.99063 19.4807 8.6047 19.4103 8.22305C20.4232 7.79071 21.0194 7.26759 21.0194 6.70122V5.36098L22.5218 2.68481L12 0ZM12 13.4024C10.8071 13.4013 9.66337 12.9784 8.81941 12.2263C7.97546 11.4743 7.50012 10.4545 7.49756 9.39036L7.53633 9.03585C9.00862 9.2776 10.503 9.39628 12 9.39036C13.497 9.39628 14.9913 9.2776 16.4636 9.03585L16.5024 9.39036C16.4935 10.4507 16.0153 11.465 15.172 12.2124C14.3288 12.9598 13.1887 13.3797 12 13.3808V13.4024Z"></path>
                            <path d="M12 17.3973C4.93376 17.3973 0 19.2702 0 24H12H24C24 19.2702 19.0662 17.3973 12 17.3973Z"></path>
                          </svg>
                        </span>
                      )}
                    </span>
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Paper>

          <Paper className={classes.paper}>
            <div>
              <ErrorOutlineIcon />
            </div>

            <Grid spacing={4} style={{ marginBottom: "24px" }} justifyContent="space-evenly" container>
              <Grid item>
                <Button
                  onClick={e => setImportToggle(true)}
                  className={clsx(classes.btn, {
                    [classes.isActive]: importToggle
                  })}
                  variant="outlined"
                  color="primary"
                >
                  Import
                </Button>
                <Button
                  onClick={e => setImportToggle(false)}
                  className={clsx(classes.btn, {
                    [classes.isActive]: !importToggle
                  })}
                  variant="outlined"
                  color="primary"
                >
                  Export
                </Button>
              </Grid>

              <Grid xs={12} sm={5} item>
                <TextField
                  id="from-input"
                  size="small"
                  style={{ width: "100%" }}
                  placeholder="From City or port"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon />
                      </InputAdornment>
                    ),
                    classes: { input: classes.direction_input, root: classes.direction_input_root, notchedOutline: classes.direction_input }
                  }}
                  variant="outlined"
                />
              </Grid>

              <Grid xs={12} sm={5} item>
                <TextField
                  placeholder="To City or port"
                  id="to-input"
                  size="small"
                  style={{ width: "100%" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon />
                      </InputAdornment>
                    ),
                    classes: { input: classes.direction_input, root: classes.direction_input_root, notchedOutline: classes.direction_input }
                  }}
                  variant="outlined"
                />
              </Grid>
            </Grid>

            <Grid spacing={4} justifyContent="space-evenly" container>
              <Grid xs={12} sm item>
                <TextField
                  placeholder="Ready Date"
                  id="ready-date-input"
                  size="small"
                  style={{ width: "100%" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EventNoteIcon />
                      </InputAdornment>
                    ),
                    classes: { input: classes.direction_input, root: classes.direction_input_root, notchedOutline: classes.direction_input }
                  }}
                  variant="outlined"
                />
              </Grid>

              <Grid xs={12} sm item>
                <TextField
                  value="Incoterms"
                  id="incoterms-input"
                  size="small"
                  style={{ width: "100%" }}
                  select
                  InputProps={{
                    classes: { input: classes.direction_input, root: classes.direction_input_root, notchedOutline: classes.direction_input }
                  }}
                  variant="outlined"
                >
                  <option value="Incoterms">Incoterms</option>
                </TextField>
              </Grid>

              <Grid xs={12} sm item>
                <TextField
                  label="Total Cargo Value"
                  id="cargo-value-input"
                  size="small"
                  style={{ width: "100%" }}
                  InputProps={{
                    classes: { input: classes.direction_input, root: classes.direction_input_root, notchedOutline: classes.direction_input }
                  }}
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Paper>

          <Paper className={classes.paper}>
            <Grid justifyContent="space-between" container>
              <Grid md item>
                <Typography variant="h3" style={{ marginBottom: "24px" }}>
                  Cargo Details
                </Typography>
                <div className={classes.dimensions_container}>
                  <Button
                    disableElevation
                    onClick={e => setDimensions(true)}
                    className={clsx(classes.btn, classes.dimensions_grey, {
                      [classes.dimensions]: dimensions
                    })}
                    variant="contained"
                    color="default"
                  >
                    Total Dimensions
                  </Button>
                  <Button
                    disableElevation
                    onClick={e => setDimensions(false)}
                    className={clsx(classes.btn, classes.dimensions_grey, {
                      [classes.dimensions]: !dimensions
                    })}
                    variant="contained"
                    color="default"
                  >
                    Package Details
                  </Button>
                </div>

                <div>
                  <TextField
                    style={{ width: 180, marginRight: "36px" }}
                    InputLabelProps={{
                      shrink: true
                    }}
                    InputProps={{
                      endAdornment: "cbm"
                    }}
                    variant="outlined"
                    label="Total Volume"
                  />
                  <TextField
                    style={{ width: 180 }}
                    InputLabelProps={{
                      shrink: true
                    }}
                    InputProps={{
                      endAdornment: "Kg"
                    }}
                    variant="outlined"
                    label="Total Weight"
                  />
                </div>
              </Grid>
              <Grid md item>
                <FormControlLabel onClick={e => setRadioSelect1(!radioSelect1)} control={<IOSSwitch checked={radioSelect1} name="checkedB" />} label="Dangerous Cargo (ex. Chemicals, Battery" />
              </Grid>
            </Grid>
          </Paper>

          <Paper className={classes.paper} style={{ marginBottom: 0 }}>
            <Typography variant="h3" style={{ marginBottom: "24px" }}>
              Additional Services
            </Typography>

            <Grid spacing={6} container>
              <Grid item container spacing={3} md={6}>
                <Grid item>
                  <IOSSwitch onClick={e => setRadioSelect2({ ...radioSelect2, one: !radioSelect2.one })} checked={radioSelect2.one} name="checkedB" />
                </Grid>
                <Grid item>
                  <Typography variant="h3">Export Forwarding</Typography>
                  <Typography variant="body1">Fill in the information below to get a quote or create a new booking</Typography>
                </Grid>
              </Grid>
              <Grid item container spacing={3} md={6}>
                <Grid item>
                  <IOSSwitch onClick={e => setRadioSelect2({ ...radioSelect2, two: !radioSelect2.two })} checked={radioSelect2.two} name="checkedB" />
                </Grid>
                <Grid item>
                  <Typography variant="h3">Import Customs Clearance</Typography>
                  <Typography variant="body1">Fill in the information below to get a quote or create a new booking</Typography>
                </Grid>
              </Grid>
              <Grid item container spacing={3} md={6}>
                <Grid item>
                  <IOSSwitch onClick={e => setRadioSelect2({ ...radioSelect2, three: !radioSelect2.three })} checked={radioSelect2.three} name="checkedB" />
                </Grid>
                <Grid item>
                  <Typography variant="h3">Additional Services</Typography>
                  <Typography variant="body1">Fill in the information below to get a quote or create a new booking</Typography>
                </Grid>
              </Grid>
              <Grid item container spacing={3} md={6}>
                <Grid item>
                  <IOSSwitch onClick={e => setRadioSelect2({ ...radioSelect2, four: !radioSelect2.four })} checked={radioSelect2.four} name="checkedB" />
                </Grid>
                <Grid item>
                  <Typography variant="h3">Additional Services</Typography>
                  <Typography variant="body1">Fill in the information below to get a quote or create a new booking</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </main>
    </div>
  );
}

export default App;
