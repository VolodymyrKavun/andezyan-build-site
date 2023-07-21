export const createArrOfNeededObjProperties = (obj, neededArray) => {
    // требуются следующие входные данные - исходный объект и массив желаемых параметров объекта. Последовательность возвращаемых  данных соответствует последовательности желаемых параметров в массиве neededArray

    // получает массив параметров объекта
    const keys = Object.keys(obj);

    const filteredArr = [];
    // фильтрует желаемые параметры 
    neededArray.filter(item => {
        // выход, если текущего элемента нет в массиве параметров объекта
        if (!keys.find(el => el === item)) {
            return;
        }
        // в остальных случаях - добавляет данные текущего объекта в массив
        filteredArr.push(obj[item]);
    });

    return filteredArr;
}