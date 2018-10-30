import React from 'react';
import ArticleListItem from '../ArticleListItem';

const ArticleList = ({ items, onSave, icon }) => {
  return (
    <div className="ArticleList">
      {items.map((item, index) => {
        const url = item.url || item.web_url
        const headline = (item.headline && item.headline.main) ? item.headline.main : item.title
        const date = item.date || item.pub_date
        const iconProp = typeof item.icon !== 'undefined' ? item.icon : icon

        return <ArticleListItem key={url} index={index} url={url} headline={headline} date={date} onSave={onSave} icon={iconProp} />
      })}
    </div>
  )
}

export default ArticleList
