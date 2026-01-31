function Error({ error }) {
  return (
    <div className="text-red-700 font-bold text-2xl flex justify-center items-center h-full w-full">
      <span>{error}</span>
    </div>
  );
}

export default Error;
