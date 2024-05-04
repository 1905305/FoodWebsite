import React from "react";

// Define the Helmet functional component
const Helmet = (props) => {
  // Dynamically set the document title by concatenating "Quickbite Express -" with props.title
  document.title = "Quickbite Express -" + props.title;

  // Return a div with the className "w-100" and containing the child components
  return <div className="w-100">{props.children}</div>;
};

// Export the Helmet component to make it available for use in other parts of the application
export default Helmet;
