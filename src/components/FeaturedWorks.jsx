import { featuredWorks } from "../data";
import image from "/src/assets/image.png";

export default function FeaturedWorks() {
  return (
    <div id="featured-works">
      <p className="section-header">Featured Works</p>
      <ul className="works">
        <li>
          <WorkDetail work={featuredWorks[0]} />
        </li>
        <li>
          <WorkDetail work={featuredWorks[1]} />
        </li>
        <li>
          <WorkDetail work={featuredWorks[2]} />
        </li>
      </ul>
    </div>
  );
}

export function WorkDetail({ work }) {
  const { title, date, tags, description, imageUrl } = work;
  return (
    <>
      <div className="work">
        <img src={imageUrl} alt="Picture of project" />
        <div className="work-details">
          <h2>{title}</h2>
          <p>
            <span className="work-date">{date}</span>
            <span className="work-tags">{tags}</span>
          </p>
          <p className="description">{description}</p>
        </div>
      </div>
    </>
  );
}
