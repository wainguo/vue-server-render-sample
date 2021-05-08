export function fetchItem (id) {
    return Promise.resolve({id:id, title: 'This is item title', content: 'hello world'})
}