import { LoginComponent } from "./pages/login/login.component";
import { ListComponent } from "./pages/list/list.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

export const routes = [
  { path: "", component: LoginComponent },
  { path: 'list', component: ListComponent },
  { path: 'dashboard', component: DashboardComponent }
];

export const navigatableComponents = [
  LoginComponent,
  ListComponent,
  DashboardComponent
];