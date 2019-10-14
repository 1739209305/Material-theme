import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatChipInputEvent } from '@angular/material';

export interface Person {
  name: string;
}
@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent{

 visible = true;
  color = '';
  selectable = true;
  removable = true;
  addOnBlur = true;
  message = '';

  people: Person[] = [
    { name: 'Kara' },
    { name: 'Jeremy' },
    { name: 'Topher' },
    { name: 'Elad' },
    { name: 'Kristiyan' },
    { name: 'Paul' },
  ];

  availableColors = [
    { name: 'none', color: '' },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' },
  ];

  constructor(public snackBar: MatSnackBar) {}

  displayMessage(message: string): void {
    this.message = message;
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our person
    if ((value || '').trim()) {
      const name = value.trim();
      this.people.push({ name });
      this.snackBar.open(`${name} added`, '', { duration: 2000 });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(person: Person): void {
    const index = this.people.indexOf(person);

    if (index >= 0) {
      this.people.splice(index, 1);
      this.snackBar.open(`${person.name} deleted`, '', { duration: 2000 });
    }
  }

  toggleVisible(): void {
    this.visible = false;
  }

}
