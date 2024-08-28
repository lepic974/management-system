import { Avatar } from "@/components/ui/avatar";
import { formatDate } from "@/lib/dateFormat";
import { PostHome } from "@/src/query/post.query";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import clsx from "clsx";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { string } from "zod";

type PostLayoutProps = PropsWithChildren<{
  user: PostHome["user"];
  createdAt: Date,
  className?: string,
  postId: string,
  children: string,
}>;

export const PostLayout = ({
  user,
  createdAt,
  className,
  postId,
  children
}: PostLayoutProps) => {
  return (
    <div className={clsx("flex w-full flex-row items-start p-4", className)}>
      <Avatar>
        {user.image ? (
          <AvatarImage src={user.image} alt={user.username} />
        ) : null}
        <AvatarFallback>
          {user.username.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>

      <div className="ml-4 flex w-full flex-col gap-2">
        <Link href={`/users/${user.id}`}>
          <div className="flex flex-row items-center gap-2">
            <p className="text-sm text-card-foreground mr-auto">
              {user.username}
            </p>
            {createdAt ? (
              <p className="text-sm text-muted-foreground">
                {formatDate(createdAt)}
              </p>
            ) : null}
            <button>
              <MoreHorizontal size={20} />
            </button>
          </div>
        </Link>
        {children}
      </div>
    </div>
  );
};
