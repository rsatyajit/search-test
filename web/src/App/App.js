import React from 'react';
import { Router, Route, browserHistory,IndexRoute} from "react-router";
import Header from '../component/header';
import List from '../component/list';
import AdminList from '../component/admin/list';

function App() {
  console.log(process.env.PUBLIC_URL);
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL} history={browserHistory}>
        <Route path={`${process.env.PUBLIC_URL}/`} component={Header}>
          <IndexRoute component={List} />
          <Route path={`${process.env.PUBLIC_URL}/list`} component={List} />
          <Route path={`${process.env.PUBLIC_URL}/admin`} component={AdminList} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
