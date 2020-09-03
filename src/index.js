'use strict'

function generateList(array){
    const $ul = document.createElement("ul");
    array.forEach(element => { 
        if(Array.isArray(element)) {
            const innerArray = element;
            const outerLi = document.createElement("li");
            const innerUl = document.createElement("ul");
            innerArray.forEach(inElement => {
                const innerLi = document.createElement("li");
                innerLi.textContent = inElement;
                innerUl.append(innerLi);
            })
            outerLi.append(innerUl);
            $ul.append(outerLi); 
        } else {
            const $li = document.createElement("li");
            $li.textContent = element;
            $ul.append($li);
        }
    })
    // for (let i = 0; i <= array.length - 1; i++ ) {
    //     if (Array.isArray(array[i])) {
    //         const innerArray = array[i];
    //         const outerLi = document.createElement("li");
    //         const innerUl = document.createElement("ul");
                
    //         for (let j = 0; j <= innerArray.length -1; j++) {
    //                 const innerLi = document.createElement("li");
    //                 innerLi.textContent = innerArray[j];
    //                 innerUl.append(innerLi);
    //             }
    //             outerLi.append(innerUl);
    //             $ul.append(outerLi); 
    //     } else {
    //     const $li = document.createElement("li");
    //     $li.textContent = array[i];
    //     $ul.append($li);
    //     }
    // }
    document.body.append($ul);
}

let arr = [1, 2, [2.1, 2.2, 2.3], 3, 4, 5, [5.1, 5.2]];
generateList(arr);




const $table = document.createElement("table");

for(let i = 0; i <= 9; i++) {
    const $tr = document.createElement("tr");
    $table.append($tr);

    for(let j = 1; j <= 10; j++) {
        const $td = document.createElement("td");
        $td.textContent = i*10 + j;
        $tr.append($td);
           
    }
}
document.body.append($table);


