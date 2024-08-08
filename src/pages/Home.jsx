import HeroSection from "../components/HeroSection";
import RecentPosts from "../components/RecentPosts";
import FeaturedWorks from "../components/FeaturedWorks";
export default function HomePage() {
  return (
    <div id="content">
      <HeroSection />
      <RecentPosts />
      <FeaturedWorks />
    </div>
  );
}
