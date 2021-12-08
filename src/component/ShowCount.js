import { memo } from "react";

function ShowCount({ count, title }) {
  console.log(`rendering ${title}`);
  return (
    <div>
      <h1>
        {title} is {count}
      </h1>
    </div>
  );
}

export default memo(ShowCount);
