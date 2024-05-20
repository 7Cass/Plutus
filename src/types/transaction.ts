import { $Enums, TransactionType } from "@prisma/client";
import { Category } from "./category";

export type Transaction = {
  id: number;
  userId: string;
  date: Date;
  amount: number;
  type: TransactionType;
  categoryId: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  
  category: Category;
  // user: User;
};
