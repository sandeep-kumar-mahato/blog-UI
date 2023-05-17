import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import profile from "./images/profile.jpg";
import intro from "./images/intro.jpg";
import cardImage from "./images/cardImage.jpg";

const Home = () => {
  return (
    <div className="home-page">
      <img className="logo" src={profile} alt="logo" />
      <h1 className="heading">Narrative Nexus</h1>
      <h6 className="sub-heading">
        where stories converge and imaginations ignite
      </h6>
      {/* Intro Section */}
      <section>
        <main>
          <img className="intro-img" src={intro} alt="" />
        </main>
        <aside>
          <h5>WELCOME!</h5>
          <h1>title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            placeat autem magni fugiat quos, temporibus deserunt quis natus
            dolores nemo officia reprehenderit sequi deleniti quam minus cum.
            At, quaerat praesentium.
          </p>
          <button>Start Here</button>
        </aside>
      </section>

      <div className="horizontal-heading">
        <hr />
        <h5>LATEST POSTS</h5>
        <hr />
      </div>

      <div className="cards">
        <div className="homecard card-1">
          <img className="card-image" src={cardImage} alt="" />
          <h1>Homemade Almond Lavender Soap for Sensitive Skin</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            magni similique, labore voluptas distinctio incidunt deserunt amet
            suscipit, aliquid repellendus corrupti deleniti illo, perferendis
            sapiente quis sint harum ex culpa!
          </p>
          <Link to="/blog/1">
            <button>Read More...</button>
          </Link>
        </div>
        <div className="homecard card-2">
          <img className="card-image" src={cardImage} alt="" />
          <h1>Homemade Almond Lavender Soap for Sensitive Skin</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            magni similique, labore voluptas distinctio incidunt deserunt amet
            suscipit, aliquid repellendus corrupti deleniti illo, perferendis
            sapiente quis sint harum ex culpa!
          </p>
          <Link to="/blog/2">
            <button>Read More...</button>
          </Link>
        </div>
        <div className="homecard card-3">
          <img className="card-image" src={cardImage} alt="" />
          <h1>Homemade Almond Lavender Soap for Sensitive Skin</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            magni similique, labore voluptas distinctio incidunt deserunt amet
            suscipit, aliquid repellendus corrupti deleniti illo, perferendis
            sapiente quis sint harum ex culpa!
          </p>
          <Link to="/blog/3">
            <button>Read More...</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
