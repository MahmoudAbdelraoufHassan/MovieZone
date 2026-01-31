import SectionTitle from "../shared/SectionTitle";
function MediaSection({ sectionTitle, children }) {
  return (
    <div>
      {" "}
      <section className="my-20">
        <div className="container mx-auto px-5">
          <SectionTitle>{sectionTitle}</SectionTitle>
          {children}
        </div>
      </section>
    </div>
  );
}

export default MediaSection;
