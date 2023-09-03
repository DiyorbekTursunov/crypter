import BeyondDream from './components/BeyondDream/BeyondDream';
import CuratedArtwork from './components/CuratedArtwork/CuratedArtwork'
import HotNFT from './components/Hot NFT/Hot NFT';
import Spotlight from './components/Spotlight/Spotlight';
import MainHeader from './components/mainHeader/mainHeader';
import Nav from './components/nav/nav';

function App() {
  return (
    <div className="App">
      <header className='max-w-[1520px] mx-auto px-5'>
        <Nav />
        <CuratedArtwork />
      </header>
      <section>
        <MainHeader />
      </section>
      <main>
        <HotNFT />
        <BeyondDream />
      </main>
    </div>
  );
}

export default App;