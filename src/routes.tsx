import { Route, Switch } from "wouter";
import { HomeRoute } from "./routes/HomeRoute";
import { NotFound } from "./routes/NotFound";
import { NewProfileRoute } from "./routes/NewProfileRoute";

export function Router() {
  return (
    <Switch>
      <Route path="/" component={HomeRoute} />
      <Route path="/profiles/new" component={NewProfileRoute} />
      /* 404 Page */
      <Route component={NotFound} />
    </Switch>
  );
}
