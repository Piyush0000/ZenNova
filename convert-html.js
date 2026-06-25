const fs = require('fs');
const path = require('path');

const srcHtmlPath = path.join(__dirname, 'aliceblue-nightingale-833852.hostingersite.com', 'index.html');
const destPagePath = path.join(__dirname, 'src', 'app', 'page.tsx');

let html = fs.readFileSync(srcHtmlPath, 'utf8');

// 1. Extract body content
const bodyStart = html.indexOf('<body id="page-home">');
const bodyEnd = html.lastIndexOf('</body>');

if (bodyStart === -1 || bodyEnd === -1) {
  console.error("Could not find body tag");
  process.exit(1);
}

// Get the content inside the body tag
let bodyContent = html.substring(bodyStart + '<body id="page-home">'.length, bodyEnd);

// 2. Remove script tags at the bottom of the body (handled in layout.tsx)
bodyContent = bodyContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

// 3. Remove HTML comments (which break JSX)
bodyContent = bodyContent.replace(/<!--[\s\S]*?-->/g, '');

// 4. Clean up duplicate data-bb-toggle="quick-shop" attributes (which break JSX)
bodyContent = bodyContent.replace(/(data-bb-toggle="quick-shop"\s+)([^>]*)(data-bb-toggle="quick-shop")/g, '$1$2');

// 5. Clean up nested <p> tags: <p><p>Text</p></p> -> <p>Text</p> (which breaks DOM rules in React)
bodyContent = bodyContent.replace(/<p\b[^>]*>\s*(<p\b[^>]*>[\s\S]*?<\/p>)\s*<\/p>/gi, '$1');

// 6. Convert <style>...</style> blocks to dangerouslySetInnerHTML
bodyContent = bodyContent.replace(/<style\b[^>]*>([\s\S]*?)<\/style>/gi, (match, css) => {
  const escapedCss = css.replace(/`/g, '\\`').replace(/\$/g, '\\$');
  return `<style dangerouslySetInnerHTML={{ __html: \`${escapedCss}\` }} />`;
});

// 7. Replace absolute domain URLs with relative root
bodyContent = bodyContent.replace(/https:\/\/aliceblue-nightingale-833852\.hostingersite\.com\//g, '/');
bodyContent = bodyContent.replace(/https:\\\/\\\/aliceblue-nightingale-833852\.hostingersite\.com\\\//g, '/');

// 8. Helper function to parse style strings to React style objects with TS cast
function convertStyleAttribute(htmlStr) {
  const styleRegex = /style="([^"]*)"/g;
  return htmlStr.replace(styleRegex, (match, styleVal) => {
    if (!styleVal.trim()) return '';
    const styleObj = {};
    styleVal.split(';').forEach(pair => {
      if (!pair.trim()) return;
      const colonIndex = pair.indexOf(':');
      if (colonIndex === -1) return;
      const key = pair.substring(0, colonIndex).trim();
      const val = pair.substring(colonIndex + 1).trim();
      
      let propName = key;
      if (!propName.startsWith('--')) {
        propName = propName.replace(/-([a-z])/g, g => g[1].toUpperCase());
      }
      styleObj[propName] = val;
    });
    return `style={${JSON.stringify(styleObj)} as React.CSSProperties}`;
  });
}

bodyContent = convertStyleAttribute(bodyContent);

// 9. Replace HTML attributes with React equivalents
const replacements = [
  { regex: /class=/g, replacement: 'className=' },
  { regex: /for=/g, replacement: 'htmlFor=' },
  { regex: /srcset=/g, replacement: 'srcSet=' },
  { regex: /autocomplete=/g, replacement: 'autoComplete=' },
  { regex: /autoplay/g, replacement: 'autoPlay' },
  { regex: /tabindex=/g, replacement: 'tabIndex=' },
  { regex: /fill-rule=/g, replacement: 'fillRule=' },
  { regex: /clip-rule=/g, replacement: 'clipRule=' },
  { regex: /stroke-width=/g, replacement: 'strokeWidth=' },
  { regex: /stroke-linecap=/g, replacement: 'strokeLinecap=' },
  { regex: /stroke-linejoin=/g, replacement: 'strokeLinejoin=' },
  { regex: /stroke-miterlimit=/g, replacement: 'strokeMiterlimit=' },
  { regex: /crossorigin/g, replacement: 'crossOrigin' },
  { regex: /colspan=/g, replacement: 'colSpan=' },
  { regex: /rowspan=/g, replacement: 'rowSpan=' },
  { regex: /readonly/g, replacement: 'readOnly' },
  { regex: /viewbox=/g, replacement: 'viewBox=' },
  { regex: /xml:space=/g, replacement: 'xmlSpace=' }
];

replacements.forEach(rep => {
  bodyContent = bodyContent.replace(rep.regex, rep.replacement);
});

// 10. Handle boolean attributes (disabled, checked, required)
bodyContent = bodyContent.replace(/disabled="disabled"/gi, 'disabled={true}');
bodyContent = bodyContent.replace(/checked="checked"/gi, 'defaultChecked={true}');
bodyContent = bodyContent.replace(/required="required"/gi, 'required={true}');

bodyContent = bodyContent.replace(/\s+disabled(?=[\s>])/g, ' disabled={true}');
bodyContent = bodyContent.replace(/\s+checked(?=[\s>])/g, ' defaultChecked={true}');
bodyContent = bodyContent.replace(/\s+required(?=[\s>])/g, ' required={true}');

// 11. Handle tabIndex typing (must be integer, not string)
bodyContent = bodyContent.replace(/tabIndex="(-?\d+)"/g, 'tabIndex={$1}');

// 12. Ensure unclosed HTML tags are closed properly
const unclosedTags = ['img', 'input', 'br', 'hr', 'source', 'link', 'meta'];
unclosedTags.forEach(tag => {
  const regex = new RegExp(`<(${tag}\\b[^>]*)(?<!/)>`, 'gi');
  bodyContent = bodyContent.replace(regex, `<$1 />`);
});

// 13. React component wrapper
const reactComponent = `"use client";

import { useEffect } from "react";
import React from "react";

export default function Home() {
  useEffect(() => {
    // Dynamic JS integrations
    if (typeof window !== "undefined") {
      const event = new CustomEvent("load");
      window.dispatchEvent(event);
    }
  }, []);

  return (
    <>
      ${bodyContent}
    </>
  );
}
`;

fs.writeFileSync(destPagePath, reactComponent, 'utf8');
console.log("Successfully converted index.html body to JSX inside src/app/page.tsx");
