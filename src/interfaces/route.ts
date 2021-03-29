import type { LoadableComponent } from '@loadable/component';

export type RouteType = {
  path: string;
  component?: LoadableComponent<any>;
  route?: RouteType[];
  redirect?: string;
  name?: string;
};
