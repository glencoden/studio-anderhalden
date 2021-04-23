export function isObject(val: any): Boolean {
    return val !== null && typeof val !== 'function' && typeof val === 'object' && !Array.isArray(val);
}

export function isHexColor(val: any): Boolean {
    return /#[0-9A-Fa-f]{3}/.test(val) || /#[0-9A-Fa-f]{6}/.test(val);
}