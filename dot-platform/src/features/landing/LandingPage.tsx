/*
Simple, clean engaging UI to include:
- logo
- login button (dashboard)
- contact us button (pseudo)
- 3 sections
    - hero with pseudo-CTA buttons
        - trusted companies
    - description
    - footer
*/
import { Nav } from './Nav';
import { Footer } from './Footer';

const LandingPage = () => {
  return (
    <div>
      <Nav />
      <section>
        <h1>The new standard for online payments</h1>
        <p>
          Dot is the best software platform for running an internet business. We handle billions of
          dollars every year for forward-thinking businesses around the world.
        </p>
        <button>Start now</button>
        <button>Create an account</button>
      </section>
      <section>list of businesses</section>
      <section>
        <h2>The complete toolkit for internet business</h2>
        <p>
          Dot builds the most powerful and flexible tools for internet commerce. Whether you’re
          creating a subscription service, an on-demand marketplace, an e-commerce store, or a
          crowdfunding platform, Dot's meticulously-designed APIs and unmatched functionality help
          you create the best possible product for your users. Hundreds of thousands of the world’s
          most innovative technology companies are scaling faster and more efficiently by building
          their businesses on Dot.
        </p>
        <button>Discover how businesses use Dot</button>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
