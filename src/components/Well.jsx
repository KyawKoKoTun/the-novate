export default function Well({ children }) {
  return (
    <>
      <div className="px-[20px] my-12 sm:px-[80px] md:px-[140px] lg:px-[200px] py-16 bg-zinc-950">
        {children}
      </div>
    </>
  );
}
