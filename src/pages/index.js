import React from 'react';
import Layout from '../components/layouts';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';
import ReadLink from '../components/read-link';

export default () => {
  const posts = usePosts();

  return (
    <Layout>
      <h1>Home</h1>
      <p>Hello Toronto!</p>
      <ReadLink to="/about/">Learn About Me &rarr;</ReadLink>

      <h2>Read my Blog</h2>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  );
};
