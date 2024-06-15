module.exports = (targetOptions, indexHtml) => {
  //we need this because ng build is not generating the correct paths for the static files in index.html
  const scriptsToTransform = ['runtime', 'main'];

  scriptsToTransform.forEach(scriptName => {
    const scriptTag = `src="${scriptName}`;
    const index = indexHtml.indexOf(scriptTag);
    if (index !== -1) {
      const config = `/static/js/`;
      indexHtml = indexHtml.slice(0, index + 5) + config + indexHtml.slice(index + 5);
    }
  });

  const styleRegex = /href="..\/css\/styles\.[a-f0-9]{16}\.css"/g;
  indexHtml = indexHtml.replace(styleRegex, match => {
    return match.replace('../css/', '/static/css/');
  });

  return indexHtml;
};
