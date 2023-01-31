import { Box } from "@mui/material";
import "../App.css";

function MessageBox(props) {
  return (
    <Box className={"MessageBox"} sx={{ border: 1 }}>
      <div className={"MessageText"} style={{ color: "grey" }}>
        {props.message.text}
      </div>
    </Box>
  );
}

export default MessageBox;
