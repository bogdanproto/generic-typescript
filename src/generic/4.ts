/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface PageInfo {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<PageInfo> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
