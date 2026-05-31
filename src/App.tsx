/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Route, Switch } from 'wouter';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import CustomerSignupPage from './pages/CustomerSignupPage';
import BuilderSignupPage from './pages/BuilderSignupPage';
import CustomerDashboard from './pages/CustomerDashboard';
import BuilderDashboard from './pages/BuilderDashboard';

export default function App() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup/customer" component={CustomerSignupPage} />
      <Route path="/signup/builder" component={BuilderSignupPage} />
      <Route path="/app/customer" component={CustomerDashboard} />
      <Route path="/app/customer/documents" component={CustomerDashboard} />
      <Route path="/app/customer/builders" component={CustomerDashboard} />
      <Route path="/app/customer/monitoring" component={CustomerDashboard} />
      <Route path="/app/customer/insurance" component={CustomerDashboard} />
      <Route path="/app/customer/profile" component={CustomerDashboard} />
      <Route path="/app/builder" component={BuilderDashboard} />
      <Route path="/app/builder/projects" component={BuilderDashboard} />
      <Route path="/app/builder/profile" component={BuilderDashboard} />
      <Route path="/app/builder/pathways" component={BuilderDashboard} />
      <Route path="/app/builder/training" component={BuilderDashboard} />
      <Route path="/app/builder/billing" component={BuilderDashboard} />
      <Route>
        <LandingPage />
      </Route>
    </Switch>
  );
}
