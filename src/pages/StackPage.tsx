import { css } from "@linaria/core";
import { useQuery } from "@tanstack/react-query";
import javascriptIcon from "../assets/javascript.svg";
import jestIcon from "../assets/jest.svg";
import nextIcon from "../assets/next.svg";
import nodeIcon from "../assets/node.svg";
import reactIcon from "../assets/react.svg";
import typescriptIcon from "../assets/typescript.svg";
import { siteContentQueryOptions } from "../lib/api/siteContent";

const containerClass = css`
  @keyframes slideInFromBottom {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  h1 {
    font-weight: bold;
  }

  h1 + p {
    font-weight: lighter;
  }

  p {
    color: #828282;
  }

  li {
    color: #f2f2f2;
  }

  .text,
  ul {
    animation: slideInFromBottom 2s ease-in-out 0s;
  }

  li {
    padding: 16px;
    background-color: #1a1a1a;
    border: 1px solid #666666;
    border-radius: 8px;
    font-size: 18px;

    display: flex;
    align-items: center;
    gap: 18px;
    cursor: pointer;
    transition: 0.3s;
  }

  li:hover {
    box-shadow: 0px 0px 10px 5px rgba(39, 39, 39, 0.75);
    transform: translate3d(-3px, -3px, 0);
  }

  ul {
    display: flex;
    gap: 16px;
    max-width: 600px;
    flex-wrap: wrap;
  }

  .stack {
    margin-top: 96px;
  }
`;

const iconByName: Record<string, string> = {
  JavaScript: javascriptIcon,
  TypeScript: typescriptIcon,
  React: reactIcon,
  "Next.js": nextIcon,
  Jest: jestIcon,
  Node: nodeIcon,
};

const fallbackContent = {
  title: "Stack",
  subtitle: "Languages and frameworks that I use on my daily basis",
  items: [
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "React" },
    { name: "Next.js" },
    { name: "Jest" },
    { name: "Node" },
  ],
};

export function StackPage() {
  const { data } = useQuery(siteContentQueryOptions);
  const content = data?.stack ?? fallbackContent;

  return (
    <div className={containerClass}>
      <div className="text">
        <h1>{content.title}</h1>
        <p>{content.subtitle}</p>
      </div>

      <div className="stack">
        <ul>
          {content.items.map((item) => {
            const icon = iconByName[item.name];

            return (
              <li key={item.name}>
                {icon ? <img src={icon} alt="" /> : null}
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
