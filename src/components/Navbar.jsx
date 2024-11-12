// import React, { useRef } from "react";

// // node Module
// import { useEffect } from "react";
// import PropTypes from "prop-types";

// const Navbar = ({ navOpen }) => {
//   const lastActiveLink = useRef();
//   const activeBox = useRef();

//   const initActiveBox = () => {
//     console.log(lastActiveLink.current);
//     console.log(activeBox.current);

//     activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
//     activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
//     activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
//     activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
//   };

//   useEffect(initActiveBox, []);

//   window.addEventListener("resize", initActiveBox);

//   const activeCurrentLink = (event) => {
//     lastActiveLink.current?.classList.remove("active");
//     event.target.classList.add("active");
//     lastActiveLink.current = event.target;

//     activeBox.current.style.top = event.target.offsetTop + "px";
//     activeBox.current.style.left = event.target.offsetLeft + "px";
//     activeBox.current.style.width = event.target.offsetWidth + "px";
//     activeBox.current.style.height = event.target.offsetHeight + "px";
//   };

//   const navItems = [
//     {
//       label: "Home",
//       link: "#home",
//       className: "nav-link active",
//       ref: lastActiveLink,
//     },
//     {
//       label: "About",
//       link: "#about",
//       className: "nav-link",
//     },
//     {
//       label: "Work",
//       link: "#work",
//       className: "nav-link",
//     },
//     {
//       label: "Reviews",
//       link: "#reviews",
//       className: "nav-link",
//     },
//     {
//       label: "Contact",
//       link: "#contact",
//       className: "nav-link md:hidden",
//     },
//   ];

//   return (
//     <>
//       <nav className={"navbar " + (navOpen ? "active" : "")}>
//         {navItems.map(({ label, link, className, ref }, key) => (
//           <a
//             href={link}
//             key={key}
//             ref={ref}
//             className={className}
//             onClick={activeCurrentLink}
//           >
//             {label}
//           </a>
//         ))}
//         <div className="active-box" ref={activeBox}></div>
//       </nav>
//     </>
//   );
// };

// Navbar.propTypes = {
//   navOpen: PropTypes.bool.isRequired,
// };

// export default Navbar;

import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);

  const initActiveBox = () => {
    // Ensure both refs are defined before accessing their properties
    if (lastActiveLink.current && activeBox.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
      activeBox.current.style.height =
        lastActiveLink.current.offsetHeight + "px";
    }
  };

  useEffect(() => {
    // Initialize the active box position on component mount
    initActiveBox();

    // Add resize event listener
    const handleResize = () => initActiveBox();
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const activeCurrentLink = (event) => {
    // Remove 'active' class from previous link, if exists
    if (lastActiveLink.current) {
      lastActiveLink.current.classList.remove("active");
    }

    // Add 'active' class to the clicked link and update lastActiveLink
    event.target.classList.add("active");
    lastActiveLink.current = event.target;

    // Update the activeBox position based on the clicked link
    if (activeBox.current) {
      activeBox.current.style.top = event.target.offsetTop + "px";
      activeBox.current.style.left = event.target.offsetLeft + "px";
      activeBox.current.style.width = event.target.offsetWidth + "px";
      activeBox.current.style.height = event.target.offsetHeight + "px";
    }
  };

  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    { label: "About", link: "#about", className: "nav-link" },
    { label: "Work", link: "#work", className: "nav-link" },
    { label: "Reviews", link: "#reviews", className: "nav-link" },
    { label: "Contact", link: "#contact", className: "nav-link md:hidden" },
  ];

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          href={link}
          key={key}
          ref={ref}
          className={className}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
