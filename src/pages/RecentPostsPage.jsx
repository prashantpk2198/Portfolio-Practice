import { Link } from "react-router-dom";
import { PostDetail } from "../components/RecentPosts";
import { recentPosts } from "../data";

export default function RecentPostsPage() {
  return (
    <div id="recent-post-section">
      <h2 className="page-header">Recent Posts</h2>
      <div id="posts">
        {recentPosts.map((post) => (
          <PostDetail post={post} />
        ))}
      </div>
    </div>
  );
}
