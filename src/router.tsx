import { Outlet, createRootRoute, createRoute, createRouter } from '@tanstack/react-router';

import { Layout } from './components/Layout';
import { ExperiencePage } from './pages/ExperiencePage';
import { HomePage } from './pages/HomePage';
import { StackPage } from './pages/StackPage';

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const stackRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/stack',
  component: StackPage,
});

const experienceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/experience',
  component: ExperiencePage,
});

const routeTree = rootRoute.addChildren([indexRoute, stackRoute, experienceRoute]);

export const router = createRouter({
  routeTree,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
