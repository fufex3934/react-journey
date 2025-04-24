import { getImageUrl } from "./utils";

export default function Avatar({ person, size }) {
  return (
    <div className="container mx-auto mt-4">
      <div className="border border-gray-500 w-50 h-50 rounded-2xl flex items-center justify-center">
      <img
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
        className=" rounded-full  "
      />
      </div>
    </div>
  );
}
