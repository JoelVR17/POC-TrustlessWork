"use client";

import Bounded from "@/components/Bounded";
import { FundEscrowForm } from "@/components/modules/escrow/FundEscrowForm";
import WithAuthProtect from "@/constants/helpers/WithAuth";

const FundEscrow = () => {
  return (
    <Bounded>
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl font-bold">Fund an Escrow</h1>
        <h2>Fill in the details below to fund an escrow.</h2>
      </div>
      <FundEscrowForm />
    </Bounded>
  );
};

export default WithAuthProtect(FundEscrow);
