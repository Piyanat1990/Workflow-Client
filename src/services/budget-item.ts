import { api } from "@/lib/api";
import { BudgetRequest } from "@/models/budget-request";
import { Login } from "@/models/login";

interface FetchBudgetItemsResponse {
  data: BudgetRequest[];
}

export const fetchBudgetItems = async (): Promise<BudgetRequest[]> => {
  const response = await api.get<FetchBudgetItemsResponse>("/items");
  const { data } = response.data;
  return data;
};

// -------------------------------------

interface CreateBudgetItemRequest {
  title: string;
  amount: number;
  quantity: number;
}

interface CreateBudgetItemResponse {
  data: BudgetRequest;
}

export const createBudgetItem = async (body: CreateBudgetItemRequest): Promise<BudgetRequest> => {
  const response = await api.post<CreateBudgetItemResponse>("/items", body);
  const { data } = response.data;
  return data;
};

//////Login//////////////////////////////////////////////////////////////////////
interface CreateLoginRequest {
  username: string;
  password: string;
}

interface CreateLoginResponse {
  data: Login;
}

export const createLogin = async (body: CreateLoginRequest): Promise<Login> => {
  const response = await api.post<CreateLoginResponse>("/login", body);
  const { data } = response.data;
  return data;
};