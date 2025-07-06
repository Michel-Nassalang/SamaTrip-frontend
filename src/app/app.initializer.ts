import { UserService } from "./core/services/user.service";

export function initializeAppFactory(userService: UserService) {
  return () => userService.loadUser().toPromise();
}
