import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layouts';

export default () => (
  <Layout>
    <h1>About Me</h1>
    <p>
      Frontend web developer with 2 years of experience studying Frontend Web
      Development, User Interface Fundamentals, and User Experience Theory, and
      over 2 years experience leading on a management team. I focus on building
      products with a strong focus on industry standards, usability, and
      accessibility.
    </p>

    <Link to="/">&larr; Back to Home</Link>
  </Layout>
);
