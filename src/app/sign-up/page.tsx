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
import { SignUpFormSchema } from "./validation";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const form = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      firstName: "",
    },
  });

  type FormData = z.infer<typeof SignUpFormSchema>;

  const router = useRouter();

  const handleLoginButton = () => {
    router.push("/login");
  };

  const onSubmit = async (data: FormData) => {
    if (!_.isEmpty(form.formState.errors)) {
      return;
    }

    const { confirmPassword, password } = data;

    if (password !== confirmPassword) {
      form.setError("confirmPassword", {
        type: "manual",
        message: "Password does not match",
      });

      form.setError("password", {
        type: "manual",
        message: "Password does not match",
      });

      return;
    }
    form.clearErrors("confirmPassword");
  };

  return (
    <div>
      <Header />
      <div className="py-28 flex justify-center dark:bg-[#171717]">
        <div className="bg-white w-[498px] rounded-lg dark:bg-[#171717]">
          <p className="text-center py-6 text-[#1E1E1E] dark:text-white font-semibold">
            Sign Up
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="px-6 py-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="First Name"
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
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Last Name"
                            {...field}
                            className="dark:bg-[#171717] dark:placeholder:text-white"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
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

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Confirm Password"
                          type="password"
                          className={`dark:bg-[#171717] dark:placeholder:text-white ${
                            form.formState.errors.confirmPassword
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

                <Button type="submit" className="my-6 w-full dark:text-white">
                  SIGN UP
                </Button>
                <SocialButton icon={<Google />} text="Sign Up with Google" />
                <SocialButton
                  icon={<Facebook />}
                  text="Sign Up with Facebook"
                />
                <SocialButton icon={<Apple />} text="Sign Up with Apple" />
                <div className="text-center text-sm">
                  <p>
                    Already have an account?{" "}
                    <span
                      className="font-medium text-brand-primary-blue cursor-pointer"
                      onClick={handleLoginButton}
                    >
                      Log In
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

export default SignUp;
