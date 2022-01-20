import on from '../../assets/img/on.png';

export const About = () => {
  return (
    <section id="about" className="about flex justify-center main-container">
      <div className="left">
        <h3>Hi! I'm On Chetrit</h3>
        <h1>Full-Stack Web Developer</h1>
        <p>
          Well-qualified Full Stack Developer familiar with wide range of
          programming utilities and languages. Knowledgeable of backend and
          frontend development requirements.
        </p>
        <p>
          Handle any part of process with ease. Collaborative team player with
          excellent technical abilities, hard worker, focusing on problem
          solving. self-learner and adapt quickly to new environments.
        </p>
        <div className="actions flex">
          <div className="container-button">
            <span className="mas flex auto-center">Contact Me</span>
            <button className="contact">Contact Me</button>
          </div>
          <button className="cv ul">Download CV</button>
        </div>
      </div>
      <div className="right flex auto-center">
        <div className="photo">
          <img src={on} alt="" />
          <div className="circle flex auto-center">
            <div className="logo"></div>
            <div className="text">
              <p>
                {'Open To Work - Open To Work - '.split('').map((char, i) => {
                  return (
                    <span key={i} style={{ transform: `rotate(${i * 12}deg)` }}>
                      {char}
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
