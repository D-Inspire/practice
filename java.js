const input = document.querySelector('input')
const Btn = document.querySelector('button')
const cont = document.querySelector('.box')
const table = document.querySelector('#table')
const del = document.querySelector('span')
const num = document.querySelector('#number')


let arr  = [
    '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quo facere dolores, voluptas tempora cumque neque rem ullam consectetur dolore amet. Libero rerum autem officia cupiditate illum id quod corporis veritatis, iusto ab. Doloribus distinctio voluptatum laborum! Ipsam officia qui iste optio deserunt. Animi perferendis officiis, modi nisi, adipisci quas sequi hic cum suscipit doloribus temporibus corporis fuga placeat illum magni quidem eligendi deserunt quo alias enim! Suscipit saepe iusto nobis quia temporibus maiores accusantium sit magnam dignissimos deserunt, animi debitis qui cupiditate voluptates. Quo perspiciatis quod corporis hic nostrum nulla ea unde ratione, illum doloremque voluptatem. Laudantium, libero ipsa!',

    '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quo facere dolores, voluptas tempora cumque neque rem ullam consectetur dolore amet. Libero rerum autem officia cupiditate illum id quod corporis veritatis, iusto ab. Doloribus distinctio voluptatum laborum! Ipsam officia qui iste optio deserunt. Animi perferendis officiis, modi nisi, adipisci quas sequi hic cum suscipit doloribus temporibus corporis fuga placeat illum magni quidem eligendi deserunt quo alias enim! Suscipit saepe iusto nobis quia temporibus maiores accusantium sit magnam dignissimos deserunt, animi debitis qui cupiditate voluptates. Quo perspiciatis quod corporis hic nostrum nulla ea unde ratione, illum doloremque voluptatem. Laudantium, libero ipsa!',

    '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quo facere dolores, voluptas tempora cumque neque rem ullam consectetur dolore amet. Libero rerum autem officia cupiditate illum id quod corporis veritatis, iusto ab. Doloribus distinctio voluptatum laborum! Ipsam officia qui iste optio deserunt. Animi perferendis officiis, modi nisi, adipisci quas sequi hic cum suscipit doloribus temporibus corporis fuga placeat illum magni quidem eligendi deserunt quo alias enim! Suscipit saepe iusto nobis quia temporibus maiores accusantium sit magnam dignissimos deserunt, animi debitis qui cupiditate voluptates. Quo perspiciatis quod corporis hic nostrum nulla ea unde ratione, illum doloremque voluptatem. Laudantium, libero ipsa!',

    '4 Lorem ipsum dolor sit amet consectetur adipisicing',

    '5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quo facere dolores, voluptas tempora cumque neque rem ullam consectetur dolore amet. Libero rerum autem officia cupiditate illum id quod corporis veritatis, iusto ab. Doloribus distinctio voluptatum laborum! Ipsam officia qui iste optio deserunt. Animi perferendis officiis, modi nisi, adipisci quas sequi hic cum suscipit doloribus temporibus corporis fuga placeat illum magni quidem eligendi deserunt quo alias enim! Suscipit saepe iusto nobis quia temporibus maiores accusantium sit magnam dignissimos deserunt, animi debitis qui cupiditate voluptates. Quo perspiciatis quod corporis hic nostrum nulla ea unde ratione, illum doloremque voluptatem. Laudantium, libero ipsa!',

    '6 me 83f8ff8 jf3u39f j3f3 uh3g3u9f3f9[9[q9 upigiff',

    '7 Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quo facere dolores, voluptas tempora cumque neque rem ullam consectetur dolore amet. Libero rerum autem officia cupiditate illum id quod corporis veritatis, iusto ab. Doloribus distinctio voluptatum laborum! Ipsam officia qui iste optio deserunt. Animi perferendis officiis, modi nisi, adipisci quas sequi hic cum suscipit doloribus temporibus corporis fuga placeat illum magni quidem eligendi deserunt quo alias enim! Suscipit saepe iusto nobis quia temporibus maiores accusantium sit magnam dignissimos deserunt, animi debitis qui cupiditate voluptates. Quo perspiciatis quod corporis hic nostrum nulla ea unde ratione, illum doloremque voluptatem. Laudantium, libero ipsa!'
]


// cont.innerHTML = arr.map((data,i)=>{
//     return (
//         `<div class="messageBox">
//             <!-- helps to display delet icon -->
//             <input type="checkbox">

//             <div class="message">
//                 <label for="display${i}"><p class="miniInfo">${data.slice(0,70)}${data.length>70? '...' : ''}</p></label>

//                 <!-- helps todisplay andhide main message -->
//                 <input type="checkbox" id="display${i}">

//                 <p class="main">${data}</p>
//             </div>
            
//         </div>`
//     )
// }).join('')

// const allInput = document.querySelectorAll('.messageBox>input')
// console.log(allInput);


// del.onclick = ()=>{
//     allInput.forEach((data,ind)=>{
//         if(data.checked){
//             data.parentElement.remove();
            
//         }
//         num.innerHTML = arr.length
//         return
    
//     })
//     // num.innerHTML = allInput.length
// }

// // const cont = document.querySelector('.box')

// // cont.innerHTML = (`<div>
    
// //     ${arr.map((data,index)=>(
// //         `<div>
// //         <input type="checkbox">
// //         <td>${data}</td>
// //         </div>`
// //     )).join('')}
// //     </div>`)


// // window.location.reload()

// let allCheckBox = document.querySelectorAll('input')

// // span.onclick = ()=>{
// //     allCheckBox.forEach((data,index)=>{
// //         if(data.checked){
// //             console.log(index,data.checked)
// //             data.parentElement.remove()
// //         }
// //     })

// // }



const fetchData = JSON.parse( localStorage.getItem('sign_up'))
console.log(fetchData);
