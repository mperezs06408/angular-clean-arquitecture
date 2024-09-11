import { ROUTES } from '@ui/helpers/constants/routes';
import { HomePage } from '@ui/pages/home/home.component';
import { LogInPage } from '@ui/pages/login/login.component';
import { PermissionsGuard } from '@ui/shared/guards/permissions.guards';
import { PostsResolverService } from '@ui/shared/posts.resolver';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: ROUTES.HOME,
    component: HomePage,
    canActivate: [PermissionsGuard],
    resolve: {
      posts: PostsResolverService,
    },
  },
  {
    path: ROUTES.LOGIN,
    component: LogInPage,
  },
];
