import React, { useRef, useContext, useEffect } from "react"
import styled from "styled-components"
import { motion, useAnimation } from "framer-motion"

import { useOnScreen } from "../../hooks/"
import Context from "../../context/"
import ContentWrapper from "../../styles/contentWrapper"

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  margin-top: 6rem;
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    .section-title {
      margin-bottom: 2rem;
    }
    .testimonial-card {
      max-width: 44rem;
      background: ${({ theme }) => theme.colors.tertiary};
      border-radius: 0.5rem;
      padding: 2rem 2.5rem;
      position: relative;
    }
    .quote-mark {
      font-size: 4rem;
      line-height: 1;
      font-family: Georgia, serif;
      color: ${({ theme }) => theme.colors.subtext};
      opacity: 0.4;
      margin-bottom: -1rem;
      display: block;
    }
    .quote-text {
      font-size: 1.05rem;
      line-height: 1.75;
      font-style: italic;
      color: ${({ theme }) => theme.colors.text};
      margin-bottom: 1.25rem;
    }
    .attribution {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.subtext};
      font-weight: 600;
    }
    .attribution span {
      font-weight: 400;
    }
    .letter-link {
      display: inline-block;
      margin-top: 1rem;
      font-size: 0.8rem;
      color: ${({ theme }) => theme.colors.subtext};
      text-decoration: underline;
      text-underline-offset: 3px;
      &:hover {
        color: ${({ theme }) => theme.colors.text};
      }
    }
  }
`

const Testimonial = () => {
  const { isIntroDone } = useContext(Context).state
  const tControls = useAnimation()
  const tRef = useRef()
  const tOnScreen = useOnScreen(tRef)

  useEffect(() => {
    if (isIntroDone && tOnScreen) {
      tControls.start({ opacity: 1, y: 0 })
    }
  }, [isIntroDone, tControls, tOnScreen])

  return (
    <StyledSection id="testimonial">
      <StyledContentWrapper>
        <motion.div
          ref={tRef}
          initial={{ opacity: 0, y: 20 }}
          animate={tControls}
        >
          <h3 className="section-title">Recommendation</h3>
          <div className="testimonial-card">
            <span className="quote-mark">"</span>
            <p className="quote-text">
              She brings technical skills, adaptability, initiative, leadership
              experience, and a strong commitment to continued learning. In
              recognition of her work and willingness to go above and beyond, we
              awarded Xhoana the Extra Mile Award for excellence in web
              development.
            </p>
            <div className="attribution">
              Amil Khanzada{" "}
              <span>— Founder &amp; President, Virufy</span>
            </div>
            <a
              className="letter-link"
              href="/recommendation.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View full letter →
            </a>
          </div>
        </motion.div>
      </StyledContentWrapper>
    </StyledSection>
  )
}

export default Testimonial
