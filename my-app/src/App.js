// import logo from './logo.svg';
import './App.css';
// import Square from './comps/Square';
import Movie from './comps/Movie';

function App() {

  let movie1 = {
    name: "titanic",
    link: "https://www.imdb.com/video/vi1740686617/?playlistId=tt0120338&ref_=tt_pr_ov_vi",
    Image: "https://m.media-amazon.com/images/I/811lT7khIrL._AC_UF894,1000_QL80_.jpg"
  }

  let movie2 = {
    name: "Superman",
    link: "https://www.microsoft.com/en-gb/p/superman-the-movie/8d6kgwzl5j4z?activetab=pivot%3aoverviewtab",
    Image: "https://play-lh.googleusercontent.com/oZ_0CGQfvsIVH0j3My9oKRy_9yX_d8BIZQdeVdkca16JF8qhPGfVEwy2Xv80xWb_k02dT3CaUXWg_1ojx0I"
  }

  let movie3 = {
    name: "Fast & Furious",
    link: "https://www.imdb.com/title/tt5433140/",
    Image: "https://m.media-amazon.com/images/M/MV5BNzZmOTU1ZTEtYzVhNi00NzQxLWI5ZjAtNWNhNjEwY2E3YmZjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg"
  }

  return (
    <div className="App">
      <h1>Welcome To Movie DB</h1>

      <Movie m={movie1} />

      <Movie m={movie2} />

      <Movie m={movie3} />

    </div>
  );
}

export default App;
