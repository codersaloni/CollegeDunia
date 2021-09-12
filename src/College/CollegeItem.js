import Data from "../colleges.json";
import "./CollegeItem.css";

import React from "react";

function CollegeItem() {
  return (
    <div>
      <h1 style={{ padding: "32px" }}>Colleges in North India</h1>

      {Data.colleges.map((post) => {
        return (
          <>
            <div key={post.college_name}></div>
            <div className="container">
              <div className="college">
                <div id="pointer">PROMOTED</div>
                <div className="rating_remarks">
                  <span className="ratingmark">3.9</span>
                  <span className="rating">/5</span>
                  <div>{post.rating_remarks}</div>
                </div>
                <div className="ranking">
                  <span>
                    <ul id="tags">
                      {post.tags.map((subtags) => {
                        return <li id="li_tags">{subtags}</li>;
                      })}
                    </ul>
                  </span>
                  <span id="rank">#{post.ranking}</span>
                </div>
                <div className="collegename">
                  <span id="name">{post.college_name}</span>
                  <span id="ratingstars">
                    <img src="/images/05star.jpg" alt="" />
                  </span>
                  <span>
                    <span id="originalfee"> &#8377;{post.original_fees}</span>
                    <span className="offer">{post.discount}</span>
                  </span>
                </div>
                <div className="nearestplaces">
                  <span>
                    <ul id="nearestplacesid">
                      {post.nearest_place.map((nearplace) => {
                        return <li id="li_nearestplacesid">{nearplace}</li>;
                      })}
                    </ul>
                  </span>
                  <div className="actualfee">
                    <p id="discountfee"> &#8377;{post.discounted_fees}</p>
                    <p id="feecycle">{post.fees_cycle}</p>
                  </div>
                </div>
                <div className="places">
                  <span className="span_place">93% Match:</span>
                  {post.famous_nearest_places}
                </div>
                <div className="offer_amenities">
                  <span className="offertext">{post.offertext}</span>

                  <span>
                    <ul className="amenities">
                      {post.amenties.map((perks) => {
                        return <li id="li_amenity">{perks}</li>;
                      })}
                    </ul>
                  </span>
                </div>
              </div>

              <div className="college">
                <div id="pointer">PROMOTED</div>
                <div className="rating_remarks">
                  <span className="ratingmark">3.9</span>
                  <span className="rating">/5</span>
                  <div>{post.rating_remarks}</div>
                </div>
                <div className="ranking">
                  <span>
                    <ul id="tags">
                      {post.tags.map((subtags) => {
                        return <li id="li_tags">{subtags}</li>;
                      })}
                    </ul>
                  </span>
                  <span id="rank">#{post.ranking}</span>
                </div>
                <div className="collegename">
                  <span id="name">{post.college_name}</span>
                  <span id="ratingstars">
                    <img src="/images/05star.jpg" alt="" />
                  </span>
                  <span>
                    <span id="originalfee"> &#8377;{post.original_fees}</span>
                    <span className="offer">{post.discount}</span>
                  </span>
                </div>
                <div className="nearestplaces">
                  <span>
                    <ul id="nearestplacesid">
                      {post.nearest_place.map((nearplace) => {
                        return <li id="li_nearestplacesid">{nearplace}</li>;
                      })}
                    </ul>
                  </span>
                  <div className="actualfee">
                    <p id="discountfee"> &#8377;{post.discounted_fees}</p>
                    <p id="feecycle">{post.fees_cycle}</p>
                  </div>
                </div>
                <div className="places">
                  <span className="span_place">93% Match:</span>
                  {post.famous_nearest_places}
                </div>
                <div className="offer_amenities">
                  <span className="offertext">{post.offertext}</span>

                  <span>
                    <ul className="amenities">
                      {post.amenties.map((perks) => {
                        return <li id="li_amenity">{perks}</li>;
                      })}
                    </ul>
                  </span>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default CollegeItem;
