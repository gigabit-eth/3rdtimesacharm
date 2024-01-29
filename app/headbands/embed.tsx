import React from "react";

const HtmlEmbed: React.FC<{ htmlContent: string }> = ({ htmlContent }) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default HtmlEmbed;
