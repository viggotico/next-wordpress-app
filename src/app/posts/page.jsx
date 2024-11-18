import styles from './posts.module.css';

export default async function Posts({}) {
    const res = await fetch('https://headless.cederdorff.dk/wp-json/wp/v2/posts?acf_format=standard');
    const posts = await res.json();
    const postsArr = Object.entries(posts);
    return <div className={styles.grid}>
        {
            postsArr.map(entry => {
                const [key, data] = entry;
                return <div className={styles.gridItemWrapper} key={key}>
                    <div className={styles.gridItem}>
                        <img src={data.acf.image} />
                    </div>
                    <h2>{data.title.rendered}</h2>
                </div>;
            })
        }
    </div>;
}