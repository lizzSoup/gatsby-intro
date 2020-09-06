import React from 'react';
import Layout from '../components/layouts';
import Hero from '../components/hero';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';
import ReadLink from '../components/read-link';

export default () => {
  const posts = usePosts();

  return (
    <>
      <Hero />
      <Layout>
        <h2>Read my Blog</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Layout>
    </>
  );
};
