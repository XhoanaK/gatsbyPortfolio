import React, { useEffect, useContext } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"
import { motion, useAnimation } from "framer-motion"

import Context from "../../context/"
import ContentWrapper from "../../styles/contentWrapper"
import Social from "../social"
import SplashScreen from "../splashScreen"
import { lightTheme, darkTheme } from "../../styles/theme"

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 6rem;
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 4rem;
    }
    .hero-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
    }
    .hero-image {
      width: 100%;
      max-width: 18rem;
      flex-shrink: 0;
      margin-top: 2.5rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-top: 0;
        margin-left: 3rem;
      }
    }
    .hero-photo {
      border-radius: 1rem;
      box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.16);
    }
    .greetings {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .emoji {
      margin-left: 0.75rem;
      width: 2.2rem;
      height: 2.2rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-left: 1rem;
        width: 3rem;
        height: 3rem;
      }
    }
    .title {
      margin-bottom: 1.5rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-bottom: 0;
      }
    }
    .subtitle {
      margin-top: -0.75rem;
    }
    .gherkin-hero {
      font-family: "Courier New", Courier, monospace;
      font-size: 0.78rem;
      line-height: 1.9;
      background: ${({ theme }) => theme.colors.tertiary};
      border-left: 3px solid ${({ theme }) => theme.colors.primary};
      border-radius: 0.25rem;
      padding: 1.25rem 1.5rem;
      margin-top: 1.25rem;
      margin-bottom: 2rem;
      overflow-x: auto;
    }
    .kw { font-weight: 700; }
    .g1 { padding-left: 1rem; display: block; }
    .g2 { padding-left: 2rem; display: block; }
    .g-gap { height: 0.4rem; }
  }
`

const Hero = ({ content }) => {
  const { frontmatter } = content[0].node
  const { isIntroDone, darkMode } = useContext(Context).state

  const gControls = useAnimation()
  const eControls = useAnimation()
  const sControls = useAnimation()

  useEffect(() => {
    const pageLoadSequence = async () => {
      if (isIntroDone) {
        eControls.start({
          rotate: [0, -10, 12, -10, 9, 0, 0, 0, 0, 0, 0],
          transition: { duration: 2.5, loop: 3, repeatDelay: 1 },
        })
        await gControls.start({
          opacity: 1,
          y: 0,
          transition: { delay: 0.4 },
        })
        await sControls.start({
          opacity: 1,
          x: 0,
        })
      }
    }
    pageLoadSequence()
  }, [isIntroDone, darkMode, eControls, gControls, sControls])

  return (
    <StyledSection id="hero">
      {!isIntroDone && <SplashScreen />}
      <StyledContentWrapper>
        <div className="hero-text">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={gControls}
            data-testid="animated-heading"
          >
            <h1 className="title">
              <div className="greetings">
                {frontmatter.greetings}
                <motion.div
                  animate={eControls}
                  style={{ originX: 0.7, originY: 0.7 }}
                >
                  <Img
                    className="emoji"
                    fluid={frontmatter.icon.childImageSharp.fluid}
                  />
                </motion.div>
              </div>
              {frontmatter.title}
            </h1>
            <h2 className="subtitle">
              {frontmatter.subtitlePrefix}{frontmatter.subtitle}
            </h2>
            <div className="gherkin-hero">
              <span><span className="kw">Feature:</span> Hire Xhoana Koca</span>
              <div className="g-gap" />
              <span className="g1"><span className="kw">Scenario:</span> QA Analyst who ships quality software</span>
              <span className="g2"><span className="kw">Given</span> a team needing clear requirements and test coverage</span>
              <span className="g2"><span className="kw">When</span> Xhoana joins as Business Analyst &amp; QA Analyst</span>
              <span className="g2"><span className="kw">Then</span> UAT, SIT, and regression cycles are planned and executed</span>
              <span className="g2"><span className="kw">And</span> defects are documented with root cause analysis</span>
              <span className="g2"><span className="kw">And</span> releases go out on time</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={sControls}>
            <Social fontSize=".95rem" padding=".3rem 1.25rem" width="auto" />
          </motion.div>
        </div>
        {frontmatter.image && (
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 20 }}
            animate={gControls}
          >
            <Img
              className="hero-photo"
              fluid={frontmatter.image.childImageSharp.fluid}
            />
          </motion.div>
        )}
      </StyledContentWrapper>
    </StyledSection>
  )
}

Hero.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        frontmatter: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
}

export default Hero
