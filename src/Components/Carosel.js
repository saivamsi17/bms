import React from 'react';


export default function Carosel() {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://media.istockphoto.com/photos/hes-a-model-employee-picture-id517046057?k=6&m=517046057&s=170667a&w=0&h=wByDG3nmaK6NU0Tn3JxcrBYbva8cH8nHa1A6RjNSzqk=" className="d-block w-100" alt="..." style={{height : "70vh"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/Sz9LmzxmBjyscquj0/videoblocks-happy-diverse-employees-listening-to-motivated-lecturer-at-training_rdxlap29u_thumbnail-1080_01.png" className="d-block w-100" style={{height : "70vh"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/Sz9LmzxmBjyscquj0/videoblocks-happy-diverse-employees-listening-to-motivated-lecturer-at-training_rdxlap29u_thumbnail-1080_01.png" className="d-block w-100" style={{height : "70vh"}} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
}
