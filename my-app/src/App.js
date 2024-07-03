// import logo from './logo.svg';
import './App.css';
// import Square from './comps/Square';
import Movie from './comps/Movie';

function App() {
  
  let movie1 = {
    name:"titanic",
    link:"https://www.imdb.com/video/vi1740686617/?playlistId=tt0120338&ref_=tt_pr_ov_vi",
    Image:"https://m.media-amazon.com/images/I/811lT7khIrL._AC_UF894,1000_QL80_.jpg"
  }

  let movie2 = {
    name:"Superman",
    link:"https://www.imdb.com/video/vi1740686617/?playlistId=tt0120338&ref_=tt_pr_ov_vi",
    Image:"https://m.media-amazon.com/images/I/811lT7khIrL._AC_UF894,1000_QL80_.jpg"
  }

  return (
    <div className="App">
      <h1>Welcome To Movie DB</h1>

      <Movie m={movie1} />

      <Movie m={movie2} />

    </div>
  );
}

export default App;
