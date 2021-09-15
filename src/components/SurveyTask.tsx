import React from 'react';

// It is recommended to keep components stateless and use redux for managing states
export const SurveyTask = (props: any) => {
  const attr = props.task.attributes;
  console.log('@@@props', props);

  function fillStars(count: number) {
    let ret = '';
    for (let i = 1; i <= 5; i++) {
      if (count >= i) {
        ret += '★';
        continue;
      }

      ret += '☆';
    }

    return ret;
  }

  const style = {
    main: {
      margin: '20px',
      fontSize: '20px',
    },
    journey: {
      textAlign: 'center' as const,
    },
    questions: {
      width: '50%',
      margin: '40px auto',
    },
    details: {
      margin: '20px',
    },
  };
  return (
    <div className="Twilio" style={style.main}>
      <div style={style.journey}>{attr.journey}</div>
      <div style={style.questions}>
        {attr.questions.map((q: any) => {
          console.log('aaa', q);
          return (
            <p>
              {fillStars(q.stars)} {q.title}
            </p>
          );
        })}
        <p>{fillStars(attr.overallStars)} Overall</p>
      </div>
      <div style={style.details}>{attr.details}</div>
    </div>
  );
};
