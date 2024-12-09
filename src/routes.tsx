import { Route, Switch } from "wouter";
import { HomeRoute } from "./routes/HomeRoute";
import { NotFound } from "./routes/NotFound";

export function Router() {
  return (
    <Switch>
      <Route path="/" component={HomeRoute} />
      <Route component={NotFound} />
    </Switch>
  );
}
