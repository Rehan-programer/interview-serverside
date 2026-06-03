"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/resuable-components/Input";
import Button from "@/components/resuable-components/Button";

export default function LoginForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Valid email required";
    }

    if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Input
        label="Email Address"
        type="email"
        placeholder="admin@example.com"
        value={form.email}
        error={errors.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <Input
        label="Password"
        type="password"
        placeholder="••••••••"
        value={form.password}
        error={errors.password}
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />

      <div className="flex justify-end">
        <button
          type="button"
          className="text-sm text-[#009CFF] hover:text-[#0026ff] cursor-pointer transition"
        >
          Forgot password?
        </button>
      </div>

      <Button type="submit" className="w-full">
        Sign In
      </Button>
    </form>
  );
}