export const SkButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="w-full sm:w-52 text-sm text-white bg-transparent h-14 border flex justify-center items-center rounded-2xl hover:shadow-lg transition duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      {children}
    </button>
  );
};
