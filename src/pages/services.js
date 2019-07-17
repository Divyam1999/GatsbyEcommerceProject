import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/infoblock"
import DualInfoblock from "../components/Reusable/Dualinfoblock"
import Servicesphotosection from "../components/Services/Servicesphotosection";

const ServicesPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={ data.img.childImageSharp.fluid }
      title="Our Services"
      subtitle="we value our customers"
      heroclass="about-background text-center"
      />
      <Servicesphotosection />
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

export default ServicesPage