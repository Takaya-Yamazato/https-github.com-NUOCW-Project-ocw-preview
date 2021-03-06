import * as React from "react"
// import PropTypes from 'prop-types'
import { Link, graphql } from "gatsby"
import SEO from "../src/components/seo"
import Layout from '../src/components/Layout'
import BlogRoll from '../src/components/BlogRoll'
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PreviewCompatibleImage from '../src/components/PreviewCompatibleImage'

const IndexPage = ({ data }) => (

  <Layout>
      <SEO
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
      />
        <div
          className="full-width-image margin-top-0"
          style={{
            backgroundImage: `url(${data.site.pathPrefix}'/img/home-jumbotron2.jpg')`,
            // backgroundImage: `url(${data.frontmatter.image.childImageSharp})`,
            backgroundPosition: `top left`,
            backgroundAttachment: `fixed`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #004400, -0.5rem 0 0 #004400',
              backgroundColor: '#004400',
              color: 'white',
              padding: '1rem',
            }}
          >
            {data.markdownRemark.frontmatter.title}
          </h1>
          {/* <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {data.markdownRemark.frontmatter.subtitle}
        </h3>         */}
        </div>
        <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    {/* <p>{data.markdownRemark.frontmatter.aboutUs}</p> */}
                  </div>
                  <section className="content" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                </div>

                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                    {data.markdownRemark.frontmatter.heading}
                    </h3>
                    <p>{data.markdownRemark.frontmatter.description}</p>
                  </div>
                </div>
                {/* <Features gridItems={data.markdownRemark.frontmatter.intro.journals} /> */}

                <div className="columns is-multiline">
                  <div className="column is-6">
                    <section className="section">
                      <div className="has-text-centered">
                        <div
                          style={{
                            width: '240px',
                            display: 'inline-block',
                          }}
                        >
                        <PreviewCompatibleImage imageInfo={data.markdownRemark.frontmatter.eb.image} />
                        {/* <GatsbyImage image={ebimage} style={{ borderRadius: '5px' }} alt="IEICE EB" /> */}
                        </div>
                      </div>
                      <p>{data.markdownRemark.frontmatter.eb.text}</p>
                        <div className="column is-12 has-text-centered">
                          <a className="btn" href="https://search.ieice.org/bin/index.php?category=B&amp;lang=E" target="_blank" rel="noopener noreferrer">
                          See latest papers</a>
                        </div>
                    </section>
                  </div>
                  <div className="column is-6">
                    <section className="section">
                      <div className="has-text-centered">
                        <div
                          style={{
                            width: '240px',
                            display: 'inline-block',
                          }}
                        >
                        <PreviewCompatibleImage imageInfo={data.markdownRemark.frontmatter.comex.image} />
                        {/* <GatsbyImage image={comeximage} style={{ borderRadius: '5px' }} alt="IEICE ComEX" /> */}
                        </div>
                      </div>
                      <p>{data.markdownRemark.frontmatter.comex.text}</p>
                        <div className="column is-12 has-text-centered">
                          <a className="btn" href="https://www.ieice.org/publications/comex/" target="_blank" rel="noopener noreferrer">
                          See latest papers</a>
                        </div>
                    </section>
                  </div>                  
              </div>

              <div className="columns is-multiline">
                  <div className="column is-6">
                    <section className="section">
                      <div className="has-text-centered">
                        <div
                          style={{
                            width: '240px',
                            display: 'inline-block',
                          }}
                        >
                        <PreviewCompatibleImage imageInfo={data.markdownRemark.frontmatter.jb.image} />
                        {/* <GatsbyImage image={jbimage} style={{ borderRadius: '5px' }} alt="IEICE JB" /> */}
                        </div>
                      </div>
                      <p>{data.markdownRemark.frontmatter.jb.text}</p>
                        <div className="column is-12 has-text-centered">
                          <a className="btn" href="https://search.ieice.org/bin/index.php?category=B&amp;lang=J" target="_blank" rel="noopener noreferrer">
                          See latest papers</a>
                        </div>
                    </section>
                  </div>
                  <div className="column is-6">
                    <section className="section">
                      <div className="has-text-centered">
                        <div
                          style={{
                            width: '240px',
                            display: 'inline-block',
                          }}
                        >
                        <PreviewCompatibleImage imageInfo={data.markdownRemark.frontmatter.bPlus.image} />
                        {/* <GatsbyImage image={bPlusimage} style={{ borderRadius: '5px' }} alt="IEICE bPlus" /> */}
                        </div>
                      </div>
                      <p>{data.markdownRemark.frontmatter.bPlus.text}</p>
                        <div className="column is-12 has-text-centered">
                          <a className="btn" href="https://www.ieice.org/~cs-edit/magazine/" target="_blank" rel="noopener noreferrer">
                          See latest articles</a>
                        </div>
                    </section>
                  </div>
              </div>
    
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                  News and Updates
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/news">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </Layout>
)



// IndexPageTemplate.propTypes = {
//     image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//     top_title: PropTypes.string,
//     heading: PropTypes.string,
//     subheading: PropTypes.string,
//     mainpitch: PropTypes.object,
//     description: PropTypes.string,
//     intro: PropTypes.shape({
//       blurbs: PropTypes.array,
//     }),
//   }
  


  // const IndexPage = ({ data }) => {
  //     const post = data
  //   // const { frontmatter } = data
  //   // const { data } = this.props
  //   //  const { edges: posts } = data.allMarkdownRemark
  //   return (
  //     <Layout>
  //       <IndexPageTemplate
  //       //   image={data.allMarkdownRemark.edges.frontmatter.image}
  //       //   image={posts.frontmatter.image}
  //       //   title={posts.frontmatter.title}
  //       //   heading={posts.frontmatter.heading}
  //       //   subheading={frontmatter.subheading}
  //       //   mainpitch={frontmatter.mainpitch}
  //       //   description={frontmatter.description}
  //       //   intro={frontmatter.intro}
  //       />
  //     </Layout>
  //   )
  // }
  

  // IndexPage.propTypes = {
  //   data: PropTypes.shape({
  //     allMarkdownRemark: PropTypes.shape({
  //       edges: PropTypes.array,
  //     }),
  //   }),
  // }

  export default IndexPage


export const pageQuery = graphql`query IndexPage {
  site {
    siteMetadata {
      title
      description
    }
    pathPrefix
  }
  markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
    id
    frontmatter {
      templateKey
      title
      subtitle
      image {
        childImageSharp {
          gatsbyImageData(width: 2048, quality: 100, layout: CONSTRAINED)
        }
      }
      heading
      description
      eb {
        text
        image {
          childImageSharp {
            gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
          }
        }
      }
      comex {
        text
        image {
          childImageSharp {
            gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
          }
        }
      }
      jb {
        text
        image {
          childImageSharp {
            gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
          }
        }
      }
      bPlus {
        text
        image {
          childImageSharp {
            gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
          }
        }
      }
    }
    html
  }
}
`
