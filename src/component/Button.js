import { memo } from "react";

function Button({ handleClick, children }) {
  console.log(`rendering ${children}`);
  return (
    <div>
      <button type="button" onClick={handleClick}>
        {children}
      </button>
    </div>
  );
}

export default memo(Button);
