import React from 'react';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import styles from './Post.module.scss';

// import { Link } from 'gatsby';
// <Link className={styles['post__home-button']} to="/">All Articles</Link>


const Post = ({ post }) => {
  const {
    tags,
    title,
    date
  } = post.frontmatter;

  const { html } = post;
  const { tagSlugs } = post.fields;

  return (
    <div className={styles['post']}>
      <div className={styles['post__inner']}>
      <div className={styles['post__content']}>
        <Content body={html} title={title} />
        <Meta date={date} />
        <Tags tags={tags} tagSlugs={tagSlugs} />
      </div>

      <div className={styles['post__footer']}>

        <Author />

        
      </div>

      <div className={styles['post__comments']}>
        <Comments postSlug={post.fields.slug} postTitle={post.frontmatter.title} />
        
      </div>
    </div>
    </div>
  );
};

export default Post;
