import { useRouter } from "next/router";

export default function BlogPostsPage() {
  const route = useRouter();
  console.log(route);
  return (
    <div>
      <h1>BlogPosts Page</h1>
    </div>
  );
}
