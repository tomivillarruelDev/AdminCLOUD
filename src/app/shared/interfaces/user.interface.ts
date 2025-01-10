import { Icon } from './icon.interface';
import { UserStatus } from './user-status.enum';

export interface ItemList {
  icon?: Icon;
  text: string;
  customClasses?: string;

  status?: UserStatus;
}
