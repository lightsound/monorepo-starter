import { NavLink } from "@local/next-ui/Button";
import type { VFC } from "react";

const items = [
  { href: "/", label: "Root" },
  { href: "/about", label: "About" },
];

/**
 * @package
 */
export const Header: VFC = () => (
  <div>
    <h1>Title</h1>
    <nav>
      {items.map(({ href, label }) => (
        <NavLink key={href} href={href} activeClassName="text-red-500">
          <a className="inline-block p-4">{label}</a>
        </NavLink>
      ))}
    </nav>
  </div>
);
