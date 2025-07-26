//main.js must be loaded as a module in the index.html file
export default function indexHtmlTransformer(indexHtml) {
    const scriptTag = '<script src="/static/js/main.js" type="module"></script>';
    const bodyCloseIndex = indexHtml.indexOf('</body>');
    if (bodyCloseIndex !== -1) {
        indexHtml = indexHtml.slice(0, bodyCloseIndex) + scriptTag + '\n' + indexHtml.slice(bodyCloseIndex);
    }
    return indexHtml;
}
