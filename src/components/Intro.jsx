// react-router-dom imports
import { Form } from 'react-router-dom';

// library imports
import { UserPlusIcon } from '@heroicons/react/24/solid';

// assets
import illustration from '../assets/illustration.jpg';

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Take Control of <span className="accent">Your Money</span>
        </h1>
        <p>
          You don't have to see the whole staircase, just take the first step. Start your savings journey today.
        </p>
        <Form method="post">
          <input 
            type="text" 
            name="userName" 
            required 
            placeholder="What is your name?" 
            aria-label="Your Name" 
            autoComplete="given-name" 
          />
          <button type="submit" className="btn btn--dark">
            <span>Create Account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt="Person with money" width={600} />
    </div>
  )
}

export default Intro;