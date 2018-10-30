import React from 'react';

const ArticleListItem = ({ url, headline, date, onSave, index, icon = 'save' }) => (
  <div className="level">
    <div className="level-left">
      <div>
        <a href={url}>{headline}</a>
        <br />
        <small>{date}</small>
      </div>
    </div>

    {icon ?
      <div className="level-right">
        <a onClick={() => onSave(index)} className="button">
          <span className="icon">
            <i className={`fas fa-${icon} fa-lg`}></i>
          </span>
        </a>
      </div>
    : ''}

  </div>
)

export default ArticleListItem
