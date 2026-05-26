/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Route, Switch } from 'wouter';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import CustomerDashboard from './pages/CustomerDashboard';
import BuilderDashboard from './pages/BuilderDashboard';

export default function App() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/app/customer" component={CustomerDashboard} />
      <Route path="/app/builder" component={BuilderDashboard} />
      <Route>
        <LandingPage />
      </Route>
    </Switch>
  );
}
