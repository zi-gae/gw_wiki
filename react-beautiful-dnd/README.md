# react-beautiful-dnd

    #yarn
    yarn add react-beautiful-dnd

    #npm
    npm install react-beautiful-dnd --save

## `DragDropContext`

DnD 를 구현하기 위해 첫번째(root)로 선언 되야 할 컴포넌트이다. 해당 페이지 전체를 매핑하는 것을 추천한다. `Provider` 컴포넌트와 비슷한 용도라고 생각하면 된다.

#### props 정보

```javascript
class App extends React.Component {
  onDragStart = () => {...}
  onDragEnd = () => {...}

  render() {
    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
      >
        <div>Hello world</div>
      </DragDropContext>
    )
  }
}
```

#### `onDragStart`

이 함수는 드래그를 시작할 때 `return`받을 수 있다.

- `id`: 현재 드래그중인 Draggable의 id.
- `location`: location은 (`droppableId` 와 `index`) Droppable로 시작된 드래그 아이템의 위치

#### `onDragEnd` (required 필수)

이 함수는 반드시 `Draggables` 리스트의 동기 방식으로 재정렬해야 한다.
드래그를 끌냈을때 `return` 받을 수 있다. `onDragStart` 의 `return` 값을 포함하지만 동작 시점이 다르다.

- `draggableId`: 드래그 되었던 Draggable의 id.
- `type`: 드래그 되었던 Draggable의 type.
- `source`: Draggable 이 시작된 위치(location).
- `destination`: Draggable이 끝난 위치(location). 만약에 Draggable이 시작한 위치와 같은 위치로 돌아오면 이 destination값은 null 이 된다.

## `Droppable`

`Draggable`은 반드시 `Droppable`안에 포함되어야 합니다.
`Droppable` 컴포넌트는 `Draggable`에 의해 **dropped** 될 수 있다.

#### Props 정보

- `droppableId`: 필수 DroppableId(string), 애플리케이션에 대한 드랍 가능 여부를 식별하는 유니크 식별자 (수정 x)

- `type`: TypeId(string), Draggable 클래스를 받기 위기 사용 (예를 들어, PERSON을 사용하면 PERSON타입의 Draggable만 드랍) type이 제공되지 않으면 그것은 `DEFAULT`로 설정 현재 `Droppable` 중에 `Draggable`의 `의type`은 반드시 같아야 한다.

- `isDropDisabled`: `Droppable`에 드랍이 허용되는지 제어하는 플래그 입니다. 당신의 조건부 드랍 로직 구현 가능. 기본값은 `false`

## `Droppable`

`Droppable`의 `React` 자식들은 반드시 `ReactElement`를 반환하는 함수여야한다.

```javascript
<Droppable droppableId="droppable-1">
  {(provided, snapshot) => (
    // ...
  )}
</Droppable>
```
