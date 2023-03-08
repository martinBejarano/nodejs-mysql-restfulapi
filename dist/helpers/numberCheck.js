export default function numberCheck(num) {
    let res = parseInt(num);
    if (!res || typeof res !== 'number') {
        throw new Error();
    }
    return 2;
}
