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
    .gherkin-block {
      font-family: "Courier New", Courier, monospace;
      font-size: 0.875rem;
      line-height: 2;
      background: ${({ theme }) => theme.colors.tertiary};
      border-left: 3px solid ${({ theme }) => theme.colors.primary};
      border-radius: 0.25rem;
      padding: 1.75rem 2rem;
      max-width: 44rem;
      overflow-x: auto;
    }
    .keyword {
      font-weight: 700;
    }
    .feature { color: ${({ theme }) => theme.colors.text}; }
    .scenario { padding-left: 1.25rem; }
    .step { padding-left: 2.5rem; }
    .spacer { height: 0.75rem; }
  }
`

const Gherkin = () => {
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
    <StyledSection id="gherkin">
      <StyledContentWrapper>
        <motion.div
          ref={tRef}
          initial={{ opacity: 0, y: 20 }}
          animate={tControls}
        >
          <h3 className="section-title">In QA Terms</h3>
          <div className="gherkin-block">
            <div className="feature">
              <span className="keyword">Feature:</span> Hire Xhoana Koca
            </div>
            <div className="spacer" />
            <div className="scenario">
              <span className="keyword">Scenario:</span> QA Analyst who ships quality software
            </div>
            <div className="step"><span className="keyword">Given</span> an enterprise application under active development</div>
            <div className="step"><span className="keyword">And</span> a team needing clear requirements and test coverage</div>
            <div className="step"><span className="keyword">When</span> Xhoana joins as Business Analyst and QA Analyst</div>
            <div className="step"><span className="keyword">Then</span> UAT, SIT, and regression cycles are planned and executed</div>
            <div className="step"><span className="keyword">And</span> defects are documented with root cause analysis in JIRA</div>
            <div className="step"><span className="keyword">And</span> acceptance criteria are defined before development begins</div>
            <div className="step"><span className="keyword">And</span> releases go out on time</div>
            <div className="spacer" />
            <div className="scenario">
              <span className="keyword">Scenario:</span> Business Analyst who speaks both languages
            </div>
            <div className="step"><span className="keyword">Given</span> stakeholders with business needs</div>
            <div className="step"><span className="keyword">And</span> developers who need technical requirements</div>
            <div className="step"><span className="keyword">When</span> Xhoana bridges the two</div>
            <div className="step"><span className="keyword">Then</span> requirements become user stories with clear acceptance criteria</div>
            <div className="step"><span className="keyword">And</span> nothing gets lost in translation</div>
          </div>
        </motion.div>
      </StyledContentWrapper>
    </StyledSection>
  )
}

export default Gherkin
