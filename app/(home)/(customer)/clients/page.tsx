// import { getAuthSession } from "@/lib/auth";
import List from "@/components/List";
import activity from "@/data/data.json";



export default function ClientPage() {
  // const session = await getAuthSession();
  // const posts = await getLatestPosts();

  return (
    <>
      <div className="w-full h-[100px] gap-2" />
      <List activity={activity} />

      {/* <div className="divide-y divide-muted">
        <h1>Infos Profile</h1>

        {posts.map(() => (
          // <Post post={p} key={p.id} />)
        )}
      </div> */}
    </>
  );
}
