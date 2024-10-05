"use client";

import Bounded from "@/components/Bounded";
import { FundEscrowForm } from "@/components/modules/escrow/FundEscrowForm";
import WithAuthProtect from "@/constants/helpers/WithAuth";

const FundEscrow = () => {
  return (
    <Bounded center={true}>
      <div className="flex flex-col gap-3 w-full md:w-1/3">
        <h1 className="text-4xl font-bold">Fund an Escrow</h1>
        <h2>Fill in the details below to fund an escrow.</h2>
        <FundEscrowForm />
      </div>
    </Bounded>
  );
};

export default WithAuthProtect(FundEscrow);
