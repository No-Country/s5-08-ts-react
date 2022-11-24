import { UserProperties } from '../models/users.model';

export class UserCreatedEvent {
  static EVENT_NAME = 'user.created';
  constructor(readonly user: UserProperties) {}
}
