const env_container = Object.create(null);

Object.defineProperty(env_container, 'set', {
    writable: false,
    value: (key, value, modifiable) => {
        const existing = env_container[key];
        if (existing && existing.locked) {
            return;
        }
        Object.defineProperty(env_container, key, {
            value,
            writable: modifiable,
        });
    },
});

Object.defineProperty(env_container, 'get', {
    writable: false,
    value: (key) => {
        return env_container[key]
    }
});

module.exports = env_container;
// ES6
module.exports.default = env_container;