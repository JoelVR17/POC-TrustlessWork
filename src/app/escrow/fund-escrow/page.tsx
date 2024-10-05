import Bounded from "@/components/Bounded";
import { EscrowFundForm } from "@/components/modules/escrow/FundEscrowForm";
import React from "react";

const FundEscrow = () => {
  return (
    <Bounded>
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl font-bold">Fund an Escrow</h1>
        <h2>Fill in the details below to fund an escrow.</h2>
      </div>
      <EscrowFundForm />
    </Bounded>
  );
};

export default FundEscrow;
