import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const CardWithImg = ({
  id,
  title,
  imgUrl,
  paragraph,
  buttonText,
  buttonText2,
  buttonLink,
  buttonLink2,
  badges,
}) => {
  const badges_list = [];
  badges?.forEach((badge, id) => {
    badges_list.push(
      <div key={id} className="badge-neutral badge">
        {badge}
      </div>
    );
  });

  return (
    <div
      className={
        id % 2 === 0
          ? `card my-3 w-80 bg-primary text-primary-content shadow-lg md:mx-3`
          : `card my-3 w-80 bg-secondary text-secondary-content shadow-lg md:mx-3`
      }
    >
      <figure>
        <img
          src={imgUrl}
          alt={title}
          className="h-64 w-80 object-cover shadow-sm transition delay-75 hover:scale-125 md:w-96"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-accent">NEW</div>
        </h2>
        <p className="mb-3">{paragraph}</p>
        <div className="card-actions justify-end">{badges_list}</div>
        <div className="flex flex-row items-center justify-evenly">
          <button
            className={
              id % 2 === 0
                ? `btn mt-3 bg-secondary text-secondary-content hover:-translate-y-1 hover:scale-110 hover:text-primary`
                : `btn mt-3 bg-primary text-primary-content hover:-translate-y-1 hover:scale-110 hover:text-secondary`
            }
          >
            <Link to={buttonLink}>{buttonText}</Link>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="ml-2 inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
              />
            </svg>
          </button>
          <button
            className={
              id % 2 === 0
                ? `btn mt-3 bg-secondary text-secondary-content hover:-translate-y-1 hover:scale-110 hover:text-primary`
                : `btn mt-3 bg-primary text-primary-content hover:-translate-y-1 hover:scale-110 hover:text-secondary`
            }
          >
            <Link to={buttonLink2}>{buttonText2}</Link>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="ml-2 inline h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

CardWithImg.defaultProps = {
  id: 0,
  title: "TITLE",
  imgUrl:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60",
  paragraph: "PARAGRAPH",
  buttonText: "BUTTON",
  buttonText2: "BUTTON2",
  buttonLink: "#",
  buttonLink2: "#",
  badges: [],
};

CardWithImg.propTypes = {
  id: PropTypes.any,
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  paragraph: PropTypes.string,
  buttonText: PropTypes.string,
  buttonText2: PropTypes.string,
  buttonLink: PropTypes.string,
  buttonLink2: PropTypes.string,
  badges: PropTypes.array,
};
