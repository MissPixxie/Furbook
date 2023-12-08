export type Places = {
  _id: string;
  name: string;
  category: string;
  location: string;
  description: string;
};

export interface Events {
  _id: string;
  title: string;
  place: number;
  time: string;
  description: string;
  typeOfEvent: string;
  date: Date;
};

export type Dogs = {
  _id: string;
  name: string;
  age: number;
  sex: string;
  breed: string;
  neutered: boolean;
  images?: string;
  friends?: string;
  owner: string;
};

export type Users = {
  _id: string;
  name: string;
  email: string;
  password: string;
  country: string;
  city: string;
  messages: {};
  dogs: [];
  savedPlaces: [];
  savedPosts: [];
  savedEvents: [];
  createdAt: Date;
};

export type Messages = {
  sender: string;
  receiver: number;
  message: {
    messageTitle: string;
    messageContent: string;
  };
  date: Date;
};
