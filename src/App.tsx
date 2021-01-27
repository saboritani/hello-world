import { FC } from 'react';
import './App.css';

const Header: FC = () => (
  <header className="hero is-dark is-bold">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">Cute Dog Images</h1>
      </div>
    </div>
  </header>
);

const Image = () => {
  const url = 'https://images.dog.ceo/breeds/shiba/shiba-8.jpg';

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src={url} alt="cute dog" />
        </figure>
      </div>
    </div>
  );
};

const Gallery = () => (
  <div className="columns is-vcentered is-multiline">
    <div className="column is-3">
      <Image />
    </div>
  </div>
);

const Main = () => (
  <main>
    <section className="section">
      <div className="container">
        <Gallery />
      </div>
    </section>
  </main>
);

const Footer = () => (
  <footer className="footer">
    <div className="content has-text-centered">
      <p>Dog images are retrieved from Dog API</p>
      <p>
        <a href="https://dog.ceo/dog-api/about">Donate to Dog API</a>
      </p>
    </div>
  </footer>
);
const App: FC = () => (
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
