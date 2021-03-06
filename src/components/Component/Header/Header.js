import React, { useEffect, useState } from "react";
import FlagCountries from "./FlagCountries";
import logo from "../../../assets/header/logo.svg";
import { getFlag } from "../../Tools/axios";
import {
  Wrapper,
  NavSite,
  ButtonStyle,
  Ul,
  HoverBack,
  LiStyle,
  Logo,
  SpanStyle,
  HoverPage,
} from "../../Style/Header/headerstyle";
import Page from "./Page";

function Header() {
  const [show, setShow] = useState({
    home: false,
    pages: false,
    blog: false,
    shop: false,
    element: false,
    portfolio: false,
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    const abortControl = new AbortController();
    const signal = abortControl.signal;
    getFlag(signal)
      .then((res) => {
        if (res.status === 200) {
          return setData(res.data);
        }
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("axios aborted");
        } else {
          console.log(err);
        }
      });

    return () => {
      abortControl.abort();
    };
  }, []);

  return (
    <NavSite>
      <Wrapper>
        <ButtonStyle>
          <Logo src={logo} onClick={() => (window.location.href = "#")} />
        </ButtonStyle>

        <Ul>
          <LiStyle
            onMouseEnter={() => setShow({ home: true })}
            onMouseLeave={() => setShow({ home: false })}
          >
            <SpanStyle>Home</SpanStyle>
          </LiStyle>
          <LiStyle
            onMouseEnter={() => setShow({ pages: true })}
            onMouseLeave={() => setShow({ pages: false })}
          >
            <SpanStyle>Pages</SpanStyle>
          </LiStyle>
          <LiStyle>Blog</LiStyle>
          <LiStyle>Shop</LiStyle>
          <LiStyle>Elements</LiStyle>
          <LiStyle>Portfolio</LiStyle>
          <li>
            <i className="fas fa-search-plus"></i>
          </li>
        </Ul>
      </Wrapper>
      {show.home && (
        <HoverBack
          onMouseLeave={() => setShow({ home: false })}
          onMouseEnter={() => setShow({ home: true })}
        >
          <FlagCountries data={data} />
        </HoverBack>
      )}
      {show.pages && (
        <HoverPage
          onMouseLeave={() => setShow({ pages: false })}
          onMouseEnter={() => setShow({ pages: true })}
        >
          <Page />
        </HoverPage>
      )}
    </NavSite>
  );
}

export default Header;
