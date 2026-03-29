"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("octus-cookies-accepted");
    if (!accepted) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem("octus-cookies-accepted", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="cookie-banner">
      <p>
        We use essential cookies to operate this website.{" "}
        <a href="/cookies">Cookie Policy</a>
      </p>
      <button onClick={accept}>Accept</button>
    </div>
  );
}
