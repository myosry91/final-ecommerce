import Title from "../../ui/Title";
import Cards from "./Cards";

function NewArrivals() {
  return (
    <div className="container py-12">
      <Title title={"New Arrivals"} className={"text-center"} />
      <Cards />
    </div>
  );
}

export default NewArrivals;
