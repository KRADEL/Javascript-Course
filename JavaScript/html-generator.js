const headingGenerator = (title, hTag) => {
    return `<h${hTag}>${title}</h${hTag}>`;
}


console.log(headingGenerator('Hi There!', 2));
console.log(headingGenerator('Wutsup!', 4));
