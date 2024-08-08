import { WorkDetail } from "../components/FeaturedWorks";
import { featuredWorks } from "../data";

export default function WorksPage() {
  return (
    <div id="featured-works">
      <h2 className="page-header">Featured Works</h2>
      <ul className="works">
        {featuredWorks.map((work) => (
          <li>
            <WorkDetail work={work} />
          </li>
        ))}
      </ul>
    </div>
  );
}
