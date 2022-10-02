import { useState } from 'react';

function useToggle(prevState) {
  const [value, setValue] = useState(prevState);

  function toggleValue(state) {
    setValue((newState) =>
      typeof state === 'boolean' ? state : !newState
    );
  }

  return [value, toggleValue];
}

export default useToggle;