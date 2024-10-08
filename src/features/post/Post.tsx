import { Button } from "@/components/ui/button";
import { PostHome } from "@/src/query/post.query";
import { Heart, MessageCircle } from "lucide-react";
import Link from "next/link";
import { PostLayout } from "./PostLayout";

type PostProps = {
  post: PostHome;
};
export const Post = ({ post }: PostProps) => {
  const name = post.user.name;
  return (
    <PostLayout user={post.user} postId={post.id} createdAt={post.createAt}>
      <Link href={`/posts/${post.id}`} className="text-sm text-foreground">
        {post.content}
      </Link>

      <div className="flex gap-2 items-center">
        <Button size="icon" variant="ghost">
          <Heart size={20} />
        </Button>
        <Button size="icon" variant="ghost">
          <MessageCircle size={20} />
        </Button>
      </div>

      <div className="">
        <Link
          href={`/posts/${post.id}`}
          className="text-muted-foreground text-sm"
        >
          {post._count.likes} likes
        </Link>
        {" . "}
        <Link
          href={`/posts/${post.id}`}
          className="text-muted-foreground text-sm"
        >
          {post._count.replies} comments
        </Link>
      </div>
    </PostLayout>
  );
};
