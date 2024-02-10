import { useRef } from 'react';

function HomePage() {
  const userInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredEmail = userInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const reqBody = { email: enteredEmail, text: enteredFeedback };

    fetch ('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => res.json()).then((data) => console.log(data));
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={userInputRef}/>
        </div>
        <div>
          <label htmlFor="feedback">Your Email Address</label>
          <textarea id="feedback" rows="5" ref={feedbackInputRef}></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
    </div>
  );
}

export default HomePage;
