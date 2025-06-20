# ❓ Как влияют stacking context на события кликов и фокус?

---

## Влияние stacking context на события кликов

- Слой (z-index) и порядок stacking context определяют, какой элемент визуально сверху и, следовательно, получает первыми события мыши.
- Элемент с более высоким `z-index` в пределах своего контекста **перекрывает** элементы с меньшим `z-index`.
- Если элементы находятся в разных локальных stacking context, то сравнение их `z-index` происходит на уровне этих контекстов, где контекст с более высоким уровнем в DOM может перекрывать нижний, независимо от `z-index` внутри локальных контекстов.
- **Важно:** элементы, полностью перекрытые другими (визуально сверху), не получают события клика, так как событие "захватывается" элементом сверху.

---

## Влияние stacking context на фокус

- Порядок фокуса по клавиатуре определяется табиндексом (`tabindex`) и порядком в DOM, а не напрямую `z-index`.
- Однако, элементы с очень высоким `z-index` и локальными stacking context могут визуально перекрывать другие элементы, что создаёт путаницу с доступностью.
- Некорректное управление stacking context может привести к тому, что видимый элемент не может быть сфокусирован (например, элемент с высоким `z-index` скрывает элемент с tabindex, но не является доступным для фокуса).

---

## Итог

- **События кликов**: обработка событий идёт с учётом визуального порядка, который задают stacking context и `z-index`.
- **Фокус**: определяется DOM-порядком и tabindex, не зависит от stacking context напрямую, но визуальное перекрытие может мешать пользовательскому взаимодействию.
- Для корректной работы UI важно синхронизировать логику визуального слоя (stacking context) с логикой доступности (фокуса и навигации).

---
