import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  TextField,
} from "@mui/material";

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
        <List>
          <ListItem>
            あ<IconButton>あ</IconButton>
          </ListItem>
        </List>
      </Box>
    </>
  );
}

export default App;
