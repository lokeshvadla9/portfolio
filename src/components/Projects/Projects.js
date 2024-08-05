import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import covid from "../../Assets/Projects/Covid.png";
import zillow from "../../Assets/Projects/Zillow_pipeline_img.png";
import isvp from "../../Assets/Projects/isvp.png";
import jlr from "../../Assets/Projects/Architecture.png";
import stockmarket from "../../Assets/Projects/stock_market_analysis.jpg";
import bookstore from "../../Assets/Projects/bookstore.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jlr}
              isBlog={false}
              title="JLR ETL Pipeline in AWS"
              description="This project implements an end-to-end data pipeline on AWS for extracting, transforming, and loading data from a MySQL database into Amazon Redshift for analysis and querying."
              ghLink="https://github.com/lokeshvadla9/JLR_AWS_DataEngineering_Project/tree/main"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookstore}
              isBlog={false}
              title="UTA  Bookstore"
              description="The UTA Bookstore provides textbooks, school supplies, and services like rentals and buyback programs, supporting academic needs and school spirit. Located centrally on campus, it engages the community through events, with proceeds funding university programs."
              ghLink="https://github.com/lokeshvadla9/bookstore-frontend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={isvp}
              isBlog={false}
              title="ISVP"
              description="The International Student Volunteer Program (ISVP) is an initiative aimed at providing employment assistance to international students facing challenges in finding jobs post-graduation. This program, introduced by the government, offers volunteer opportunities across various departments, enabling students to gain valuable experience and skills while contributing to their communities."
              ghLink="https://github.com/lokeshvadla9/isvp-backend"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zillow}
              isBlog={false}
              title="Zillow ETL Pipeline"
              description="This project is all about simplifying how we get property details from Zillow of a specific location. We've built a pipeline using Python that talks to Zillow's API to fetch the data. To keep things organized and automated, we're using Airflow, a tool that helps us schedule tasks. We've set it up to pull data every month."
              ghLink="https://github.com/lokeshvadla9/Zillow_Pipeline"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid}
              isBlog={false}
              title="Sentimental Analysis on COVID-19 Tweets"
              description="The project on sentiment analysis of COVID-19 tweets utilized LSTM and LSTM with CNN models to analyze and classify the emotional tone of social media posts. The LSTM model effectively captured the sequential nature of text data, while the integration of CNN layers enhanced feature extraction for improved accuracy. This approach provided a robust method for understanding public sentiment during the pandemic."
              ghLink="https://github.com/lokeshvadla9/Covid19_tweets_setiment_analysis/tree/main"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stockmarket}
              isBlog={false}
              title="Stock Market Analysis"
              description="This project aims to demonstrate an end-to-end data engineering solution for analyzing real-time stock market data using various technologies including Python, Amazon Web Services (AWS), Apache Kafka, Glue, Athena, and SQL."
              ghLink="https://github.com/lokeshvadla9/stock_market_analysis/tree/main"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
