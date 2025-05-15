
import { useRouter } from 'next/router';
import articles from '../../data/articles.json';

export default function Article() {
  const router = useRouter();
  const { id } = router.query;
  const article = articles.find((a) => a.id === id);

  if (!article) return <p>Стаття не знайдена</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
}
