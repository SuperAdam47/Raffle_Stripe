import './App.css';
import { useScrollToTop } from './hooks/use-scroll-to-top';
import Router from './routes/sections';
import ThemeProvider from './theme';


function App() {
  useScrollToTop();

  return (
    <div className="App">
     <ThemeProvider>
      <Router />
    </ThemeProvider>
    </div>
  );
}

export default App;

