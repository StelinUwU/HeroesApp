import { useMemo } from "react";
import { Redirect } from "react-router-dom";
import { useParams } from "react-router-dom";
import getHeroById from "../../selectors/getHeroById";

const heroImages = require.context("../../../public/assets/heroes", true);

const HeroScreen = ({ history }) => {
  const { heoreId } = useParams();
  const hero = useMemo(() => getHeroById(heoreId), [heoreId]);
  if (!hero) {
    return <Redirect to="/" />;
  }
  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };
  const { superhero, alter_ego, first_appearance, characters, publisher } =
    hero;
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          /* src={`../assets/heroes/${heoreId}.jpg`} */
          src={heroImages(`./${heoreId}.jpg`).default}
          alt={superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {publisher}
          </li>
          <li className="list-group-item">
            <b>First apperance:</b> {first_appearance}
          </li>
        </ul>
        <h5>Characters</h5>
        <p>{characters}</p>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          return
        </button>
      </div>
    </div>
  );
};

export default HeroScreen;
