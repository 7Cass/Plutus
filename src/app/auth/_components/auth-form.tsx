"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";
import { Separator } from "@/components/ui/separator";
import { ShadowIcon } from "@radix-ui/react-icons";

export function AuthForm() {
  const form = useForm();

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      await signIn("google");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Login Error",
        description: "Failed to send magic link. Please try again later.",
      });
    }
  });

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
      <div className="mx-auto w-full max-w-md space-y-4 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-gray-500 dark:text-gray-400">
            This page is under construction. Currently, we are only supporting
            login via Google.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex gap-2 items-center justify-center"
        >
          <Button
            className="w-full"
            type="submit"
            disabled={form.formState.isSubmitting}
          >
            Login with Google
          </Button>
          <Button className="w-full" type="submit" disabled>
            Login with Github
          </Button>
        </form>
      </div>
    </div>
  );
}
