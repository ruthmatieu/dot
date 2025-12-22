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
import { Nav } from "./Nav";

const LandingPage = () => {
  return (
    <div>
      <Nav />
      <section>
        <h1>
          Welcome to <span>Dot</span>!
        </h1>
      </section>
    </div>
  );
};

export default LandingPage;
