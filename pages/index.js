import Link from "next/link";
import fs from "fs";

const Home = ({ slugs }) => (
  <div>
  <br/>
  <h2>Main Content:</h2>
    slugs:
    {slugs.map(slug => {
      return (
        <div key={slug}>
          <Link href={"/blog/" + slug}>
            <a>{"/blog/" + slug}</a>
          </Link>
        </div>
      );
    })}
    <br/>
  </div>
);

export const getStaticProps = async () => {
  const files = fs.readdirSync("content/posts");
  return {
    props: {
      slugs: files.map(filename => filename.replace(".md", ""))
    }
  };
};

export default Home;
