import React from 'react';
import Typed from 'typed.js';

class TypingHeadline extends React.Component {
  componentDidMount() {
    // If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { strings } = this.props;
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity,
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (
      <html>
        <head><script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.9"></script></head>
        <div className="landing-text">
            <div className="typing-container">
                <span
                className="typing text-white-50 mx-auto mt-2 mb-5"
                style={{ whiteSpace: "pre" }}
                ref={el => {
                    this.el = el;
                }}
                />
            </div>
        </div>
      </html>
    );
  }
}

export default TypingHeadline;