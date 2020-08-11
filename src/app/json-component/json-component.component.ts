import { Component, OnInit } from '@angular/core';
// import { bindCallback } from 'rxjs';
// import { triggerAsyncId } from 'async_hooks';

@Component({
  selector: 'app-json-component',
  templateUrl: './json-component.component.html',
  styleUrls: ['./json-component.component.scss'],
})
export class JsonComponentComponent implements OnInit {
  json = {
    nodeOne: [
      { shikharJindal: '06/07/2020' },
      { agarwalShikhar: 1231234567890 },
      {
        elementEight: [{ qUip: '06/07/2020' }, { sDip: 4567890 }],
      },
    ],
    nodeTwo: '05/06/2020',
    nodeThree: 777,
    nodeFour: [
      { elementOne: 'B Street' },
      { elementTwo: 'City' },
      { elementThree: 'Area - 591323' },
      {
        elementFour: [
          { elementFive: '06/07/2020' },
          { elementSix: 123 },
          {
            elementSeven: [
              { qUp: '06/07/2020' },
              { qDown: 12312345 },
            ],
          },
        ],
      },
    ],
    nodeFive: 'shubham Jindal',
  };

  constructor() {}

  ngOnInit(): void {
    this.populate();
  } 

  changeCase = (key) => {
    var newkey = '';
    for (let i = 1; i < key.length; i++) {
      if (key.charCodeAt(i) >= 65 && key.charCodeAt(i) <= 90) {
        newkey = newkey + ' ' + key[i];
      } else newkey = newkey + key[i];
    }
    return key[0].toUpperCase() + newkey;
  };

  createTable(val, id?) {
    if (document.getElementById(this.generateID(val)) === null) {
      var data = document.getElementById('data');
      let table = document.createElement('table');
      table.setAttribute('id', id);
      let tr = document.createElement('tr');
      val.forEach((item) => {
        for (const key in item) {
          let th = document.createElement('th');
          let heading = document.createTextNode(this.changeCase(key));
          th.appendChild(heading);
          tr.appendChild(th);
          table.appendChild(tr);
        }
      });

      tr = document.createElement('tr');
      val.forEach((item) => {
        for (const key in item) {
          let td = document.createElement('td');
          if (typeof item[key] === 'string' || typeof item[key] === 'number') {
            td.innerHTML =
              '<input type=' +
              this.getInputType(typeof item[key], item[key]) +
              '>';
          } else if (Array.isArray(item[key])) {
            let btn = document.createElement('button');
            btn.textContent = 'Show';
            btn.onclick = () => {
              this.createTable(item[key], this.generateID(item[key]));
            };
            td.appendChild(btn);
          }
          tr.appendChild(td);
          table.appendChild(tr);
        }
      });
      data.appendChild(table);
    }
  }

  populate() {
    var data = document.getElementById('data');
    for (const key in this.json) {
      var newDiv = document.createElement('div');
      if (
        typeof this.json[key] === 'string' ||
        typeof this.json[key] === 'number'
      ) {
        let spanKey = document.createElement('span');
        spanKey.innerHTML = this.changeCase(key) + ' : ';
        let spanVal = document.createElement('input');
        spanVal.type = this.getInputType(typeof this.json[key], this.json[key]);
        newDiv.appendChild(spanKey);
        newDiv.appendChild(spanVal);
        data.appendChild(newDiv);
      } else if (Array.isArray(this.json[key])) {
        this.createTable(this.json[key]);
      }
    }
  }

  generateID(arr) {
    let str = '';
    arr.forEach((element) => {
      for (const key in element) {
        str += key;
      }
    });
    return str;
  }

  getInputType(type, value) {
    if (type === 'string' && !Number.isNaN(Date.parse(value))) {
      return 'date';
    } else if (type === 'string') {
      return 'text';
    }
    return 'number';
  }
}
