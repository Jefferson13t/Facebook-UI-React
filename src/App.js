import LeftSection from './Components/LeftSection';
import RightSection from './Components/RightSection';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <div className="container__main">
        <LeftSection />
        <RightSection />
      </div>
      <Footer />

    </div>
  )
}

export default App;
