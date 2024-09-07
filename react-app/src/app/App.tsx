import { AppRouter } from './routers/AppRouter';
import { TokenProvider, UserProvider } from '../components/context';
import './styles/App.css'
import './styles/page.css'

function App() {
  return (
    <TokenProvider>
        <UserProvider>
          <AppRouter></AppRouter>
        </UserProvider>
    </TokenProvider>
  );
}

export default App;
