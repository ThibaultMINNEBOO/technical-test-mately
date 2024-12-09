import { Route, Switch } from "wouter";
import { HomeRoute } from "./routes/HomeRoute";
import { NotFound } from "./routes/NotFound";
import { NewProfileRoute } from "./routes/NewProfileRoute";
import { EditProfileRoute } from "./routes/EditProfileRoute";

export function Router() {
  return (
    <Switch>
      <Route path="/" component={HomeRoute} />
      <Route path="/profiles/new" component={NewProfileRoute} />
      <Route path="/profiles/:id/edit" component={EditProfileRoute} />
      /* 404 Page */
      <Route component={NotFound} />
    </Switch>
  );
}
