import React, { useRef, useContext, useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { motion, useAnimation } from "framer-motion"

import { useOnScreen } from "../../hooks/"
import Context from "../../context/"
import ContentWrapper from "../../styles/contentWrapper"

const EXPERIENCE = [
  { company: "Citi Group", role: "BA / QA Analyst", period: "2021 – 2025" },
  { company: "RFCUNY – NYCCT", role: "Student Advisor", period: "2020 – 2021" },
  { company: "Virufy", role: "Web Dev Team Lead", period: "2020 – 2021" },
  { company: "Aavia", role: "Software Dev Intern", period: "2020" },
  { company: "NYCCT, CUNY", role: "B.Tech · Magna Cum Laude", period: "2020" },
]

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  margin-top: 4rem;
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }
    .section-title {
      margin-bottom: 2rem;
    }
    .inner-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .text-content {
      width: 100%;
      max-width: 31.25rem;
    }
    .timeline-wrapper {
      width: 100%;
      max-width: 16rem;
      flex-shrink: 0;
      margin-top: 3rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-top: 4.5rem;
        margin-left: 3rem;
      }
    }
    .timeline-heading {
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: ${({ theme }) => theme.colors.subtext};
      font-weight: 600;
      margin-bottom: 1.25rem;
    }
    .tl-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 1.25rem;
      position: relative;
      &:not(:last-child)::after {
        content: "";
        position: absolute;
        left: 0.3rem;
        top: 0.85rem;
        bottom: -1.25rem;
        width: 1px;
        background: ${({ theme }) => theme.colors.subtext};
        opacity: 0.2;
      }
    }
    .tl-dot {
      width: 0.65rem;
      height: 0.65rem;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.primary};
      flex-shrink: 0;
      margin-top: 0.22rem;
      margin-right: 0.875rem;
    }
    .tl-company {
      font-size: 0.875rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.text};
      line-height: 1.3;
    }
    .tl-role {
      font-size: 0.775rem;
      color: ${({ theme }) => theme.colors.subtext};
      margin-top: 0.1rem;
    }
    .tl-period {
      font-size: 0.7rem;
      color: ${({ theme }) => theme.colors.subtext};
      opacity: 0.7;
      margin-top: 0.1rem;
    }
  }
`

const About = ({ content }) => {
  const { frontmatter, body } = content[0].node
  const { isIntroDone } = useContext(Context).state
  const tControls = useAnimation()
  const iControls = useAnimation()

  const tRef = useRef()
  const tOnScreen = useOnScreen(tRef)

  const iRef = useRef()
  const iOnScreen = useOnScreen(iRef)

  useEffect(() => {
    if (isIntroDone) {
      if (tOnScreen) tControls.start({ opacity: 1, y: 0 })
      if (iOnScreen) iControls.start({ opacity: 1, x: 0 })
    }
  }, [isIntroDone, tControls, iControls, tOnScreen, iOnScreen])

  return (
    <StyledSection id="about">
      <StyledContentWrapper>
        <motion.div
          className="inner-wrapper"
          ref={tRef}
          initial={{ opacity: 0, y: 20 }}
          animate={tControls}
        >
          <h3 className="section-title">{frontmatter.title}</h3>
          <div className="text-content">
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </motion.div>
        <motion.div
          className="timeline-wrapper"
          ref={iRef}
          initial={{ opacity: 0, x: 20 }}
          animate={iControls}
        >
          <div className="timeline-heading">Experience</div>
          {EXPERIENCE.map((item, i) => (
            <div className="tl-item" key={i}>
              <div className="tl-dot" />
              <div>
                <div className="tl-company">{item.company}</div>
                <div className="tl-role">{item.role}</div>
                <div className="tl-period">{item.period}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </StyledContentWrapper>
    </StyledSection>
  )
}

About.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        body: PropTypes.string.isRequired,
        frontmatter: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
}

export default About
