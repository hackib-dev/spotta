"use client";

import _ from "lodash";
import Header from "@/components/header/page";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import SocialButton from "@/components/ui/SocialButton/page";
import { Apple, Facebook, Google } from "../../../public";
import { LoginFormSchema } from "./validation";
import { useRouter } from "next/navigation";

const Login = () => {
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      firstName: "",
    },
  });

  type FormData = z.infer<typeof LoginFormSchema>;

  const router = useRouter();

  const handleLoginButton = () => {
    router.push("/homepage");
  };

  const handleSignupButton = () => {
    router.push("/sign-up");
  };

  const onSubmit = async (data: FormData) => {
    if (!_.isEmpty(form.formState.errors)) {
      return;
    }
  };

  return (
    <div>
      <Header />
      <div className="py-28 flex justify-center dark:bg-[#171717]">
        <div className="bg-white w-[348px] rounded-lg dark:bg-[#0D0D0D]">
          <p className="text-center py-6 text-[#1E1E1E] dark:text-white font-semibold">
            Log In
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="px-6 py-6 space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="E-mail address"
                          {...field}
                          className="dark:bg-[#171717] dark:placeholder:text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Password"
                          type="password"
                          className={`dark:bg-[#171717] dark:placeholder:text-white ${
                            form.formState.errors.password
                              ? "border-[#E95F5F]"
                              : ""
                          }`}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="my-6 w-full dark:text-white"
                  onClick={handleLoginButton}
                >
                  LOG IN
                </Button>
                <SocialButton icon={<Google />} text="Login with Google" />
                <SocialButton icon={<Facebook />} text="Login with Facebook" />
                <SocialButton icon={<Apple />} text="Login with Apple" />
                <div className="text-center text-sm">
                  <p className="mb-4 underline cursor-pointer">
                    Forgot your password?
                  </p>
                  <p>
                    Don&apos;t have an account?{" "}
                    <span
                      className="font-medium text-brand-primary-blue cursor-pointer"
                      onClick={handleSignupButton}
                    >
                      Sign Up
                    </span>
                  </p>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
