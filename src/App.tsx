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
      <h1>Vite + React</h1>
      <Box>
        <TextField
          label="TODO"
          variant="outlined"
          placeholder="入力してください"
        />
        <Button>追加</Button>
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
