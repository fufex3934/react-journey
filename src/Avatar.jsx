import { getImageUrl } from "./utils";

export default function Avatar({ person, size }) {
  return (
    <div className="container mx-auto mt-4">
      <img
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
    </div>
  );
}
