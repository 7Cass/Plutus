import { ExtractReturnTypeFromPromise } from "@/types/return-type-from-promise";
import { getUserTransactions } from "./actions";
import { Prisma } from "@prisma/client";

export type TransactionWithRelation = Prisma.TransactionGetPayload<{ include: { category: true } }>;

export type Transaction = ExtractReturnTypeFromPromise<typeof getUserTransactions>;