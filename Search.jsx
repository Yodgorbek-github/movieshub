import React, { useState } from "react";
import { Box, Button, TextField, useTheme, Tab, Tabs } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';

// TabPanel komponenti
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

// Movies komponenti
function Movies() {
  const theme = useTheme();  // theme ni olish uchun hook
  const [value, setValue] = useState(0);  // faollashtirilgan tab raqami

  const handleChange = (event, newValue) => {
    setValue(newValue);  // Tab-larni o'zgartirish
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "left",
          flexDirection: "column",
          mt: "50px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <TextField
            label="Search"
            variant="standard"
            InputLabelProps={{
              sx: {
                ml: "10px",
                fontSize: "18px",
                mb: "-3px",
                textAlign: "left",
                transition: 'all 0.2s ease-out', // Animatsiya uchun transition
                transform: 'translate(0, 10px) scale(1)', // Labelning default joyi va kattaligi
                '&.MuiInputLabel-shrink': {
                  transform: 'translate(0, 0) scale(0.85)', // Shrink holatda yuqoriga va kichrayadi
                }
              },
            }}
            sx={{
              backgroundColor: '#525e75',
              borderTopLeftRadius: '5px',
              borderTopRightRadius: '5px',
              '& .MuiInputBase-input': {
                textAlign: 'left',
                pl: '10px',
                width: '75vw',
                height: '30px',
              },
            }}
          />
          <Button
            variant="contained"
            sx={{
              height: '55px',
              width: '55px',
              ml: '10px',
              backgroundColor: 'white',
              minWidth: '49px',
              padding: 0,
            }}
          >
            <SearchIcon />
          </Button>
        </Box>

        {/* Tablar Search pastiga joylashtirildi */}
        <Tabs value={value} onChange={handleChange} sx={{ mt: 2, }}>
          <Tab label="Search Movies" sx={{px: "50px"}}/>
          <Tab label="Search TV Series" sx={{px: "50px"}}/>
        </Tabs>

        <TabPanel value={value} index={0} dir={theme.direction}>
          {/* Bu yerga content qo'yishingiz mumkin */}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {/* Bu yerga content qo'yishingiz mumkin */}
        </TabPanel>
      </Box>
    </>
  );
}

export default Movies;
