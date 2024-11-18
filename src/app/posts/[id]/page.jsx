export default async function Post({}) {
    const res = await fetch('https://headless.cederdorff.dk/wp-json/wp/v2/posts?acf_format=standard');
    const post = await res.json();
    console.log('post:', post);
    return <></>;
}