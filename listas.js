class List {
  constructor() {
    this.head = null;
    console.log('Se creo una nueva lista', this.head)

  }
  push(data) {
    let node = new Node(data)
    console.log('Se almaceno el nodo', node)
    if (this.head == null) {
      console.log('le asignamos el nodo a la cabezera')
      this.head = node
      console.log(this.head)
    } else {
      this.last.next = node;
      console.log('agregamos el nodo', node, 'a la cabezera', this.last)
    }
    this.last = node
    console.log('apuntamos last al nuevo nodo')
  }
}

myList = new List()
myList.push(8)
