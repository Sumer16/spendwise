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
          {/* If every form submitted has the name _action then we will know what action needs to be done
          (_action is a naming convention which allows to pass the value as name i.e. makes it dyanmic naming)
          e.g., This input is creating a new user then this action will be shown in dashboard _action and
          that way we will be able to handle multiple form submissions. */}
          <input type="hidden" name="_action" value="newUser" />
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
