import { Button } from "@local/next-ui/Button";
import type { VFC } from "react";

export const Index: VFC = () => {
  const handleClick = () => {
    window.alert("Hello, World!");
  };

  return (
    <div>
      <h2>Index</h2>
      <Button tag="button" className="p-2" onClick={handleClick}>
        Click me!
      </Button>
    </div>
  );
};
