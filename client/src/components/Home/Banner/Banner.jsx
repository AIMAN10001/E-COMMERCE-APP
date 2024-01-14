import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return <div className="hero-banner">
              <div className="content">
                 <div className="text-content">
                 <h1>SALES</h1>
                    <p>
                        Convallis interdum purus adipiscing dis parturient posuerce ac a quam a eleifemd montes parturient posuere curae tempor
                    </p>
                       <div className="ctas">
                          <div className="cta">Reade More</div>
                          <div className="cta v2">Shop Now</div>
                       </div>
                 </div>
                   <img className="banner-img" src={BannerImg} alt="" />
              </div>
           </div>;
};

export default Banner;
