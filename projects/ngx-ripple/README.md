# ngx-ripple

Add ripple animations to your buttons in Angular projects.

## How to use:

Install ngx-ripple from npm

```
npm install ngx-ripple-effect
```

Import `NgxRippleModule` in your ngModule

```
import { NgxRippleModule } from 'ngx-ripple-effect';

//...
@NgModule({
    bootstrap: [ /* ... */ ],
    declarations: [ /* ... */ ],
    imports: [
        /* ... */,
        NgxRippleModule
    ]
})
export class AppModule { /* ... */ }
```

Add `ripple` to your button

```
<button ripple>Test button</button>
```
