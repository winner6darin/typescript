var notSure = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
var prettySure = 4;
prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
//# sourceMappingURL=main.js.map