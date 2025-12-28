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
import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

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
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
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
