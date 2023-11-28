"use client"
import React from "react";
const Blog1 = ({ menuData }) => {

  return (
    <>
      <p className="text-[85px] sm:text-center sm:text-[40px] sm:mt-[150px] font-bold font-montserrat text-black sm:mb-[10px] sm:ml-0 ml-[85px]">Our Blogs</p>
      <section className="main-card--cointainer">
        {
          menuData.map((curElem) => {
            const { id, name, category, image, description } = curElem;

            return (
              <>
                <div className="font-montserrat card-container-blog" key={id}>
                  <div className="card-blog ">
                    <div className="card-body-blog">
                      <span className="card-number card-circle subtle">{id}</span>
                      <span className="card-author subtle"> {category}</span>
                      <h2 className="card-title"> {name} </h2>
                      <span className="card-description subtle">
                        {description}
                      </span>
                      <div className="card-read">Read</div>
                    </div>
                    <img src={image} alt="images" className="card-media" />
                    <span className="card-tag  subtle">See All
                      <img src="/assets/Send.svg" className="h-[20px] w-[20px] inline mb-[3px] ml-[6px]" />
                    </span>
                  </div>
                </div>
              </>
            );
          })}
      </section>
    </>
  );
};

export default Blog1;