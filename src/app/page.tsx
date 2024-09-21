"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import BudgetPanel from "@/components/BudgetPanel";
import BudgetRequestDataTable from "../components/BudgetRequestDataTable";
import Header from "@/components/Header";
import { BudgetRequest } from "@/models/budget-request";
import { createBudgetItem, fetchBudgetItems } from "@/services/budget-item";



let nextId = 3;
function Home() {
  const [budgetRequests, setBudgetRequests] = useState<BudgetRequest[]>([]);

  useEffect(() => {
    fetchBudgetItems().then((items) => setBudgetRequests(items));
  }, []);

  const addRequest = async (newRequest: BudgetRequest) => {
    const insertedRequest = await createBudgetItem({
      title: newRequest.title,
      quantity: newRequest.quantity,
      amount: newRequest.amount,
    });
    setBudgetRequests([...budgetRequests, insertedRequest]);
  };

  const [newRequest, setNewRequest] = useState<BudgetRequest>({
    id: 0,
    title: "",
    amount: 0,
    quantity: 0,
    status: "APPROVED",
  });

  const updateField = (event: ChangeEvent<HTMLInputElement>) => {
    const value =
      event.target.type === "number"
        ? Number(event.target.value)
        : event.target.value;
    setNewRequest({
      ...newRequest,
      [event.target.name]: value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addRequest({
      id: nextId++,
      title: newRequest.title,
      amount: newRequest.amount,
      quantity:newRequest.quantity,
      status: "APPROVED",
    });
  };

  return (
    <div>
      <Header />
      <main className="container mx-auto">
        <div className="mt-4">
          <BudgetPanel items={budgetRequests} />
        </div>
        <div className="mt-4">
          <BudgetRequestDataTable items={budgetRequests} />
        </div>
      </main>
    </div>
  );
}

export default Home;
