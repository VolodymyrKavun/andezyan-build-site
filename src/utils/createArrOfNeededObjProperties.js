export const createArrOfNeededObjProperties = (obj, neededArray) => {
    // входяшщие данные - исходный объект и массив желаемых параметров объекта
    // получает массив параметров объекта
    const keys = Object.keys(obj);

    const filteredArr = [];
    // фильтрует параметры объекта
    keys.filter(item => {
        // выход, если текущего элемента нет в массиве желаемых параметров
        if (!neededArray.find(el => el === item)) {
            return;
        }
        // в остальных случаях - добавляет данные текущего объекта в массив
        filteredArr.push(obj[item]);

    });

    return filteredArr;
}