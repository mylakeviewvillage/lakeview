import React from 'react';

const cleanHTML = (html) => {
    if (!html) return ""

    //fix '~' in links in HTML
    return html.replace(/href="~\//gi, 'href="/')
}

const renderHTML = (html) => {
    if (!html) return { __html: "" };
    return { __html: cleanHTML(html) };
}

const RichTextArea = ({ html }) => {
    // Take HTML from the HTML prop, send it for cleansing, and return it through innerHTML
    return (
        <div dangerouslySetInnerHTML={renderHTML(html)} className="rich-text-area" />
    );

}

export default RichTextArea