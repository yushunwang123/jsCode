Function.prototype.apply1 = function(context, arr) {
    context = context ? Object(context) : window;
    context.fn = this;

    let result = arr ? context.fn(...arr) : context.fn();

    delete context.fn;

    return result;
}