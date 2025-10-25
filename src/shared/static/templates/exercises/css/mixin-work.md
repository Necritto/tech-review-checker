
```scss
/** Объясните, что делает данный миксин */

@mixin hover {
    &:hover {
        @media (hover: hover) and (pointer: fine) {
            @content;
        }
    }
}
```
