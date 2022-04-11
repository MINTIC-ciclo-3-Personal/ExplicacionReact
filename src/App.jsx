import 'styles/estilos.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Index from 'pages';
import RhodesianInfoPage from 'pages/Rhodesian';
import Layout from 'layouts/Layout';
import BorderCollie from 'pages/borderCollie';

function App() {
  return (
    <div classNameName="App">
      <Router>
        <Layout>
          <Switch>
            <Route path="/rhodesian">
              <RhodesianInfoPage />
            </Route>
            <Route path="/BorderCollie">
              <BorderCollie />
            </Route>
            <Route path="/">
              <Index />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
