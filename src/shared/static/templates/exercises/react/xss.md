&nbsp;
&nbsp;
&nbsp;

```jsx
/**
    Ниже приведён упрощённый компонент, который получает от API список комментариев и отображает их на странице.
    Каждый комментарий — это объект с полями author и content, где content — HTML-строка, введённая пользователем

    1. Опишите, какие уязвимости безопасности содержит этот код.
    2. Объясните, как эти уязвимости могут быть использованы злоумышленниками.
    3. Предложите безопасный способ отобразить комментарии, сохранив при этом форматирование текста (например, переносы строк, ссылки).
*/

function CommentsList({ comments }) {
    return (
        <div>
            {comments.map((c, i) => (
                <div key={i} className="comment">
                    <b>{c.author}</b>:
                    <div dangerouslySetInnerHTML={{ __html: c.content }} />
                </div>
            ))}
        </div>
    );
}
```

&nbsp;
&nbsp;
&nbsp;

---

&nbsp;
&nbsp;
&nbsp;

```jsx
/** Ответ */

import DOMPurify from "dompurify";

function CommentsList({ comments }) {
    return (
        <div>
            {comments.map((c, i) => {
                const cleanHTML = DOMPurify.sanitize(c.content, {
                    ALLOWED_TAGS: [
                        "b",
                        "i",
                        "em",
                        "strong",
                        "a",
                        "p",
                        "br",
                        "ul",
                        "li",
                    ],
                    ALLOWED_ATTR: ["href", "target", "rel"],
                });

                return (
                    <div key={i} className="comment">
                        <b>{c.author}</b>:
                        <div dangerouslySetInnerHTML={{ __html: cleanHTML }} />
                    </div>
                );
            })}
        </div>
    );
}
```

&nbsp;
&nbsp;
&nbsp;
