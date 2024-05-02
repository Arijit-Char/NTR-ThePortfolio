const DetailsPopup = ({ open, close, data }) => {

  const opacityLinks ={
    opacity: ".2"
  }
  return (
    <div className={`dizme_tm_modalbox ${open ? "opened" : ""}`}>
      <div className="box_inner">
        <div className="close">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              close();
            }}
          >
            <i className="icon-cancel" />
          </a>
        </div>
        <div className="description_wrap">
          <div className="popup_details">
            <div className="top_image">
              <img src={data?.image?.url} alt="image" />
              <div
                className="main"
                data-img-url={data?.image?.url}
                style={{ backgroundImage: `url(${data?.image?.url})` }}
              />
            </div>
            <div className="portfolio_main_title">
              <h3>{data?.title}</h3>
              <p>
                {data?.liveurl !== "" ? (
                  <>
                    {" "}
                    <a href={data?.liveurl} title="Live Preview">
                      <img
                        alt="live preview"
                        width={24}
                        height={15}
                        src="https://static.vecteezy.com/system/resources/previews/009/393/680/non_2x/eye-icon-sign-symbol-design-free-png.png"
                      />
                    </a>{" "}
                    <span> </span>
                  </>
                ) : (
                  <>
                    {" "}
                    <a href={data?.liveurl} title="Live Preview (Unavailable)">
                      <img style={opacityLinks}
                        alt="live preview"
                        width={24}
                        height={15}
                        src="https://static.vecteezy.com/system/resources/previews/009/393/680/non_2x/eye-icon-sign-symbol-design-free-png.png"
                      />
                    </a>{" "}
                    <span> </span>
                  </>
                )}

                {data?.githuburl !== "" ? (
                  <>
                    {" "}
                    <a href={data?.liveurl} title="GitHub Repo">
                      <img
                        alt="github"
                        width={20}
                        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                      />
                    </a>{" "}
                  </>
                ) : (
                  <>
                    {" "}
                    <a style={opacityLinks} href={data?.liveurl} title="GitHub Repo (Unavailable)">
                      <img
                        alt="github"
                        width={20}
                        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                      />
                    </a>{" "}
                  </>
                )}
              </p>
              <span>
                <a href="#">Details</a>
              </span>
              <div />
            </div>
            <div className="main_details">
              <div className="textbox">
                <p>
                  {data?.description !== ""
                    ? data?.description
                    : "No Description available"}
                </p>
              </div>
              <div className="detailbox">
                <ul>
                  <li>
                    <span className="first">Client</span>
                    <span>Personal</span>
                  </li>
                  <li>
                    <span className="first">Tech Stack</span>
                    <span>
                      <span>
                        {data?.techStack ? data.techStack : "Unavailable"}
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailsPopup;
