export type Category = {
    id: number;
    name: string;
    userId?: string | null;
    isDefault: boolean;
    createdAt: Date;
    updatedAt: Date;

    // todo: add relations
    // user?: User;
    // transactions?: Transaction[];
};
