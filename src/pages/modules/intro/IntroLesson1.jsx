import React from 'react';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';
import LessonWrapper from '../../../components/LessonWrapper';
import '../../../LessonStyle.css';

export default function IntroLesson1() {
  return (
    <LessonWrapper>
      <h2>
        <Trans i18nKey="intro_lesson1_title" components={{ highlight: <span className="highlight" /> }} />
      </h2>

      <p>
        <Trans
          i18nKey="intro_lesson1_paragraph1"
          components={{ highlight: <span className="highlight" /> }}
        />
      </p>
      <p>
        <Trans
          i18nKey="intro_lesson1_paragraph2"
          components={{ highlight: <span className="highlight" /> }}
        />
      </p>
      <p>
        <Trans
          i18nKey="intro_lesson1_paragraph3"
          components={{ highlight: <span className="highlight" /> }}
        />
      </p>

      <div className="navigation-buttons">
        <Link to="/intro" className="nav-button">
          <Trans i18nKey="back_button" />
        </Link>
        <Link to="/intro/lesson2" className="nav-button">
          <Trans i18nKey="next_button" />
        </Link>
      </div>
    </LessonWrapper>
  );
}
