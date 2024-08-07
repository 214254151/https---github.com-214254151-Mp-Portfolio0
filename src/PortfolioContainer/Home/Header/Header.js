import React, { useState, useEffect } from "react";
import {TOTAL_SCREENS,GET_SCREEN_INDEX,} from "../../../utilities/commonUtils";
import ScrollService from "../../../utilities/ScrollService";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

export default function Header() {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOptions, setShowHeadersOptions] = useState(false);

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) return;
    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
    if (screenIndex < 0) return;
    setSelectedScreen(screenIndex); // Update selected screen
  };

  useEffect(() => {
    let currentScreenSubscription =
      ScrollService.currentScreenBroadCaster.subscribe(updateCurrentScreen);

    return () => {
      currentScreenSubscription.unsubscribe(); // Cleanup subscription on component unmount
    };
  }, []);

  const getHeaderOptions = () => {
    return TOTAL_SCREENS.map((screen, i) => (
      <div
        key={screen.screen_name}
        className={getHeaderOptionsClass(i)}
        onClick={() => switchScreen(i, screen)}
      >
        <span>{screen.screen_name}</span>
      </div>
    ));
  };

  const getHeaderOptionsClass = (index) => {
    let classes = "header-option ";
    if (index < TOTAL_SCREENS.length - 1) classes += "header-option-separator ";
    if (selectedScreen === index) classes += "selected-header-option";
    return classes;
  };

  const switchScreen = (index, screen) => {
    if (!screen || !screen.screen_name) return;

    let screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) return;

    screenComponent.scrollIntoView({ behavior: "smooth" });
    setSelectedScreen(index);
    setShowHeadersOptions(false);
  };

  return (
    <div
      className="header-container"
      onClick={() => setShowHeadersOptions(!showHeaderOptions)}
    >
      <div className="header-parent">
        <div
          className="header-hamburger"
          onClick={() => setShowHeadersOptions(!showHeaderOptions)}
        >
          <FontAwesomeIcon className="header-hamburger-bars" icon={faBars} />
        </div>
        <div className="header-logo">
          <span>Abongile</span>
        </div>
        <div
          className={
            showHeaderOptions
              ? "header-options show-hamburger-options"
              : "header-options"
          }
        >
          {getHeaderOptions()}
        </div>
      </div>
    </div>
  );
}