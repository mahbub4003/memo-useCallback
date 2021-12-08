import { memo } from "react";

function Title({ count }) {
  console.log("title renering,,,,,,,");
  return (
    <div>
      <h1>CallBack Hook Tutorial</h1>
    </div>
  );
}

export default memo(Title);
