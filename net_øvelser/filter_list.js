function filter_list(l) {
    return l.filter(element => typeof element === "number");
}

filter_list([1,2,'aasf','1','123',123]);