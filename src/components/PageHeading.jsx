import React from "react";

const PageHeading = () => {
  return (
    <div className="mb-4">
      <h1 className="mb-1.5 scroll-m-20 text-4xl font-bold tracking-tight">
        Closest Tailwind color
      </h1>
      <p>
        Choose a color and find its closest match on the TailwindCSS{" "}
        <a
          href="https://tailwindcss.com/docs/customizing-colors"
          target="_blank"
          className="underline hover:font-semibold"
        >
          default color palette
        </a>
        .
      </p>
      <div className="my-2">
        <iframe
          src="https://ghbtns.com/github-btn.html?user=pedrostanzani&repo=closest-tailwind-color&type=star&count=true"
          frameborder="0"
          width="100"
          height="20"
          title="GitHub"
        ></iframe>
      </div>
    </div>
  );
};

export default PageHeading;
