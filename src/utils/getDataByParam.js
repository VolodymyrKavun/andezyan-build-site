export const getDataByParam = (parameter, obj) => {
    const data = obj[parameter];

    if (data) {
        return data;
    }

    return notFound();
}