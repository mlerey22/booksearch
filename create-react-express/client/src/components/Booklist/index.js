import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both bookList and bookListItem from this file

// bookList renders a bootstrap list item
export function bookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// bookListItem renders a bootstrap list item containing data from the book api call
export function bookListItem(props) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={props.thumbnail || "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvhHdPnB5IAEBbtetPNTveFLnmkIqjGC2oW9NLT8mCMjzkGjlG&usqp=CAU"} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{props.title}</h3>
            <p>
              Ingredients: {props.ingredients}
            </p>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href={props.href}
            >
              Go to book!
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
