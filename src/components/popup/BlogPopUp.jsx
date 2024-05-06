const BlogPopUp = ({ data, open, close }) => {
  return (
    <div className={`dizme_tm_modalbox ${open ? "opened" : ""}`}>
      {data && (
        <div className="box_inner">
          <div className="close">
            <a href="#" onClick={() => close()}>
              <i className="icon-cancel" />
            </a>
          </div>
          <div className="description_wrap">
            <div className="news_popup_informations">
              <div className="image">
              {
                data?.forEducation ? <img src="https://cdn.elearningindustry.com/wp-content/uploads/2022/02/shutterstock_1112381495.jpg" alt="image" /> : <img src="https://img.jagranjosh.com/imported/images/E/Articles/imp-of-work-ex.jpg" alt="image" />
              }
              {
                data?.forEducation ? (<div
                  className="main"
                  data-img-url="https://cdn.elearningindustry.com/wp-content/uploads/2022/02/shutterstock_1112381495.jpg"
                  style={{ backgroundImage: `url("https://cdn.elearningindustry.com/wp-content/uploads/2022/02/shutterstock_1112381495.jpg")` }}
                />
              )
                : 
                (<div
                  className="main"
                  data-img-url="https://img.jagranjosh.com/imported/images/E/Articles/imp-of-work-ex.jpg"
                  style={{ backgroundImage: `url("https://img.jagranjosh.com/imported/images/E/Articles/imp-of-work-ex.jpg")` }}
                />
              )
              }
              </div>
              <div className="details">
                <h3>{data ? data.jobTitle : "Title"}</h3>
                <span>
                  <a href="#">{data && data.company_name}</a>
                </span>
                <div />
              </div>
              <div className="text">
                {data &&
                  data.bulletPoints &&
                  data.bulletPoints.map((details, i) => <p key={i}>- {details}</p>)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default BlogPopUp;
