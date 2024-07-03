import { Router } from 'express';
import { UserRoutes } from '../modules/User/user.route';
import { BannerRoutes } from '../modules/Banner/Banner.route';
import { PackageRouter } from '../modules/Packages/Package.route';
import { ThinksRoutes } from '../modules/thinks_to_do/thinks.route';
import { HotelsRoutes } from '../modules/hotels/hotels.route';
import { EventRouter } from '../modules/events/event.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { MenuRouter } from '../modules/menu/menu.route';

type TModuleRoutes = {
  path: string;
  route: Router;
};

const router = Router();

const moduleRoutes: TModuleRoutes[] = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/menu',
    route: MenuRouter,
  },
  {
    path: '/banner',
    route: BannerRoutes,
  },

  {
    path: '/packages',
    route: PackageRouter,
  },
  {
    path: '/thinks',
    route: ThinksRoutes,
  },
  {
    path: '/hotels',
    route: HotelsRoutes,
  },
  {
    path: '/events',
    route: EventRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
