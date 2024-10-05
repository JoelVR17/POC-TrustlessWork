import { ReactNode } from "react";

type BoundedProps = {
  children: ReactNode;
};

const Bounded = ({ children }: BoundedProps) => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen px-20 my-10 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 sm:items-start">
        {children}
      </main>
    </div>
  );
};

export default Bounded;
