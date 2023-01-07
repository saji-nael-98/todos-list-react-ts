class Todo {
  id: number;
  text: string;
  constructor(text: string) {
    this.text = text;
    this.id = Math.random()*1000;
  }
}
export default Todo;
