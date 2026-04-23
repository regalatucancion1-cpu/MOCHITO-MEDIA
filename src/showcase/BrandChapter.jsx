import Post from "./pieces/Post";
import Story from "./pieces/Story";
import Reel from "./pieces/Reel";
import Branding from "./pieces/Branding";

export default function BrandChapter({ brand }) {
  const { name, kicker, tagline, Post: PostContent, Story: StoryContent, ReelOverlay, Branding: BrandingContent, videoSrc } = brand;
  return (
    <div className="brand-chapter">
      <div className="brand-meta">
        <div className="brand-chapter-kicker">{kicker}</div>
        <h3 className="brand-chapter-name">{name}</h3>
        <p className="brand-chapter-tagline">{tagline}</p>
      </div>
      <div className="brand-pieces brand-pieces--grid">
        <Branding scale={0.26}><BrandingContent /></Branding>
        <Post scale={0.26}><PostContent /></Post>
        <Story scale={0.26}><StoryContent /></Story>
        <Reel scale={0.26} videoSrc={videoSrc}>
          <ReelOverlay />
        </Reel>
      </div>
    </div>
  );
}
