import { css } from "@linaria/core";
import { Link, useRouterState } from "@tanstack/react-router";
import { APP_ROUTES } from "../router";

const headerClass = css`
  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  display: flex;
  justify-content: flex-end;
  margin-top: 88px;
  padding: 0 96px;
  position: absolute;
  width: 100vw;

  nav ul {
    text-align: right;
    display: flex;
    flex-direction: column;
  }

  nav ul li {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  nav ul li:not(:last-child)::after {
    content: "";
    width: 1px;
    height: 54px;
    display: block;
    background-color: #cccccc;
    margin-right: 4px;

    animation: fadeIn 1s ease-in 0s;
  }
`;

const linkBaseClass = css`
  color: #cccccc;
  transition: 0.3s;

  &:hover {
    transform: translateX(-10px);
    transition: 0.3s;
  }
`;

const link0Class = css`
  animation: slideInFromLeft 0.6s ease-in-out 0s;
`;

const link1Class = css`
  animation: slideInFromLeft 0.8s ease-in-out 0s;
`;

const link2Class = css`
  animation: slideInFromLeft 1s ease-in-out 0s;
`;

const activeLinkClass = css`
  color: #f2f2f2;
  font-weight: bold;
`;

const anchorClass = css`
  display: flex;
  align-items: center;
  gap: 24px;

  &::after {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border: 1px solid #cccccc;
    background-color: transparent;
    border-radius: 100px;

    animation: fadeIn 1s ease-in 0s;
  }
`;

const activeAnchorClass = css`
  &::after {
    background-color: #cccccc;
    border: 1px solid transparent;
  }
`;

const linkByIndex = [link0Class, link1Class, link2Class] as const;

export function Header() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  return (
    <header className={headerClass}>
      <nav>
        <ul>
          {APP_ROUTES.map((url, index) => {
            const isCurrentUrl = url.path === pathname;
            const linkClass = linkByIndex[index] ?? linkByIndex[0];

            return (
              <li key={url.path}>
                <div
                  className={`${anchorClass} ${isCurrentUrl ? activeAnchorClass : ""}`}
                >
                  <Link
                    to={url.path}
                    className={`${linkBaseClass} ${linkClass} ${isCurrentUrl ? activeLinkClass : ""}`}
                  >
                    {url.name}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
