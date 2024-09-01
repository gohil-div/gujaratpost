import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <span className="prev slick-arrow" onClick={onClick}>
      <i className="fal fa-angle-left"></i>
    </span>
  );
}
function NextArrow(props) {
  const { onClick } = props;
  return (
    <span className="next slick-arrow" onClick={onClick}>
      <i className="fal fa-angle-right"></i>
    </span>
  );
}

export default function TrendingCarousel({ dark ,data }) {
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="row trending-news-slider">
      {data?.map((item) => (
        <div className="col" key={item.NEWS_ID}>
          <div className={`trending-news-item ${dark ? 'trending-news-item-dark' : ''}`}>
            <div className="trending-news-thumb">
              <img src={`https://www.gujaratpost.in/news/${item.NEWS_IMAGE}`} alt="trending" />
              <div className="icon">
                <Link href={`/post-details-three?id=${item.NEWS_ID}`}>
                  <i className="fas fa-bolt"></i>
                </Link>
              </div>
            </div>
            <div className="trending-news-content">
              <div className="post-meta">
                <div className="meta-categories">
                  <Link href={`/category/${item.NEWS_CATEGORY}`}>
                    {item.NEWS_CATEGORY.toUpperCase()}
                  </Link>
                </div>
                <div className="meta-date">
                  <span>{new Date(item.NEWS_MODIFY_DATE).toLocaleDateString()}</span>
                </div>
              </div>
              <h3 className="title">
                <Link href={`/post-details-three/${item.NEWS_ID}`}>
                  {item.NEWS_TITLE}
                </Link>
              </h3>
              <p className="text">
                {item.NEWS_SUMMARY || 'No summary available.'}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
