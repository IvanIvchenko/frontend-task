export interface IRouteConfig {
  path: string;
  title?: string;
  defaultBackTo?: string;
  noBottomNav?: boolean;
  noRightButtons?: boolean;
}

export const ROUTES = {
  main: { path: '/home/electronics', title: 'Electronics' },
  item: { path: '/home/electronics/:id', title: 'Electronics' },
}