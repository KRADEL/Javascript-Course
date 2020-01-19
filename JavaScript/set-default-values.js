const blog = {
    title: "My great post",
    // summary: "Summary of the post"
}

// SUMMARY: WIll override the default is summary has a value, if not the default will be used
const openGraphMetadata = ({title, summary = 'A Daily Smarty Post'}) => {
    console.log(`
        og-title=${title}
        og-description=${summary}
    `);
}

openGraphMetadata(blog);

// const user = {
//     username: 'Ryley',
//     status: 'away'
// }

// const loginEvent = ({username}) => {
//     return (`${username} is active`);
// }

// console.log(loginEvent(user));