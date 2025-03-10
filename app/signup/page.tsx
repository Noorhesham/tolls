"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import * as z from "zod";
import { User, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Link from "next/link";
import InputForm from "../components/Input";
import { useEffect, useRef } from "react";
import AnimatedTitle from "../components/AnimatedTitle";

const formSchema = z
  .object({
    firstName: z.string().min(2, "First name is required"),
    lastName: z.string().min(2, "Last name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export default function SignUpPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex min-h-screen">
      {" "}
      {/* Left side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          src="/e8572838d78674c8f91046e1afba234d.jpg"
          alt="Sign up"
          className="absolute inset-0 w-full h-full object-cover"
        />{" "}
        <div className="absolute inset-0 bg-black/50" />
      </div>
      {/* Right side - Form */}
      <div className="flex-1 flex flex-col justify-center p-8 lg:p-16 bg-black">
        <div className="w-full max-w-md mx-auto space-y-8">
          <div className="space-y-2 flex flex-col items-center">
            <AnimatedTitle title="Register |" paragraph="Sign up to continue" />
            <p className="text-sm my-2 font-semibold text-nowrap text-center text-gray-400">Sign up to continue</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <InputForm name="firstName" placeholder="First Name" icon={User} />
                <InputForm name="lastName" placeholder="Last Name" icon={User} />
              </div>
              <InputForm name="email" placeholder="Email" icon={Mail} />
              <InputForm type="password" name="password" placeholder="Password" icon={Lock} />
              <InputForm type="password" name="confirmPassword" placeholder="Confirm Password" icon={Lock} />

              <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200">
                Register
              </Button>
            </form>
          </Form>

          <div className="text-center">
            <p className="text-sm text-gray-400">
              Already have an account?{" "}
              <Link href="/login" className="text-white hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
