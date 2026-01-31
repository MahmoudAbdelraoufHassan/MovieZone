import Filter from "./Filter";

function Filters({ children, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(e);
  };

  return (
    <div className="flex justify-center md:justify-start py-10">
      <form
        className="flex gap-3 flex-col md:flex-row items-start"
        onSubmit={handleSubmit}
      >
        {children}
      </form>
    </div>
  );
}

export default Filters;
