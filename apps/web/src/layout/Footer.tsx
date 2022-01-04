import type { VFC } from "react";

/**
 * @package
 */
export const Footer: VFC = () => (
  <div>
    <small>&copy; {new Date().getFullYear()} example.com</small>
  </div>
);
