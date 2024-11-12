import React from "react";

// Node module
import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, title, tags, projectLink, classes }) => {
  return (
    <>
      <div
        className={
          "relative p-4 rounded-2xl bg-slate-800 hover:bg-slate-700/50 active:bg-slate-700/60 ring-1 ring-inset ring-slate-50/5 transition-colors " +
          classes
        }
      >
        <figure className="img-box aspect-square rounded-lg mb-4">
          <img src={imgSrc} alt={title} className="img-cover" />
        </figure>
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="title-1 mb-3">{title}</h3>
            <div className="flex flex-wrap items-center gap-2">
              {tags.map((label, key) => (
                <span
                  key={key}
                  className="h-8 text-sm text-slate-400 bg-slate-50/5 grid items-center px-3 rounded-lg"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="w-11 h-11 rounded-lg grid place-items-center bg-slate-400 text-slate-950 shrink-0">
            <span className="material-symbols-rounded" aria-hidden="true">
              arrow_outward
            </span>
          </div>
        </div>

        <a
          href={projectLink}
          target="_blank"
          className="absolute inset-0 text-transparent"
          rel="noreferrer"
        >
          dfgksdfg
        </a>
      </div>
    </>
  );
};

ProjectCard.proptype = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;
