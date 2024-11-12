import React from "react";

// Node Module
import PropTypes from "prop-types";

const ratings = new Array(5);
ratings.fill({
  icon: "star",
  style: { fontVariationSettings: '"FILL" 1' },
});

console.log(ratings);

const ReviewsCard = ({ content, name, imgSrc, company }) => {
  return (
    <>
      <div className="bg-slate-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
        <div className="flex items-center gap-1 mb-3">
          {ratings.map(({ icon, style }, key) => (
            <span
              key={key}
              className="material-symbols-rounded text-yellow-300 text-[18px]"
              style={style}
            >
              {icon}
            </span>
          ))}
        </div>

        <p className="text-slate-400 text-justify text-sm mb-2">{content}</p>

        <div className="flex items-center gap-3 mt-auto">
          <figure className="img-box rounded-lg">
            <img
              src={imgSrc}
              alt={name}
              width={44}
              height={44}
              loading="lazy"
              className="img-cover"
            />
          </figure>

          <div>
            <p>{name}</p>
            <p className="text-sm text-slate-400 tracking-wider">{company}</p>
          </div>
        </div>
      </div>
    </>
  );
};

ReviewsCard.propType = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};

export default ReviewsCard;
