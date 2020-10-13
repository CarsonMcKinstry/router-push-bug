import { useRouter } from "next/router";

export default () => {
  const router = useRouter();

  return (
    <div>
      <h1>Posts</h1>
      <p>The path should be /posts/{router.query.pid}</p>
      <p>The query should be ?foo={router.query.foo}</p>
    </div>
  );
};
