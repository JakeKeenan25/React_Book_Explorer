import React, { Component } from 'react';

class Gallery extends Component {
  render() {
    return (
      <div>
        <h2>Gallery</h2>
        <div className="row row-cols-1 row-cols-md-3">
          {
            this.props.items.map((item, index) => {
              let {title, imageLinks, infoLink} = item.volumeInfo;
              let desc = '';
              if (item.searchInfo){
                desc = item.searchInfo.textSnippet
              };
              return (
                  <div key={index} class="col mb-4">
                    <div class="card h-100">
                      <img 
                        src={imageLinks !== undefined ? imageLinks.smallThumbnail : ''} 
                        class="card-img-top img-fluid" 
                        alt={title}
                      />
                      <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{desc !== undefined ? desc : ''}</p>
                      </div>
                      <div class="card-footer">
                        <small class="text-muted"><a href={infoLink} class="btn btn-primary">More Info</a></small>
                      </div>
                      <br/>
                    </div>
                  </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Gallery