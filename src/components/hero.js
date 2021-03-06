import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
  background-image: url('/images/scott-webb-to.jpg');
  background-position: top 10% center;
  background-size: cover;
  height: 30vh;

  + * {
    margin-top: 0;
  }
`;

const TextBox = styled('div')`
  background-image: linear-gradient(to top, #ddbbffcc 4.5rem, #ddbbff88);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
  }

  p,
  a {
    color: #222;
    margin-top: 0;
  }

  a {
    margin-top: 0.5rem;
  }
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "scott-webb-to.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadein="soft">
      <TextBox>
        <div>
          <h1>Lizz Rennie: Learning Gatsby, GraphQL & Netlify &hearts;</h1>
          <p>
            Hello Juno <Link to="/about/">Learn About Me &rarr;</Link>
          </p>
        </div>
      </TextBox>
    </ImageBackground>
  );
};

export default Hero;
