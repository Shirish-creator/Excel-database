

import * as XLSX from './node_modules/xlsx/xlsx.mjs';

// const url="https://docs.google.com/spreadsheets/d/1sBqapbuf1M_ZJheeXMR-wnixg_TprlzytC-CrcIaLyY/edit#gid=0"
// const output=document.querySelector('.show');

// var data=fetch(url)



// console.log(data)




let table = document.querySelector(".show");
        (
            async() => {
                let workbook = XLSX.read(await (await fetch("./sample.xlsx")).arrayBuffer());
                let worksheetname = workbook.SheetNames[0];
                const worksheet=workbook.Sheets[worksheetname]
                const data=XLSX.utils.sheet_to_json(worksheet);
                

                for (let n=0; n<=n ;n++){
                    // var identity = data[n].ProjectDescription;
                    // console.log( identity)

                    table.innerHTML +="<div class='blue' style='background-color:blue;padding:1rem'>" + "<h1>"+data[n].ProjectDescription
                    "</h1>"+"</div>"
                }        
            }
        )()