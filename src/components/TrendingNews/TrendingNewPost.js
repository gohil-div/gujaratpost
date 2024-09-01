import Link from 'next/link';
import React from 'react';
export default function TrendingNewPost({ dark, data }) {
  const mapCategory = (categoryId) => {
    const categoryMap = {
      '18': 'HEALTH',
      '1': 'TECHNOLOGY',
      // Add other categories as needed
    };
    return categoryMap[categoryId] || 'OTHER'; // Default to 'OTHER' if not found
  };
  const transformedData = data?.map((apiResponse) => ({
    id:apiResponse.NEWS_ID,
    postThumb: `${apiResponse.NEWS_IMAGE}`,
    postCategory: mapCategory(apiResponse.NEWS_CATEGORY),
    postDate: new Date(apiResponse.NEWS_CREATED_DATE).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    postTitle: apiResponse.NEWS_TITLE,
  }));
  const midIndex = Math.ceil(transformedData.length / 2);
  const firstHalf = transformedData.slice(0, midIndex);
  const secondHalf = transformedData.slice(midIndex);

  return (
    <div className="row">
      <div className="col-lg-6 col-md-6">
        <div
          className={`trending-news-post-items ${
            dark ? 'trending-news-post-items-dark' : ''
          }`}
        >
          {firstHalf.map((item, i) => (
            <div
              className={`gallery_item ${dark ? 'gallery_item_dark' : ''}`}
              key={i + 1}
            >
              <div className="gallery_item_thumb">
                <img src={`https://www.gujaratpost.in/news/${item.postThumb}`} alt="gallery" />
                <div className="icon">
                  <i className="fas fa-bolt"></i>
                </div>
              </div>
              <div className="gallery_item_content">
                <div className="post-meta">
                  <div className="meta-categories">
                    <Link href="/post-details-three">{item.postCategory}</Link>
                  </div>
                  <div className="meta-date">
                    <span>{item.postDate}</span>
                  </div>
                </div>
                <h4 className="title">
                  <Link href={`/post-details-three/${item.id}`}>{item.postTitle}</Link>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-lg-6 col-md-6">
        <div
          className={`trending-news-post-items ${
            dark ? 'trending-news-post-items-dark' : ''
          }`}
        >
          {secondHalf.map((item, i) => (
            <div
              className={`gallery_item ${dark ? 'gallery_item_dark' : ''}`}
              key={midIndex + i + 1}
            >
              <div className="gallery_item_thumb">
                <img src={`https://www.gujaratpost.in/news/${item.postThumb}`} alt="gallery" />
                <div className="icon">
                  <i className="fas fa-bolt"></i>
                </div>
              </div>
              <div className="gallery_item_content">
                <div className="post-meta">
                  <div className="meta-categories">
                    <Link href="/post-details-three">{item.postCategory}</Link>
                  </div>
                  <div className="meta-date">
                    <span>{item.postDate}</span>
                  </div>
                </div>
                <h4 className="title">
                  <Link href="/post-details-three">{item.postTitle}</Link>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
