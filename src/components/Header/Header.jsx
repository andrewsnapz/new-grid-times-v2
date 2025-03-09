import React from "react";
import styled from "styled-components";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

/*
  ways to create the desktop header:
  
  - conditionally render the super header, if it's a desktop screen, remove it.
*/

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <MainHeaderActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </MainHeaderActionGroup>
        <Logo />
        <SubscribeActions>
          <Button>subscribe</Button>
          <a href="#">
            <em>Already a subscriber?</em>
          </a>
        </SubscribeActions>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media (${QUERIES.desktopAndUp}) {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
`;

const MainHeaderActionGroup = styled(ActionGroup)`
  display: none;

  @media (${QUERIES.desktopAndUp}) {
    display: flex;
    text-align: center;
    margin-right: auto;
  }
`;

const SubscribeActions = styled.div`
  display: none;

  @media (${QUERIES.desktopAndUp}) {
    --subscribe-font-size: 0.875rem;
    --subscribe-line-height: 22px;
    --subscribe-letter-spacing: 0%;
    align-self: flex-end;
    position: relative;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
    text-align: center;

    a {
      text-decoration: underline;
      font-size: var(--subscribe-font-size);
      font-weight: var(--font-weight-normal);
      line-height: var(--subscribe-line-height);
      letter-spacing: var(--subscribe-letter-spacing);
    }
  }
`;

export default Header;
