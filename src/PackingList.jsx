import Item from "./Item";
export default function PackingList() {
  return (
    <section className="container mx-auto mt-5 bg-gray-700 text-white p-4">
      <h1 className="font-extrabold text-3xl">Sally Ride's Packing List</h1>
      <ul>
        <Item
          isPacked={true}
          name="Space suit"
        />
        <Item
          isPacked={true}
          name="Helmet with a golden leaf"
        />
        <Item
          isPacked={false}
          name="Photo of Tam"
        />
      </ul>
    </section>
  );
}
