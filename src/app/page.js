"use client"
import AdOne from '@/components/AdsWidget/AdOne';
import FeatureNewsCarousel from '@/components/FeatureNews/FeatureNewsCarousel';
import Drawer from '@/components/Layout/Drawer/Drawer';
import Footer from '@/components/Layout/Footer/Footer';
import FooterCopyright from '@/components/Layout/Footer/FooterCopyright';
import Header from '@/components/Layout/Header/Header';
import Layout from '@/components/Layout/Layout';
import BusinessNews from '@/components/News/BusinessNews';
import EntertainmentNews from '@/components/News/EntertainmentNews';
import NewsGallary from '@/components/News/NewsGallary';
import PopularNewsCarousel from '@/components/News/PopularNewsCarousel';
import SportsNewsCarousel from '@/components/News/SportsNewsCarousel';
import TrendingCarousel from '@/components/News/TrendingCarousel';
import TwoPostCarousel from '@/components/News/TwoPostCarousel';
import VideoNews from '@/components/News/VideoNews';
import NewsLetter from '@/components/Newsletter/NewsLetter';
import MostShare from '@/components/Sidebar/MostShare';
import MostviewNews from '@/components/Sidebar/MostviewNews';
import NewsTabs from '@/components/Sidebar/NewsTabs';
import SidebarCategories from '@/components/Sidebar/SidebarCategories';
import SportsFixtures from '@/components/Sidebar/SportsFixtures';
import WidgetOne from '@/components/SocialMediaWidgets/WidgetOne';
import TrendingNewPost from '@/components/TrendingNews/TrendingNewPost';
import useToggle from '@/Hooks/useToggle';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function HomeOneTwo() {
  const [drawer, drawerAction] = useToggle(false);
  const [newsData, setNewsData] = useState([]);
  const [trendingNewsData, setTrendingNewsData] = useState([]);
  const [mostViewed, setMostViewed] = useState([]);

  useEffect(() => {
    // Fetch the latest 10 news items from the API
    async function fetchNews() {
      try {
        const response = await fetch('/api/news'); // Fetch from your API
        if (response.ok) {
          const data = await response.json();
          setNewsData(data); // Store the fetched data in state
        } else {
          console.error('Failed to fetch news data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    }
    async function TrendingNewPostData() {
      try {
        const response = await fetch('/api/trendingNewPost'); // Fetch from your API
        if (response.ok) {
          const data = await response.json();
          setTrendingNewsData(data); // Store the fetched data in state
        } else {
          console.error('Failed to fetch news data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    }
    async function MostViewedData() {
      try {
        const response = await fetch('/api/mostViewdNews'); // Fetch from your API
        if (response.ok) {
          const data = await response.json();
          setMostViewed(data); // Store the fetched data in state
        } else {
          console.error('Failed to fetch news data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    }

    fetchNews();
    TrendingNewPostData();
    MostViewedData()
  }, []);
  return (
    <Layout>
      <div className="home-1-bg">
        <Drawer drawer={drawer} action={drawerAction.toggle} />
        <Header action={drawerAction.toggle} />
        <section className="trending-news-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="section-title">
                  <h3 className="title">Trending News</h3>
                </div>
                <TrendingCarousel data={newsData}/>
                <TrendingNewPost data={trendingNewsData}/>
              </div>
              <div className="col-lg-4">
                <div className="trending-right-sidebar">
                  <WidgetOne />
                  <MostviewNews data={mostViewed}/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FeatureNewsCarousel customClass="pb-40" />
        {/* <div className="post__gallery__area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <NewsGallary />
              </div>
              <div className="col-lg-4">
                <div className="post_gallery_sidebar">
                  <NewsTabs />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <TwoPostCarousel />
        <section className="video-news-area ">
          <div className="container custom-container">
            <div className="video-news-box">
              <div className="row">
                <div className="col-lg-8">
                  <VideoNews />
                </div>
                <div className="col-lg-4">
                  <PopularNewsCarousel />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="all-post-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <EntertainmentNews />
                <div className="sports-news-area">
                  <div className="section-title">
                    <h3 className="title">Sports News</h3>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="trending-news-item mb-30">
                        <div className="trending-news-thumb">
                          <img src="/images/sports-news.jpg" alt="sports" />
                        </div>
                        <div className="trending-news-content">
                          <div className="post-meta">
                            <div className="meta-categories">
                              <Link href="/post-details-two">TECHNOLOGY</Link>
                            </div>
                            <div className="meta-date">
                              <span>March 26, 2020</span>
                            </div>
                          </div>
                          <h3 className="title">
                            <Link href="/post-details-two">
                              There may be no consoles in the future ea exec
                              says
                            </Link>
                          </h3>
                          <p className="text">
                            The property, complete with 30-seat screening from
                            room, a 100-seat amphitheater and a swimming pond
                            with sandy shower…
                          </p>
                          <Link href="/post-details-two">Read more</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <SportsNewsCarousel />
                    </div>
                  </div>
                </div>
                <div className="post-add mt-30">
                  <a href="#">
                    <img src="/images/ads/banner.png" alt="ad" />
                  </a>
                </div>
                <BusinessNews />
              </div>
              <div className="col-lg-4">
                <MostShare />
                <SportsFixtures />
                <NewsLetter />
                <SidebarCategories />
                <AdOne />
              </div>
            </div>
          </div>
        </section>
        <Footer />
        <FooterCopyright />
      </div>
    </Layout>
  );
}
