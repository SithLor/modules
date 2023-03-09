//decortor that get the time when class is instanciated then log it to console if external variable is true
export default function TimeLoaded() {
    return function (target: any) {
        const original = target;
        const f: any = function (...args: any[]) {
            console.log("New: " + original.name);
            return new original(...args);
        }
        f.prototype = original.prototype;
        return f;
    }
}