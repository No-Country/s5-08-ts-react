export interface UserProperties {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: Location;
  role: string;
  institutionId: string;
  createAt: Date;
  updateAt: Date;
}

export class Location {
  cyty: string;
  locality: string;
  street: string;
  houseNumber: string;
  department: string;
}
