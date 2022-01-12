import './styles.scss';
import AppBar from './components/AppBar';
import { LazyRoutes } from './routes';

export default function App() {
  return (
    <div>
      <AppBar />
      <LazyRoutes />
    </div>
  );
}
