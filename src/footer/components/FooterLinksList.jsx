import React from 'react';

export default function FooterLinksList({ linksData }) {
  return (
    <ul className="footer__links">
      <li className="footer__link">{linksData.generalTitle}</li>
      {linksData.links.map(linkInfo => (
        <li key={linkInfo.title} className="footer__link">
          <a href={linkInfo.href}>{linkInfo.title}</a>
        </li>
      ))}
    </ul>
  );
}
