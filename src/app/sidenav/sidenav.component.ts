import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    
    //Criando o collapse na unha.
    const collapse: NodeListOf<Element> = <NodeListOf<Element>>(document.querySelectorAll('.snav-collapse'));
    for (let i = 0; i < collapse.length; i++) {
      collapse[i].addEventListener('click', function () {
        collapse[i].classList.toggle('active');
        const content: any = collapse[i].parentNode?.nextSibling;
        console.log(typeof(content))
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    }

  }
}