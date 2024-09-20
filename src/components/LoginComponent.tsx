"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { createLogin } from "@/services/budget-item";

type FormData = {
  username: string;
  password: string;
 
};

function LoginRequest() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      username: "",
      password: "",
     
    },
  });



  const onSubmit = (data: FormData) => {
     createLogin(data)
    console.log(data);
    // Here you would typically save the data
  };
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">เข้าสู่ระบบ | Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-lg font-medium ">
                Username
              </label>
              <input
                type="text"
                id="username"
                {...register("username", { required: true, minLength: 3 })}
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
              />
              {errors.username && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.username.type === "required" && "Title is required"}
                  {errors.username.type === "minLength" &&
                    "Title must be at least 3 characters"}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="block text-lg font-medium ">
                Password
              </label>
              <input
                type="text"
                id="password"
                {...register("password", { required: true, minLength: 3 })}
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.password.type === "required" && "Title is required"}
                  {errors.password.type === "minLength" &&
                    "Title must be at least 3 characters"}
                </p>
              )}
            </div>
            
            <div className="flex space-x-2">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit
              </button>
              <Link
                href="/"
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default LoginRequest;
