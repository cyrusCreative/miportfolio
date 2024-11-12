import React from "react";

// Component
import ReviewsCard from "./ReviewsCard";

/* ======================================
             Node Module
========================================*/
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

/* ======================================
            Register GSAP Plugin
========================================*/
gsap.registerPlugin(useGSAP, ScrollTrigger);

const reviews = [
  {
    content:
      "Josiah is a highly recommended frontend developer with extensive knowledge of modern frameworks like React, ensuring functional and beautiful projects, and excelling in collaboration with cross-functional teams.",
    name: "John Jide Olododo",
    imgSrc: "./images/john.png",
    company: "C.E.O TERAPACKS",
  },
  {
    content:
      "Josiah is an outstanding frontend developer whose technical expertise and results-driven approach consistently elevate our projects",
    name: "Victor Ocheni",
    imgSrc: "./images/victor.png",
    company: "Newwaves Ecosystem Project Manager, Kogi State",
  },
  {
    content:
      "Modupe is a highly skilled frontend web developer with a keen eye for detail and a deep understanding of modern web technologies, known for his impressive ability to translate complex design concepts into user-friendly interfaces.",
    name: "Blessing Sunday",
    imgSrc: "./images/enyo.png",
    company: "AOC Tax Consultant, Kogi State.",
  },
  {
    content:
      "I can always count on Josiah for frontend development projects. His technical skills are top-notch, and he approach every task with a positive attitude and a willingness to collaborate.",
    name: "Atteh Kayode Johnson",
    imgSrc: "./images/john.png",
    company: "SOFTLEARN",
  },
];

const Review = () => {
  useGSAP(() => {
    gsap.to(".scrub-slide", {
      scrollTrigger: {
        trigger: ".scrub-slide",
        start: "-200% -40%",
        end: "400% -40%",
        scrub: true,
        // markers: true,
      },
      x: "-1000",
    });
  });

  return (
    <>
      <section id="reviews" className="section overflow-hidden">
        <div className="container">
          <h2 className="headline-2 mb-8 reveal-up">What our customers say</h2>
          <div className="scrub-slide flex items-stretch gap-3 w-fit">
            {reviews.map(({ content, name, imgSrc, company }, key) => (
              <ReviewsCard
                key={key}
                content={content}
                name={name}
                imgSrc={imgSrc}
                company={company}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
