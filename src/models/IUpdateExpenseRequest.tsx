export interface IUpdateExpenseRequest {
    token: string,
    expenseId: number,
    amount: number,
    description: string,
    file: File | null
}