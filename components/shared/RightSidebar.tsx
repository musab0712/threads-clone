import SuggestedUser from "./SuggestedUser";

export default function RightSidebar() {
  return (
    <section className="custom-scrollbar rightsidebar">
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-heading-medium text-light-1">Suggested Users</h3>
        <SuggestedUser />
      </div>
    </section>
  );
}
