import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <a href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <AuthorDescription>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </AuthorDescription>
      </Wrapper>
    </a>
  );
};

const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: flex;
  flex-direction: row;

  @media (${QUERIES.laptopAndUp}) {
    flex-direction: column;
  }

  @media (${QUERIES.desktopAndUp}) {
    flex-direction: row;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  order: 2;

  @media (${QUERIES.laptopAndUp}) {
    order: 1;
  }

  @media (${QUERIES.desktopAndUp}) {
    order: 2;
  }
`;

const AuthorDescription = styled.div`
  order: 1;
  margin-right: 1.31rem;

  @media (${QUERIES.laptopAndUp}) {
    margin-left: 0;
    order: 2;
  }

  @media (${QUERIES.desktopAndUp}) {
    margin-left: 1.31rem;
    order: 1;
  }
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
