import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pyramid',
  templateUrl: './pyramid.component.html',
  styleUrls: ['./pyramid.component.css']
})
export class PyramidComponent implements OnInit {

 
  constructor() { }
  
  ngOnInit(): void {}
  result(){
  
    let a = 2
    let  b = 3
    let c = 4
    let d = 5
    
    let k =0
    // step1
    for(let i=1; i<=a; i++){
      for(let j=i; j<=10; j++){
        document.write("&nbsp"+"&nbsp")
      }
      for(let k=1; k <i; k++){
        document.write("* ")
      }
      for(let k=1; k <=i; k++){
        document.write("* ")
      }
      document.write("<br>")
    }
    //step 2
    for(let i=1; i<=b; i++){
      for(let j=i; j<=10; j++){
        document.write("&nbsp"+"&nbsp")
      }
      for(let k=1; k <i; k++){
        document.write("* ")
      }
      for(let k=1; k <=i; k++){
        document.write("* ")
      }
      document.write("<br>")
    }
    //step3
    for(let i=1; i<=c; i++){
      for(let j=i; j<=10; j++){
        document.write("&nbsp"+"&nbsp")
      }
      for(let k=1; k <i; k++){
        document.write("* ")
      }
      for(let k=1; k <=i; k++){
        document.write("* ")
      }
      document.write("<br>")
    }
    //step4
    for(let i=1; i<=d; i++){
      for(let j=i; j<=10; j++){
        document.write("&nbsp"+"&nbsp")
      }
      for(let k=1; k <i; k++){
        document.write("* ")
      }
      for(let k=1; k <=i; k++){
        document.write("* ")
      }
      document.write("<br>")
    }

    for(let i=1; i<=6; i++){
      for(let j=i; j<=10; j++){
        document.write("&nbsp"+"&nbsp")
      }
      for(let k=1; k <i; k++){
        document.write("* ")
      }
      for(let k=1; k <=i; k++){
        document.write("* ")
      }
      document.write("<br>")
    }

    for(let i=1; i<=7; i++){
      for(let j=i; j<=10; j++){
        document.write("&nbsp"+"&nbsp")
      }
      for(let k=1; k <i; k++){
        document.write("* ")
      }
      for(let k=1; k <=i; k++){
        document.write("* ")
      }
      document.write("<br>")
    }

    for(let i=1; i<=8; i++){
      for(let j=i; j<=10; j++){
        document.write("&nbsp"+"&nbsp")
      }
      for(let k=1; k <i; k++){
        document.write("* ")
      }
      for(let k=1; k <=i; k++){
        document.write("* ")
      }
      document.write("<br>")
    }
    for(let i=1; i<=9; i++){
      for(let j=i; j<=10; j++){
        document.write("&nbsp"+"&nbsp")
      }
      for(let k=1; k <i; k++){
        document.write("* ")
      }
      for(let k=1; k <=i; k++){
        document.write("* ")
      }
      document.write("<br>")
    }

    for(let i=1; i<=10; i++){
      for(let j=i; j<=10; j++){
        document.write("&nbsp"+"&nbsp")
      }
      for(let k=1; k <i; k++){
        document.write("* ")
      }
      for(let k=1; k <=i; k++){
        document.write("* ")
      }
      document.write("<br>")
    }
    //step
    for(let i=1; i<=1; i++){
      for(let j=i; j<=10; j++){
        document.write("&nbsp"+"&nbsp")
      }
      for(let k=0; k < a*i-1; k++){
        document.write("|"+"|")
      }
      document.write("<br>")
    }
    //step
    for(let i=1; i<=1; i++){
      for(let j=i; j<=5; j++){
        document.write("&nbsp"+"&nbsp")
      }
      for(let k=0; k < 5*i-1; k++){
          document.write("=")
    }
    for(let k=0; k < a*i-1; k++){
      document.write("V")
    }
    for(let k=0; k < 5*i-1; k++){
      document.write("=")
}
    document.write("<br>")
    }
  }
}



    // for(let i=1; i<=n; i++)
    // {
    //   for(let j=n; j>i; j--){
    //     document.write("&nbsp")    
    //  }
    //   for(let k=0; k < i*2 -1 ;k++){
    //     if(k === 0 || k===2*i-2){
    //     document.write("*"+"");
    //     }
    //     else{
    //       document.write(" ");
    //     }
    //   }
    //   document.write("<br>")
    // }
    //   for (let i =1; i<=n-1; i++){

    //   for(let j=0; j<i; j++){
    //     document.write("&nbsp")
    //   }
    //   for (let k =(n-i)*2-1; k >0; k--){
    //     if(k === 1 || k ===(n-i)*2-1){
    //     document.write("*")
    //     }
    //     else{
    //       document.write(" ");
    //     }
    //   }
    // }
      
      
    //   document.write("<br>")


  
  
