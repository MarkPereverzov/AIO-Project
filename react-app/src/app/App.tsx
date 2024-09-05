import { AppRouter } from './routers/AppRouter';
import { TokenProvider } from '../components/context';
import './styles/App.css'
import './styles/page.css'

function App() {
  return (
    <TokenProvider>
      <AppRouter></AppRouter>
    </TokenProvider>
  );
}

export default App;
