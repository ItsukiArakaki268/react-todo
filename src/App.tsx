import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { CheckBox } from "@mui/icons-material";

function App() {
  return (
    <>
      <h1>TODO</h1>
      <Box
        sx={{
          maxWidth: 600,
          margin: "auto",
          padding: 2,
          backgroundColor: "grey.100",
          borderRadius: 1.5,
        }}
      >
        <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
          <TextField
            label="TODO"
            variant="outlined"
            placeholder="入力してください"
            fullWidth
          />
          <Button variant="contained">追加</Button>
        </Box>
        <List sx={{ backgroundColor: "white", borderRadius: 1 }}>
          <ListItem
            secondaryAction={
              <IconButton edge="end" color="error">
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
            divider
          >
            <ListItemButton>
              <CheckBox />
              <ListItemText primary="TODOアイテム1" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </>
  );
}

export default App;
