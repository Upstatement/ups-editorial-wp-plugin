const unescape = str => {
  const map = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    //eslint-disable-next-line
    '&#39;': "'",
  };
  return str.replace(/&(?:amp|lt|gt|quot|#39);/g, m => map[m]);
};

export default unescape;
