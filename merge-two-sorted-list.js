


function mergeTwoSortedList(list1, list2) {

    let newList = []
    let i = 0
    let j = 0

    while (i < list1.length && j < list2.length) {

        if (list1[i] < list2[j]) {
            newList.push(list1[i])
            i++
        } else {
            newList.push(list2[j])
            j++
        }

    }


    if (i < list1.length) {
        for (let k = i; k < list1.length; k++) {
            newList.push(list1[k])
        }
    }

    if (j < list2.length) {
        for (let k = j; k < list2.length; k++) {
            newList.push(list2[k])
        }
    }

        return newList



}

console.log(mergeTwoSortedList([1, 2, 3], [3, 4, 5, 6]));

