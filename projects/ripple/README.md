# ngx-ripple

Add ripple animations to your buttons in Angular projects.

## How to use:

Install ngx-ripple from npm

```
npm install ngx-ripple
```

Import `RippleModule` in your ngModule

```
//...
@NgModule({
    bootstrap: [ /* ... */ ],
    declarations: [ /* ... */ ],
    imports: [
        /* ... */,
        RippleModule
    ]
})
export class AppModule { /* ... */ }
```

Add `ripple` to your button

```
<button ripple>Test button</button>
```
