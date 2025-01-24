export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  registeredEvents: Event[];
}

export interface Event {
  id: string;
  name: string;
  date: string;
  description: Address;
  price: string;
  image: string;
  capacity: number;
  spots: number;
  location: string;
  speakers: string[];
}
export interface UserState {
  user: User | null;
  isAuth: boolean;
}
export interface EventsState {
  events: Event[];
  loading: boolean;
  error: string | null;
}
