import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Author from './Author';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Menu from './Menu';
import styles from './Sidebar.module.scss';
import { Link } from 'gatsby';

export const PureSidebar = ({ data, isIndex }) => {
  const {
    author,
    copyright,
    menu,
    title,
  } = data.site.siteMetadata;

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__inner']} style={{marginTop:'-2.3em'}}>
        <Link to="/" style={{color:'black', fontWeight: 'bold', fontfamily:"Product Sans"}}><hr id="logo" />{title}</Link>
        <Menu menu={menu} />
        <Author author={author} isIndex={isIndex} />
        <Contacts contacts={author.contacts} />
        <Copyright copyright={copyright} />
      </div>
    </div>
  );
};

export const Sidebar = (props) => (
  <StaticQuery
    query={graphql`
      query SidebarQuery {
        site {
          siteMetadata {
            title
            subtitle
            copyright
            menu {
              label
              path
            }
            author {
              name
              photo
              bio
              contacts {       
                telegram
                email
                rss
              }
            }
          }
        }
      }
    `}
    render={(data) => <PureSidebar {...props} data={data}/>}
  />
);

export default Sidebar;
