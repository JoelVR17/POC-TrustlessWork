"use client";

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
import { initializeEscrow } from "@/services/escrow/initializeEscrow";
import { useWalletStore } from "@/store/walletStore";

const formSchema = z.object({
  engagementId: z.string().min(5, {
    message: "Engagement must be at least 5 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  serviceProvider: z.string().min(1, {
    message: "Service provider is required.",
  }),
  amount: z.string().min(1, {
    message: "Amount is required.",
  }),
});

export function InitializeEscrowForm() {
  const { address } = useWalletStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      engagementId: "",
      description: "",
      serviceProvider: "",
      amount: "",
    },
  });

  const onSubmit = async (payload: z.infer<typeof formSchema>) => {
    // Insert the signer through zustand state
    const data = { ...payload, signer: address };
    const response = await initializeEscrow(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-6"
      >
        <FormField
          control={form.control}
          name="engagementId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Engagement</FormLabel>
              <FormControl>
                <Input placeholder="Enter the engagement" {...field} />
              </FormControl>
              <FormDescription>
                This engagement will help you identify the escrows associated
                with a service provider.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Enter the description" {...field} />
              </FormControl>
              <FormDescription>Describe the escrow.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="serviceProvider"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service Provider</FormLabel>
              <FormControl>
                <Input placeholder="Enter the service provider" {...field} />
              </FormControl>
              <FormDescription>
                Please enter the wallet of service provider
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter the amount of the entire escrow"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Please enter the amount/price of the escrow
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-1/4" type="submit">
          Initialize Escrow
        </Button>
      </form>
    </Form>
  );
}
