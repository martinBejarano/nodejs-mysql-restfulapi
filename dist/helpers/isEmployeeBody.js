export default function isEmployee(body, exact) {
    if (exact) {
        // Has the exact object anatomy
        let res = 0;
        Object.keys(body).forEach((key) => {
            if (key === 'name' && typeof key === 'string') {
                res++;
            }
            if (key === 'salary' && typeof key === 'number') {
                res++;
            }
        });
        if (res < 2) {
            return false;
        }
        return true;
    }
    // // Has at least one of any property
    // if (body.hasOwnProperty('name') && typeof body.name === 'string') { return true; }
    // if (body.hasOwnProperty('salary') && typeof body.salary === 'number') { return true; }
    let properties = [];
    Object.keys(body).forEach((key) => {
        if (key === 'name' && typeof key === 'string') {
            properties.push(key);
        }
        if (key === 'salary' && typeof key === 'number') {
            properties.push(key);
        }
    });
    if (properties.length <= 0) {
        return false;
    }
    return properties;
}
