import { AppBar, Toolbar, Typography } from '@mui/material';
import './App.css';
import TabApp from './Components/TabApp';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';

function App() {
  
  return (
    <div>
      <AppBar position="static" sx={{background: '#063970'}}>
        <Toolbar>
        <Typography variant="h6">
            Personal Trainer
          </Typography>
          <SportsGymnasticsIcon style={{margin: 10}} />
        </Toolbar>
      </AppBar>
      <TabApp />

    </div>
  );
}

export default App;
