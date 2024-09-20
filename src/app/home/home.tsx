"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import BudgetPanel from "@/components/BudgetPanel";
import BudgetRequestDataTable from "@/components/BudgetRequestDataTable";
import Header from "@/components/Header";
import { BudgetRequest } from "@/models/budget-request";
import { createBudgetItem, fetchBudgetItems } from "@/services/budget-item";
import EditBudgetRequest from "@/components/BudgetRequestForm";
import BudgetApprovalDataTable from "@/components/BudgetApprovalDataTable";
import Comp1 from "@/components/DemoContext";
import { Link } from "lucide-react";
import LoginComponent from "@/components/LoginComponent";

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
    quantity: 1,
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
      quantity: 1,
      status: "APPROVED",
    });
  };

  return (
    <div>
      <LoginComponent/>
   <Link href="/edit">edit</Link>
      {/* <EditBudgetRequest/> */}
      <Comp1/>
      {/* <BudgetApprovalDataTable /> */}
      <Header />
      <main className="container mx-auto">
        <div className="mt-4">
          <BudgetPanel items={budgetRequests} />
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            Title:
            <input
              name="title"
              value={newRequest.title}
              onChange={updateField}
            />
          </div>
          <div>
            Amount:
            <input
              name="price"
              type="number"
              value={newRequest.amount}
              onChange={updateField}
            />
          </div>
          <button>Add</button>
        </form>
        <div className="mt-4">
          <BudgetRequestDataTable items={budgetRequests} />
        </div>
      </main>
    </div>
  );
}

export default Home;
