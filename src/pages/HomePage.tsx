import { css } from "@linaria/core";
import { useQuery } from "@tanstack/react-query";
import { siteContentQueryOptions } from "../lib/api/siteContent";

const headingClass = css`
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

  transition: 0.3s;
  animation-name: slideInFromLeft;
  animation-delay: 0s;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
`;

const heading2Class = css`
  transition: 0.3s;
  animation-name: slideInFromLeft;
  animation-delay: 0s;
  animation-duration: 2.8s;
  animation-timing-function: ease-in-out;
`;

const headingNameClass = css`
  font-weight: bold;
`;

const fallbackContent = {
  headingPrefix: "Hi, my name is",
  headingName: "João Carlos",
  subtitle: "I’m a Front-end developer",
};

export function HomePage() {
  const { data } = useQuery(siteContentQueryOptions);
  const content = data?.home ?? fallbackContent;

  return (
    <>
      <h1 className={headingClass}>
        {content.headingPrefix}{" "}
        <b className={headingNameClass}>{content.headingName}</b>
      </h1>
      <h1 className={heading2Class}>{content.subtitle}</h1>
    </>
  );
}
