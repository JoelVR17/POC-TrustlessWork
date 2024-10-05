import Bounded from "@/components/Bounded";
import { EscrowCreateForm } from "@/components/modules/escrow/CreateEscrowForm";

const CreateEscrow = () => {
  return (
    <Bounded>
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl font-bold">Create an Escrow</h1>
        <h2>
          Fill in the details below to set up a secure and reliable escrow
          agreement.
        </h2>
      </div>
      <EscrowCreateForm />
    </Bounded>
  );
};

export default CreateEscrow;
