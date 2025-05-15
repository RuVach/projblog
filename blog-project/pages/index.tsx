
import Link from 'next/link';
import articles from '../data/articles.json';

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Список статей</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link href={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
