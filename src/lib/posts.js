export async function getAllPosts() {
  const res = await fetch('/data/posts-public.json');
  const posts = await res.json();
  return posts;
}

export async function getAllTopics() {
  const posts = await getAllPosts();
  const topics = [...new Set(posts.map(p => p.topic))];
  return topics;
}

export async function getPostsByTopic(topic) {
  const posts = await getAllPosts();
  return posts.filter(post => post.topic === topic);
}
