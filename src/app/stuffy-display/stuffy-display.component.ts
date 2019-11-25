import { Component, OnInit } from '@angular/core';
import { Stuffy } from '../model/stuffy.class';

@Component({
  selector: 'app-stuffy-display',
  templateUrl: './stuffy-display.component.html',
  styleUrls: ['./stuffy-display.component.css']


})
export class StuffyDisplayComponent implements OnInit {

id: number;
type: string;
color: string;
size: string;
limbs: number;

display: boolean = false;
getDisplay: boolean = false;

stuffies: Stuffy[] = [];
getStuffies: Stuffy[] = [];

netImage:any = "../assets/images/stuffimage1.png";

addStuffy(): void {
  
  if (this.id!=null && this.type!=null && this.color!=null && this.size!=null && this.limbs!=null) {

    this.getDisplay = false;
    this.display = true;

    let s: Stuffy = new Stuffy(this.id,this.type,this.color,this.size,this.limbs);
 
    this.stuffies.push(s);
  } else {
    alert('Achtung! Sie müssen alle Informationen korrekt ausfüllen')
  }
  
  
}


deleteStuffy(): void {

  this.getDisplay = false;
  this.display = true;


  let s: Stuffy = new Stuffy(this.id,this.type,this.color,this.size,this.limbs);
  
    this.stuffies.forEach( (item, index) => {
      if(item.id === s.id) this.stuffies.splice(index,1);
    });

}

getStuffy(): void {

  this.display = false;
  this.getDisplay = true;
 
  if (this.id!=null) {

    let s: Stuffy = new Stuffy(this.id,this.type,this.color,this.size,this.limbs);
 
     this.getStuffies =  this.stuffies.filter(function(stuff) {
      return stuff.id === s.id;
    });

    if(this.getStuffies.length==0){
      alert('the ID you entered is not a stuffy')
      this.getDisplay = false;
    }

    console.log(this.getStuffies);
   
  } else {
    alert('You must enter the ID field')
  }
 
  
}


clearStuffy(): void {

  this.id = null;
  this.type = null;
  this.color=null;
  this.size =null;
  this.limbs = null;
  

  
}




  constructor() {

   }

  ngOnInit() {
  }

}
