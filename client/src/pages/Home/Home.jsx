import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.scss";
import { useDispatch, useSelector } from "react-redux";
import MessageAlert from "../../utils/MessageAlertAntD";
import { setMessageEmpty } from "../../features/user/userSlice";
import MainLoader from "../../utils/MainLoader";
import Slider from "./Slider";
import {
  FaFacebookF,
  FaAngleRight,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { Link } from "react-router-dom";
import moment from "moment";
import ModalPopUp from "../../utils/ModalPopUp";
import rdj from "../../assets/rdj.jpg";
import MovieLoading from "../../utils/movieLoading";

function Home() {
  const dispatch = useDispatch();

  const { error, message, loader } = useSelector((state) => state.auth);
  const { movie, loader: movieLoder } = useSelector((state) => state.movies);

  const [lastFive, setLastFive] = useState(movie);

  useEffect(() => {
    if (movie) {
      const lastFiveMovies = [...movie]?.slice(-5);
      setLastFive(lastFiveMovies);
    }
  }, [movie]);

  const [trailerModal, setTrailerModal] = useState(null);
  const [trailer, setTrailer] = useState();

  const handlePlayButton = (id) => {
    const clikedMovie = movie.filter((data) => data._id === id);
    clikedMovie.map((item) => {
      setTrailer(item.trailer);
    });
    setTrailerModal(true);
  };

  useEffect(() => {
    if (error) {
      MessageAlert({ content: error });
      dispatch(setMessageEmpty());
    }
    if (message) {
      MessageAlert({ type: "success", content: message });
      dispatch(setMessageEmpty());
    }
  }, [error, message, dispatch]);

  return (
    <>
      {loader && <MainLoader />}
      <Header />
      <Navbar />
      <Slider />

      <ModalPopUp
        open={trailerModal}
        title={null}
        width="950px"
        footer={null}
        cancle={() => setTrailerModal(false)}
        closable={false}
      >
        <iframe
          width="100%"
          height="530px"
          src={trailer}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </ModalPopUp>

      <div className="social-wrapper">
        <div className="social-links d-flex justify-content-center gap-5">
          <a href="https://www.facebook.com/" target="_black">
            <div className="social-item d-flex align-items-center">
              <FaFacebookF />
              <span>Visit facebook</span>
              <FaAngleRight />
            </div>
          </a>
          <a href="https://www.linkedin.com/" target="_black">
            <div className="social-item d-flex align-items-center">
              <FaLinkedinIn className="mr-1" />
              <span>Visit Linkedin</span>
              <FaAngleRight />
            </div>
          </a>
          <a href="https://www.instagram.com/" target="_black">
            <div className="social-item d-flex align-items-center">
              <FaInstagram className="mr-1" />
              <span>instagram</span>
              <FaAngleRight />
            </div>
          </a>
        </div>
      </div>

      {/* Movie content */}
      <div className="all-movie-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content d-flex justify-content-between">
                <div className="menu-movie">
                  <ul>
                    <li>
                      <a className="active">Now Showing</a>
                    </li>
                  </ul>
                </div>
                <Link to="/all-movies">
                  <div className="movie-button d-flex align-items-center">
                    <span>View All Movie</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="row pt-3">
            <div className="col-md-12">
              {movieLoder ? (
                <MovieLoading />
              ) : (
                <div className="movie-category-wrapper">
                  {movie &&
                    [...lastFive].reverse()?.map((item, index) => {
                      return (
                        <div className="movie-item" key={index}>
                          <div className="main-item">
                            <img src={item.poster} alt="" />
                            <Link
                              to={`/get-tickets/${
                                item._id
                              }?date=${moment().format("YYYY-MM-DD")}`}
                            >
                              <div className="get-tickets">
                                <span>Get Tickets</span>
                              </div>
                            </Link>
                          </div>

                          <div className="main-item-content">
                            <div className="content">
                              <div className="playbutton">
                                <span
                                  onClick={() => handlePlayButton(item._id)}
                                >
                                  <FaRegCirclePlay />
                                </span>
                              </div>
                              <div className="info">
                                <strong>{item.title}</strong>
                                <span>
                                  RELEASE :{" "}
                                  {moment(item.releaseDate).format(
                                    "MMM Do YYYY"
                                  )}
                                </span>
                                <span>GANRE : {item.ganre}</span>
                              </div>
                              <Link to={`/all-movies/${item._id}`}>
                                <div className="details">
                                  <span>Details</span>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* About Section Start */}
      <section className="about-us">
        <div className="container">
          <div className="row">
            <div className="text-start">
              <h3>About Us</h3>
            </div>
            <div className="col-md-6">
              <div className="img-area">
                <img src={rdj} alt="" />
              </div>
            </div>
            <div className="col-md-6 mt-4">
              <div className="text-start  text-light">
                <h4>History</h4>
                <p className="m-0">
                  Star Cineplex was founded on 9 October 2004, in Bashundhara
                  City. Star Cineplex has six fully digital cinema screens with
                  state-of-the-art 3D Projection Technology, silver screens,
                  Dolby-Digital sound and stadium seating. With a total capacity
                  of approximately 1600 seats the theater has large lobby with
                  full concession stands serving pop-corns, soft drinks,
                  ice-creams and many other items. In January 2019, they opened
                  their second cineplex at Shimanto Shambhar, a newly built
                  shopping centre beside Shimanto Square.In October 2019, they
                  opened their third cineplex at SKS Tower in Mohakhali. In
                  August 2021, they opened their fourth cineplex in Mirpur at
                  Sony Square.They opened their fifth cineplex at Bangabandhu
                  Military Museum in April 2022 with state-of-the-art sound
                  system and a capacity of 183 seats. They opened their first
                  branch outside Dhaka at Bali Arcade in Chittagong on 2
                  December 2022.They opened their second branch outside Dhaka at
                  Bangabandhu Hi-tech Park in Rajshahi on 13 January 2023.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
