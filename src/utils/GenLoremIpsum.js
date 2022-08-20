export function genRandomArticle() {
  const paras = LoremIpsum.split("\n\n");

  let shuffled = paras
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

  return shuffled.join("\n\n");
}