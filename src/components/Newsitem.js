import React from 'react'

const Newsitem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }}>
            <span className="badge rounded-pill bg-danger" style={{ left: "92%", zIndex: "1" }}>
              {source}
            </span>
          </div>
          <img src={!imageUrl ? "https://www.cnet.com/a/img/resize/93d52fde545782dc199c08e8309ec4c3821f0185/hub/2022/11/17/efe8f493-491b-49cc-9559-ee0e80bd457f/black-friday-deals-blue-stars-lines.jpg?auto=webp&fit=crop&height=675&width=1200" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
}
export default Newsitem