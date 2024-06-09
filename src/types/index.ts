export type UserType = {
  username: string;
  email: string;
  password: string;
  avatar: string;
  isAdmin: "true" | "false";
  isActive: "true" | "false";
  phone: number;
  address: string;
  createdAt: Date;
  id: string;
};

export type ProductType = {
  title: string;
  desc: string;
  price: number;
  stock: number;
  img: string;
  color: string;
  size: string;
  createdAt: Date;
  id: string;
  category: "kitchen" | "phone" | "computer";
};