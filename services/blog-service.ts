import  blogs  from "@/data/blogs.json";


export async function getBlogs(limit?: number) {
  return limit ? blogs.slice(0, limit) : blogs;
}
