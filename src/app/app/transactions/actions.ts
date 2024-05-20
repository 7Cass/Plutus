"use server"

import { auth } from "@/services/auth"
import prisma from "@/services/database";
import { TransactionWithRelation } from "./types";
import { z } from "zod";
import { createTransactionSchema } from "./schemas";
import { Category } from "@/types/category";

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

export async function getUserCategories(): Promise<Category[] | undefined> {
    try {
        const session = await auth();

        if (!session?.user?.id) {
            throw new Error('Not authorized.');
        }

        const categories = await prisma.category.findMany({
            where: {
                OR: [
                    { userId: session.user.id },
                    { isDefault: true }
                ]
            },
        });

        return categories;
    } catch (error) {
        console.error(error);
        return;
    }
}

export async function createTransaction(input: z.infer<typeof createTransactionSchema>) {
    const session = await auth();

    if (!session?.user?.id) {
        return {
            error: "Not authorized.",
            data: null,
        };
    }

    const newTransaction = await prisma.transaction.create({
        data: {
            userId: session.user.id,
            amount: input.amount,
            type: input.type,
            categoryId: input.categoryId,
            date: input.date,
            description: input.description
        }
    });

    return {
        error: null,
        data: newTransaction,
    };
}