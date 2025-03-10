"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import * as z from "zod";
import { Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import InputForm from "../components/Input";
import AnimatedTitle from "../components/AnimatedTitle";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
  rememberMe: z.boolean().optional(),
});

export default function LoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex min-h-screen">
      {/* Left side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          src="1f3f64b3db1e97753c11e82364efe514.jpg"
          alt="Login"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex flex-col justify-center p-8 lg:p-16 bg-black">
        <div className="w-full max-w-md mx-auto space-y-8">
          <div className="space-y-2 flex flex-col items-center">
            {" "}
            <AnimatedTitle title="Login |" paragraph="Welcome Back" />
            <p className="text-sm font-semibold text-gray-400">Sign in to continue</p>
          </div>

          <FormProvider {...form}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <InputForm name="email" placeholder="Email" icon={Mail} />
                <InputForm type="password" name="password" placeholder="Password" icon={Lock} />

                <div className="flex items-center justify-between">
                  <div className="flex items-centera space-x-2">
                    <Checkbox
                      id="rememberMe"
                      checked={form.watch("rememberMe")}
                      onCheckedChange={(checked) => form.setValue("rememberMe", checked as boolean)}
                      className="data-[state=checked]:bg-white data-[state=checked]:text-black"
                    />
                    <label htmlFor="rememberMe" className="text-sm font-medium leading-none text-white">
                      Remember me
                    </label>
                  </div>
                  <Link href="/forgot-password" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Forgot password?
                  </Link>
                </div>

                <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200">
                  Sign in
                </Button>
              </form>
            </Form>
          </FormProvider>

          <div className="text-center">
            <p className="text-sm text-gray-400">
              Don't have an account?{" "}
              <Link href="/signup" className="text-white hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
