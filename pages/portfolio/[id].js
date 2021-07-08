import { useRouter } from "next/router";

export default function IdPage() {
  const route = useRouter();
  console.log(route);
  return (
    <div>
      <h1>Id Page</h1>
    </div>
  );
}
