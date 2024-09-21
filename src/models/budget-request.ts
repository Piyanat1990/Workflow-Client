export interface BudgetRequest {
  id: number;
  title: string;
  amount: number;
  quantity: number;
  status: "PENDING" | "APPROVED" | "REJECTED";
}

export interface BudgetRequestByID {
  title: string;
  amount: number;
  quantity: number;
}

