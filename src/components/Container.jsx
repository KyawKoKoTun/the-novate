export default function Container({ children }) {
  return (
    <div className="w-full my-12 px-[20px] sm:px-[80px] md:px-[140px] lg:px-[200px]">
      {children}
    </div>
  );
}
