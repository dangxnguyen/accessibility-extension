import styles from "./style";
import { TextToSpeech, Project, ContentAdjustments, DisplayAdjustments, Footer, Navbar, Home, Explore } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Home />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Project />
        <TextToSpeech />
        <ContentAdjustments />
        <DisplayAdjustments />
        <Explore />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
