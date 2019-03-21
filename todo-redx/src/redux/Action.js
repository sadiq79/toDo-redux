export function add(text){
    return {
        type:"ADD",
        payload:text,
    }
}
export function deleteItem(id){
    return {
        type: "DELETE",
        payload:'',
    }
}