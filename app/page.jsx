import prisma from "@/lib/prisma";
import PostCard from "./components/PostCard";

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true }
      }
    }
  })
  return posts;
}

export default async function Home() {

  const posts = await getPosts()

  return (
    <main>
      <h1>Home page</h1>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-3'>
        {
          posts.map(post => {

            return <PostCard key={post.id} post={post} />
          })
        }
      </div>
    </main>
  );
}
