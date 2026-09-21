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
    .deck-embed {
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 56.25%;
      overflow: hidden;
      border-radius: 0.75rem;
      box-shadow: 0 2px 1.5rem ${({ theme }) => theme.colors.boxShadow};
    }
    .deck-embed iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
    }
    .deck-footer {
      margin-top: 1rem;
      display: flex;
      justify-content: flex-end;
    }
    .deck-link {
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

const Deck = () => {
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
    <StyledSection id="deck">
      <StyledContentWrapper>
        <motion.div
          ref={tRef}
          initial={{ opacity: 0, y: 20 }}
          animate={tControls}
        >
          <h3 className="section-title">Portfolio Deck</h3>
          <div className="deck-embed">
            <iframe
              loading="lazy"
              src="https://www.canva.com/design/DAHV13748FE/zDisSxMiWnurX7d5SzVP0g/view?embed"
              allowFullScreen
              allow="fullscreen"
              title="Xhoana Koca Portfolio Deck"
            />
          </div>
          <div className="deck-footer">
            <a
              className="deck-link"
              href="https://www.canva.com/design/DAHV13748FE/zDisSxMiWnurX7d5SzVP0g/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              View full deck on Canva →
            </a>
          </div>
        </motion.div>
      </StyledContentWrapper>
    </StyledSection>
  )
}

export default Deck
