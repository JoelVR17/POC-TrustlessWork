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
import { useWalletStore } from "@/store/walletStore";
import { fundEscrow } from "@/services/escrow/fundEscrow";

const formSchema = z.object({
  engagementId: z.string().min(5, {
    message: "Engagement must be at least 5 characters.",
  }),
});

export function FundEscrowForm() {
  const { address } = useWalletStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      engagementId: "",
    },
  });

  const onSubmit = async (payload: z.infer<typeof formSchema>) => {
    // Insert the signer through zustand state
    const data = { ...payload, signer: address };
    const response = await fundEscrow(data);
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
        <Button className="w-full md:w-1/4" type="submit">
          Fund Escrow
        </Button>
      </form>
    </Form>
  );
}
