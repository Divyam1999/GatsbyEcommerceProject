import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/infoblock"
import DualInfoblock from "../components/Reusable/Dualinfoblock"
import Teamphotosection from "../components/About/Teamphotosection";

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={ data.img.childImageSharp.fluid }
      title="About Learn Code Online"
      subtitle=""
      heroclass="about-background text-center"
      />
      <DualInfoblock heading="A Message from CEO's desk" />
      <Infoblock heading="Our Vision"/>
      <Teamphotosection />
  </Layout>
)

export const query = graphql`
  {
    img:file(relativePath:{eq: "about.png"}) {
      childImageSharp{
        fluid{
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
