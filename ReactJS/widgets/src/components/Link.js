import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    // Checks if user wants to open a new tab
    if (event.metaKey || event.ctrlKey) {
      // Normal behaviour
      return;
    }

    // Avoids refreshing the page
    event.preventDefault();
    // Changes the URL without reloading
    window.history.pushState({}, "", href);
    // Create navigation event
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
};

export default Link;
