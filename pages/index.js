import anime from 'animejs';
import React from 'react';
import classNames from 'classnames';
import DocumentTitle from 'react-document-title';
import KeyHandler, { KEYDOWN } from 'react-key-handler';
import { prefixLink } from 'gatsby-helpers';

import _ from 'lodash';

import Logo, { LOGO_TEXT, LOGO_ICON } from './components/logo';
import Typing from './components/typing';

const numOfSections = 2;
let slideAnimations = {};

function generateSlideAnimations(win) {
  slideAnimations = {
    slide0: [
      {
        targets: '.splash__container',
        translateX: [win.innerWidth, 0],
        delay: 25,
        easing: "easeOutCirc",
        duration: 440
      },
      {
        targets: '.slide__button--wrapper',
        translateX: [-win.innerWidth, 0],
        delay: 50,
        easing: "easeOutCirc",
        duration: 440
      }
    ],
    slide1: [
      {
        targets: '.circle--one',
        scale: [0, 1],
        delay: 25,
        easing: "easeOutCirc",
        duration: 440
      },
      {
        targets: '.circle--two',
        scale: [0, 1],
        delay: 250,
        easing: "easeOutCirc",
        duration: 440
      },
      {
        targets: '.circle--three',
        scale: [0, 1],
        delay: 475,
        easing: "easeOutCirc",
        duration: 440
      },
      {
        targets: '.info__container',
        translateY: [win.innerHeight, 0],
        delay: 700,
        easing: "easeOutCirc",
        duration: 440
      }
    ]
  };
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
  }

  componentDidMount() {
    if (window) {
      generateSlideAnimations(window);
    }
  }

  componentDidUpdate() {
    const animations = slideAnimations[`slide${this.state.slideIndex}`];
    if (animations) {
      for (let animation of animations) {
        anime(animation);
      }
    }
  }

  _handleKeyboardArrows(e, increment) {
    this._handleArrowClick(e, true);
  }

  _handleArrowClick(e, increment) {
    e.preventDefault();

    const currentIndex = this.state.slideIndex;
    const nextIndex = increment ? (currentIndex + 1) : (currentIndex - 1)

    this.setState({
      slideIndex: nextIndex < 0 ? numOfSections - 1 : nextIndex % numOfSections
    });
  }

  render () {
    const stringsToType = [
      'Design',
      'Graphic Design',
      'Photography',
      'Web Design',
      'Videography',
      'Design'
    ];

    return (
      <DocumentTitle title="Innovative Design">
        <div>
          <KeyHandler
            keyEventName={KEYDOWN}
            keyValue="ArrowDown"
            onKeyHandle={(e) => {
              this._handleKeyboardArrows(e, true);
            }}
          />
          <KeyHandler
            keyEventName={KEYDOWN}
            keyValue="ArrowUp"
            onKeyHandle={(e) => {
              this._handleKeyboardArrows(e, false);
            }}
          />
          <KeyHandler
            keyEventName={KEYDOWN}
            keyValue="ArrowRight"
            onKeyHandle={(e) => {
              this._handleKeyboardArrows(e, true);
            }}
          />
          <KeyHandler
            keyEventName={KEYDOWN}
            keyValue="ArrowLeft"
            onKeyHandle={(e) => {
              this._handleKeyboardArrows(e, false);
            }}
          />
          <div className="page__wrapper home">
            <div className="slideshow">
              <div
                className={
                  classNames(
                    "slide__layout",
                    "slide__layout--1",
                    {
                      "slide__layout--selected": this.state.slideIndex === 0
                    }
                  )
                }
              >
                <div className="splash__container">
                  <Logo logoType={ LOGO_TEXT } logoClass={ 'logo__svg--color' } />
                  <Typing
                    defaultString="Design"
                    strings={ stringsToType }
                    interval={ { letter: 50, string: 500 } }
                    backspace={ true }
                    cursor={ '|' }
                    startDelay={ 750 }
                    hideCursorOnDone={ true }
                  />
                </div>
                <div className="slide__button--wrapper">
                  <div
                    className="slide__button slide__button--1"
                    style={{ backgroundImage: `url("${prefixLink('/img/club-one.jpg')}")` }}
                  ></div>
                  <a href="http://apply.innovativedesign.club">
                    <div className="slide__button slide__button--2">
                      <div className="apply__text">join our team</div>
                      <div className="slide__fill"></div>
                    </div>
                  </a>
                </div>
              </div>
              <div
                className={
                  classNames(
                    "slide__layout",
                    "slide__layout--2",
                    {
                      "slide__layout--selected": this.state.slideIndex === 1
                    }
                  )
                }
              >
                <div className="circle__container">
                  <div
                    className="circle circle--one"
                    style={{ backgroundImage: `url("${prefixLink('/img/calday.jpg')}")` }}
                  ></div>
                  <div
                    className="circle circle--two"
                    style={{ backgroundImage: `url("${prefixLink('/img/marketing.png')}")` }}
                  ></div>
                  <div
                    className="circle circle--three"
                    style={{ backgroundImage: `url("${prefixLink('/img/flyers.png')}")` }}
                  ></div>
                </div>
                <div className="info__container">
                  Innovative Design is a family of designers, photographers, web developers,
                  and videographers at the University of California, Berkeley. We are creative
                  individuals who are continuously evolving by collaborating, inspiring and
                  educating one another.
                </div>
              </div>
            </div>
            <div className="slideshow__nav">
              <div className="slideshow__arrows">
                <div
                  className="arrow arrow--left"
                  onClick={(e) => { this._handleArrowClick(e, false) }}
                >
                  <div className="arrow__bar"></div>
                  <div className="arrow__triangle"></div>
                </div>
                <div
                  className="arrow arrow--right"
                  onClick={(e) => { this._handleArrowClick(e, true) }}
                >
                  <div className="arrow__bar"></div>
                  <div className="arrow__triangle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

