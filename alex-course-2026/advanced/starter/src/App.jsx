import Container from './ui/Container';
import Loading from './ui/Loading';

import { Outlet, useNavigation } from 'react-router';

function App() {
  const navigtion = useNavigation();
  const isLoading = Boolean(navigtion.location);

  return (
    <Container>
      {isLoading ? <Loading /> : <Outlet />}
    </Container>
  );
}

export default App;
