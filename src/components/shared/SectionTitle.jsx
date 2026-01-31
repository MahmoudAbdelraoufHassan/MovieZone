function SectionTitle({ children }) {
  return (
    <h2 className="section__title font-family-2 tracking-wide dark:text-white first-letter:text-red-600">
      {children}
    </h2>
  );
}

export default SectionTitle;
