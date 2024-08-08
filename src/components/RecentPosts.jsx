import { Link } from "react-router-dom";
import { recentPosts } from "../data";

export default function RecentPosts() {
  return (
    <>
      <div id="recent-post-section">
        <p>
          <span className="section-header">Recent Posts</span>
          <span>
            <Link id="view-all" to="Recent-Posts">
              View all
            </Link>
          </span>
        </p>
        <div id="posts">
          <PostDetail post={recentPosts[0]} />
          <PostDetail post={recentPosts[1]} />
        </div>
      </div>
    </>
  );
}

export function PostDetail({ post }) {
  const { title, date, tags, description } = post;
  return (
    <div className="post-detail">
      <h2>{title}</h2>
      <p className="date-tag">
        <span className="date">{date}</span>
        <span className="tag">{tags}</span>
      </p>
      <p className="description">{description}</p>
    </div>
  );
}
