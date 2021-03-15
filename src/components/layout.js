import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './Header';
import InforLeft from './InforLeft';
import InforRight from './InforRight';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div className='page'>
          <div className='container'>
            <Header />
            <div className="home">
              <InforLeft />
              <InforRight children={children}  />
            </div>
          </div>
        </div>



       
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
