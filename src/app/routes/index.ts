import { Router } from 'express';
import { UserRoutes } from '../modules/User/user.route';
import { BannerRoutes } from '../modules/Banner/Banner.route';
import { PackageRouter } from '../modules/Packages/Package.route';

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
    path: '/banner',
    route: BannerRoutes,
  },
  
  {
    path: '/packages',
    route: PackageRouter,
  },
  
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
