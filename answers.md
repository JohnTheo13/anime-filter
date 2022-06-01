Answers
===

1. The difference is that PureComponent has already implemented shouldComponentUpdate() while in React Component we need to do the props state difference ourselves. PureComponent’s shouldComponentUpdate() only shallowly compares the objects. If these contain complex data structures, it may produce false-negatives for deeper differences. Only extend PureComponent when you expect to have simple props and state
2. Can lead unlimited rerenders: example alter the state that shouldComponentUpdate() relys on through shouldComponentUpdate()'s body
3. React follows one-way data binding meaning from Parent component to child component, so there is no direct way to do that. Alternatives that seem like passing informations to parent component:
   1. Through state managment (contextAPI, redux, etc), Parent is reading information from state while Child is altering these information through some actions
   2. Through a function that is passed from Parent to Child and can alter the Parent's state, similar to my example with the onClick func I pass to the Child
    ```js
      const onclick = (t: string): void => {
        setTitle(t);
        setList({ items: [], error: false });
      };
    ```
    It's changing the state of the Parent through this function
    
    1. Instead of React component we can just use a function that is returning an Object with the information we want to pass to the Parent and the render part of the Child
    ```js
    function useChildComponent () {
        return {
            name: 'One Piece',
            creator: 'Oda',
            render: (
                <div>cool</div>
            )
        }
    }
    const Parent = () => {
        const { name, creator, render} = useChildComponent()
        return (
            </>
                <div>{name}</div>
                <div>{creator}</div>
                {render}
            </>
        )
    }
    ```
4. UseMemo / shouldComponentUpdate
5. ```html
    <>
        <div>something</div>
        <div>else</div>
    </>
   ```
    Since React Component can return a single element with children, fragments are used to reduce the amount of wrappers(divs, etc) in the DOM tree.
6. React.memo / connect (redux) / some costum HOC
    Higher Order Components are used for passing additional properties to the Component they are wrapping
    A usecase would be a dropdown with a HOC that is controling the hover state of the list items
7. 
8. 
9. 
10. Inline styles (old school), csss in js, styled-components, csss modules
11. We can use the dangerouslySetInnerHTML like I did in the list item, but if its coming from an API we should use some kind of sanitizer to prevent scrinpt injection