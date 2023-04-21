// react
import { useEffect, useRef } from 'react';

// react-router-dom imports
import { Form, useFetcher } from 'react-router-dom';

// library imports
import { CurrencyDollarIcon } from '@heroicons/react/24/solid';

const AddBudgetForm = () => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === 'submitting';

  // It does not cause re-renders and allows values to persist between the DOM
  const formRef = useRef();
  const focusRef = useRef();
  
  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting])

  return (
    <div className="form-wrapper">
      <h2 className="h3">
        Create budget
      </h2>
      <fetcher.Form 
        method="post"
        className="grid-sm"
        ref={formRef}
      >
        <div className="grid-xs">
          <label htmlFor="newBudget">Budget Name</label>
          <input
            type="text"
            placeholder="e.g., Groceries"
            required
            name="newBudget"
            id="newBudget"
            ref={focusRef}
          />
        </div>
        <div className="grid-xs">
          <label htmlFor="newBudgetAmount">Amount</label>
          <input
            type="number"
            placeholder="e.g., $350"
            required
            step="0.01"
            name="newBudgetAmount"
            id="newBudgetAmount"
            inputMode="decimal"
          />
        </div>
        {/* If every form submitted has the name _action then we will know what action needs to be done
        (_action is a naming convention which allows to pass the value as name i.e. makes it dyanmic naming)
        e.g., This input is creating a new user then this action will be shown in dashboard _action and
        that way we will be able to handle multiple form submissions. */}
        <input type="hidden" name="_action" value="createBudget" />
        <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
          {
            isSubmitting ? <span>Submitting...</span> :
            (<>
              <span>Create budget</span>
              <CurrencyDollarIcon width={20} />
            </>)
          }
        </button>
      </fetcher.Form>
    </div>
  )
}

export default AddBudgetForm;
