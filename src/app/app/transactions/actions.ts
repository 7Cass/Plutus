"use server"

import { auth } from "@/services/auth"
import prisma from "@/services/database";
import { TransactionWithRelation } from "./types";

type ApiResponse<D, E> = {
    error: E | null,
    data: D | null
};

export async function getUserTransactions(): Promise<ApiResponse<TransactionWithRelation[], string>> {
    const session = await auth();

    if (!session?.user?.id) {
        return {
            error: "Not authorized.",
            data: null,
        };
    }

    const transactions = await prisma.transaction.findMany({
        where: {
            userId: session?.user?.id
        },
        include: {
            category: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

    return {
        data: transactions,
        error: null
    };
}