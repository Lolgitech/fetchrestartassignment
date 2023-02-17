import FetchData from "./assets/components/FetchData.jsx";

function App() {
  return (
    <div className="App">
      <FetchData />
    </div>
  );
}

export default App;



// import GetData from "./BlogData.jsx";


// export default function BlogGenerator() {
//   function GetBlog() {
//     const BlogArray = BlogData.data.Blog;
//     const randomNumber = Math.floor(Math.random() * BlogArray.length);
//     const url = BlogArray[randomNumber].url;
//     BlogData((prevBlog) => ({
//       ...prevBlog,
//       randomBlog: url,
//     }));
//   }
//   // namet setData BlogData først men det var muligens feil

//   return (
//     <main>
//       <div className="form">
//         <input type="text" placeholder="your name" className="form--input" />

//         <div onClick={GetBlog} />
//         <button className="Blog--button">
//           {" "}
//           Generate a new Blog
//           {/* <button className={styles.control} onClick={previous}></button>
//         <button className={styles.control} onClick={next}></button>
//         </div> */}
//         </button>
//         <button className="Next--button">Next</button>
//         <button className="Previous--button">previous</button>
//       </div>
//       <div>
//         <h3>output here</h3>
//       </div>
//       <GetData />

//       {/* <img src={blog.randomBlog} className="Blogpost" /> */}
//     </main>
//   );
// }
// import React from "react";
// import ReactDOM from "react-dom";

// function App() {
//   const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"]);

//   function addItem() {
//     setThingsArray((prevThingsArray) => {
//       return [...prevThingsArray, "Thing $[prevThingsArray.length + 1}"];
//     });
//   }

//   const thingsElements = thingsArray.map((thing) => <p key={thing}>{thing}</p>);

//   return (
//     <div>
//       <button onClick={addItem}>Add Item</button>
//       {thingsElements}
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("root"));

// function StateCollapseMenu({ children }) {
//   //Destructure incoming props
//   const { children } = props;
//   const [hover, setHover] = useState(false);
//   return (
//     <div
//       style={{
//         position: "relative",
//       }}
//     >
//       <h1
//         onMouseEnter={() => setHover(true)}
//         onMouseLeave={() => setHover(false)}
//       >
//         Menu
//       </h1>
//       <div
//         style={{
//           display: hover ? "flex" : "none",
//         }}
//       >
//         {children}
//       </div>
//     </div>
//   );
// }

// export default StateCollapseMenu;

// function App() {
//   return(
//     <Router>
//       <nav>
//         <ul>
//           <a href="/">Home</a>
//           <link to="/">home</link>
//           <link to="/about">About</link>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path="/">
//           <Route path="" element={<LandingPage />} />
//           <Route path="about" element={<AboutPage />} />
//         </Route>
//         <Route path="*" element={<h1>Error 404</h1>} />
//       </Routes>
//     </Router>
//   );
// }


// import { useState } from "react";

// function Form() {
//   const [input, setInput] = useState("");

//   function handleChange(event) {
//     setInput(event.target.value);
//   }

//   function handleSubmit() {
//     console.log("Form submitted");

//     setInput("");
//   }

//   return (
//     <>
//       <input value={input} type="text" onChange={handleChange} />
//       <button onClick={handleSubmit}>Submit</button>

//       <h2>{input}</h2>
//     </>
//   );
// }

// export default Form;



// useEffect(() => {
//     fetch("https://pokeapi.co/api/v2/pokemon")
//       .then((response) => response.json())
//       .then((data) => {
//         setPokemonList(data);
//       })
//       .catch((error) => {
//         setError(error);
//       });
//   }, [conditionA, conditionB]);
//   oldCondA === newCondA;
//   // quit early if error
//   if (error) return <h1>Error</h1>;

//   pokemonList.results[0].name;
//   // .value

//   pokemonList.results.map((pokemon, index) => {
//     return (
//       <div key={index}>
//         <h3>{pokemon.name}</h3>
//         <h4>{pokemon.url}</h4>
//         <h5></h5>
//       </div>
//     );
//   });
// }
// export default app;
