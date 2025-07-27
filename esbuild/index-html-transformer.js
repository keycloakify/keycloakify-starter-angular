export default function indexHtmlTransformer(indexHtml) {
    let transformedHtml = indexHtml;

    // main.js must be loaded as a module in the index.html file
    const scriptTag = '<script src="/static/js/main.js" type="module"></script>';
    const bodyCloseIndex = transformedHtml.indexOf('</body>');
    if (bodyCloseIndex !== -1) {
        transformedHtml = transformedHtml.slice(0, bodyCloseIndex) + scriptTag + '\n' + transformedHtml.slice(bodyCloseIndex);
    }
    // Update script paths to be absolute
    transformedHtml = transformedHtml.replace(/(href|src)="(?!(?:\/|#|\/\/|[a-zA-Z]+:))([^"]*)"/g, (match, attrName, attrValue) => {
        if (attrValue === '') {
            return match;
        }
        return `${attrName}="/${attrValue}"`;
    });

    return transformedHtml;
}
