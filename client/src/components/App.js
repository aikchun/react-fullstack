import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>Survey New</h2>;
const Landing = () => <h2>Landing</h2>;
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route>
          <div className="container">
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
