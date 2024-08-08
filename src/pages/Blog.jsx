import { blogPosts } from "../data";

export default function BlogPage() {
  return (
    <div id="featured-works">
      <h2 className="page-header">Blogs</h2>
      <ul className="works">
        {blogPosts.map((blog) => (
          <li>
            <BlogDetail blog={blog} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BlogDetail({ blog }) {
  const { title, date, tags, description } = blog;
  return (
    <div className="work">
      <div className="work-details">
        <h2>{title}</h2>
        <p className="date-tag">
          <span className="date">{date}</span>
          <span className="blog-tags">{tags}</span>
        </p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}
