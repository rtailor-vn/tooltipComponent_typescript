import React from 'react';
import CustomTooltip from 'components/CustomTooltip';
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";

function App() {
  return (
      <CustomTooltip sx={{backgroundColor: "aquamarine",borderRadius: "5px solid red"}} content={"Add"} placement={"bottom"} followCursor>
          <IconButton>
              <AddIcon />
          </IconButton>
      </CustomTooltip>
  );
}

export default App;
