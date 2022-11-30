import { AppBar, Toolbar, Typography } from '@mui/material';
import './App.css';
import TabApp from './Components/TabApp';

function App() {
  
  return (
    <div>
      <AppBar position="static" sx={{background: '#063970'}}>
        <Toolbar>
        <Typography variant="h6">
            PersonalTrainer
          </Typography>
        </Toolbar>
      </AppBar>
      <TabApp />

    </div>
  );
}

export default App;
