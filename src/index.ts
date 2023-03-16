// import { Todo } from "./model";
interface Todo{
  id:number
  todo: string
  isdone:boolean
}
const input = document.querySelector<HTMLInputElement>("#myTodo")!;
const btn = document.querySelector<HTMLButtonElement>("#addTodo")!;
const ul = document.querySelector<Element>("#repos-list")!;
const closeT: HTMLCollectionOf<Element> =
  document.getElementsByClassName("close")!;
let todoList: Todo[] = [];
let li: HTMLElement;
let textNode: Text;

todoList = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos")!)
  : todoList;

console.log(todoList);
  
  
const addTodo = (e: Event) => {
  e.preventDefault();
  const newTodo: Todo = {
    id:todoList.length > 0 ? Math.max(...todoList.map(todo => todo.id)) + 1 : 1,
    todo: input.value,
    isdone: false,
  };
  if (newTodo.todo === "") {
    alert("You must add a new todo!");
    return;
  } else {
    todoList = [...todoList, newTodo];
    localStorage.setItem("todos", JSON.stringify(todoList));
    input.value = "";
      input.focus();
      renderdata();
  }
  console.log(newTodo);
};

const renderdata = () => {
  ul.innerHTML = "";
  todoList.forEach((elem) => {
      li = document.createElement("li");
    //   li.addEventListener('click', handleDone)
    textNode = document.createTextNode(elem.todo);

    if (elem.isdone == true) {
      li.classList.add("checked");
    }
    li.addEventListener('click', (e)=>handleDone(e, elem.id))
    li.appendChild(textNode);
    ul.appendChild(li); //span start

    let span = document.createElement("SPAN");
    span.setAttribute('id', elem.id.toString());
    span.className = "close";
    span.addEventListener("click", ()=>handleDeleteTodo(elem.id));
    li.appendChild(span); //span ends
  });
};

const handleDone = (e:Event, id:number) => {
    e.preventDefault();
    let index: number = todoList.findIndex(item => item.id == id)    
    todoList[index] = { ...todoList[index], isdone: !todoList[index].isdone }
    localStorage.setItem("todos", JSON.stringify(todoList));
    renderdata();
    
}
const handleDeleteTodo = (id: number) => {

  // todoList.splice(
  //   id - 1,
  //   1
  // );
  todoList = todoList.filter((todo) => todo.id !== id);
  ul.innerHTML = "";
  localStorage.setItem("todos", JSON.stringify(todoList));
  renderdata();
};

if (todoList.length > 0) {
    renderdata()
}




btn.addEventListener("click", addTodo);
