---
title: React Tips for Beginners
date: "2019-02-18T22:10:36.284Z"
description: A few small pointers that might help you out of tricky situations.
template: blog
featuredImage: ./react-beginner.jpg
---

![An open Macbook sitting on a bench in a park at night.](./react-beginner.jpg)

When I first started with React.js, I had a tendency to get so caught up with the intricacies of its infrastructure that I didn't see the scope for creativity that React offers. I was concerned with using componentDidUpdate the right way, with learning React's logic. I was somewhat paralyzed by the thought that there was a prescribed way of using React, and that I couldn't go on coding until I read all the docs.

To be sure, there are such things as convention and best practice in React. But in the end, React code is JavaScript code, and so there are clever Javascript patterns that you tend to use again and again when building React apps.

Here are a few helpful patterns I've noticed.

## Aux Components

If you've spent a little bit of time using React than you're probably aware of how insistent React is that things be wrapped in `<div>` tags. Often, the `<div>` tags are helpful because they allow you to add classNames to them so that you can position and style them using CSS.

Sometimes, though, you have a certain kind of "container" pattern that emerges. Perhaps you want multiple components to have identical margin values. Or perhaps you simply don't want to confuse yourself by using too many `<div>` tags.

In this case, you can use an auxiliary component.

```JavaSript
    const Aux = (props) => props.children;
    export default Aux
```

And then in some other component, you'd import `Aux` and use it like this:

```JavaScript
    return (
    <Aux classname='aux' >
        <h3>Hello World</h3>
        <p>I am the child of an Aux component.</p>
    </Aux>
    )
```

The `Aux` component returns nothing but its children. This allows you to use it as a kind of "global" container. In your CSS, you can set the margins and padding of your `Aux` class, so that all components that you wrap with it conform to a predictable layout.

## Arrow Functions

When I first learned about event listeners in React, everything was well and good until I ran into a situation where I needed to pass some data into the function I intended the event listener to trigger.

For example, how would the following code dynamically print different messages?

`<button onClick={this.printMessage}/>`

In this scenario, the printMessage method isn't very useful, because, as it's written here, I can't pass any information into it. At best, it only sends one specific message, which I probably had to hard code into the printMessage method.

The solution to this problem was exciting for me, since it showed me that I could do way more with arrow functions than write modern-looking JavaScript.

`<button onClick={() => this.printMessage(message)}/>`

If you tried to pass an argument into printMessage without nesting it inside another function, your program would immediately invoke printMessage every time it ran. This would cause problems, since your program would be likely be wired in such a way that it expected to invoke printMessage only in response to certain user activity.

Instead, we nest the printMessage function within an anonymous function declaration, which is what React expects to see inside of our event listener. Upon the occurrence of the given event, whatever function is defined there will be triggered. In this case, the anonymous function will be triggered, and that function will trigger the printMessage function, which will receive whatever arguments we decide should be passed into it.

This is a pattern that you quickly grow familiar with when using React. Often, you need to pass the event object into the function you're triggering. That's a common thing to do especially when it comes to handling user input.

You might do something like this:

```JavaScript
    class SomeComponent extends React.Component {
    state = {
    message: ''
    }
    handleInputChange = (event) => {
    this.setState({
        message: event.target.value
    })
    }


    render() {
    return (
        <input
        name='message'
        value={this.state.message}
        onChange={() => this.handleInputChange(event)}/>
        ...
        )
    }
    }
```

The seemingly circular relationship between `this.state.message` and the input `value={this.state.message}` can be confusing when you first encounter it. All that's happening, though, is that you're using the event object that you get from the input's onChange event listener to set the value of the message property in your state. Then, you're saying to the input element to let its value always be identical to what's in your state. This way, when you have to finally handle the event - if the user clicks a "submit" button, for example - all you have to do to handle that input is to go and get it from this.state.message. It'll be waiting there for you.

You don't have to use an arrow function within event listeners. You can use the old beloved `function()` syntax. But the arrow function is conventional to use within event listeners because of its brevity and clarity.

## Computed Values

Having access to the event object in your event handlers makes it somewhat easy to handle form data. You can use computed values on event.target to dynamically set the state held by any property in this.state that shares a name with the name property of its corresponding input.
This is better illustrated.

Say you had a state object that looked like this.

```JavaScript
    state = {
    catName: '',
    sharkName: '',
    deerName: ''
    }
```

And then say you had input elements that looked like this:

```JavaScript
    <label>Name your pet cat: </label>
    <input
    name='catName'
    value={this.state.message}
    onChange={() => this.handleInputChange(event)}/>

    <label>Name your pet shark: </label>
    <input
    name='sharkName'
    value={this.state.message}
    onChange={() => this.handleInputChange(event)}/>

    <label>Name your pet deer: </label>
    <input
    name='deerName'
    value={this.state.message}
    onChange={() => this.handleInputChange(event)}/>
```

Since the name properties on your input elements are the same as the names of the properties that hold them in state, you can use the very same setState method to handle the change that happens in any and all of these input fields. Like so:

```JavaScript
    handleInputChange = (event) => {
    this.setState({
    [event.target.name] = event.target.value
    })
    }
```

Since property names within brackets get evaluated, not read literally, you can simply reference the name property on event.target. And if the name value there is identical to the name of the property your trying to update on state, then you can let the computer do the work of getting the name of the event target and sending the user's input to the appropriate place.

## Map

Sometimes you have an array full of data that you want to transform into a list of JSX elements. For that we have our old friend `Array.prototype.map()`.

Say we have a collection of cat objects and we want to render out a block of information about each one of them, one after the other. We can use map for that.

```JavaScript
    render() {
    const catInfo = [littleRoundHead, glover, bigPurr].map(cat => (
    <div>
        <h3>{cat.name}</h3>
        <img src={cat.photoUrl} alt='cat' >
        <p>{cat.bio}</p>
    </div>
    )
    ...
```

The cool thing about building arrays of JSX elements like this, using map, is that you don't have to do anything special to it in order to use it in your JSX. If you want to render out the elements in this array, all you have to do is insert the catInfo variable into the JSX you're outputting in your return statement. React will unpack your elements from the array and render them out for you.

```JavaScript
...
return (
  <div>
    {catInfo}
  </div>
)
```

`map` is a very versatile tool in React. You can use it to build arrays of JSX elements even when you don't have any elements to transform into JSX.

For example, say you want to build a `<select>` element so that a user purchasing an item can choose a quantity from a list of dropdown options. There's likely no array of numbers that you can use to transform into an array of `<option>` elements. But since you probably know how many different quantity options you want to render out, you can build an array containing the appropriate number of placeholders and transform that array into an array of `<option>` elements.

```JavaScript
const quantityOptions = new Array(product.quantity)
quantityOptions.fill('_')
const options = quantityOptions.map((option, i) => (
  <option key={i} value={`${i + 1}`}>
    {i + 1}
  </option>
))
```

How cool is that?

## Ternary Expressions

What would a discussion about JavaScript React tips be without the ternary expression?
Like arrow functions, ternary expressions are one of those JavaScript tactics that make you feel like a boss when you use them. They're the coding equivalent of a mic drop. Fortunately, they're also useful, especially in React.

Sometimes React renders out your JSX before your data can catch up with the component rendering it. In that case, you might get an error, or a screen displaying very little of what you thought it would display.

For instance, if you're fetching a list of songs from a database and then rendering out your favorite playlist, your playlist might try to render out before your songs get there.
In a case like this, you can use the ternary expression to tell your component to only render out the playlist if the data is present.

```JavaScript
...
return this.state.songs.length ? (
    <div>
      <ol>
        {this.state.songs.map(song => (
          <li>{song.title}</li>
         ))}
      </ol>
    </div>


  ) : null
...
```

In the above scenario, which reflects a common one, when the songs are fetched, they're being stored in `this.state.songs` - an array. And in the code, we're saying that if the this.state.songs array has length - if the data has made it there - then render out the JSX. If not, render out nothing.

If you try to render out the songs before they get there, you'll get an error that tells you something like `song.title` doesn't exist. And then, when the song data does show up, it won't be able to render out, because your program has already broken.

It might seem like rendering out null is a silly thing to do, but remember that the nature of React is to react to changes in props and state. Therefore, once the song data gets there and updates your local state, React will re-render your component's JSX, which will now have access to the data it needs. In the meantime, your ternary expression is preventing your component from trying to act upon information it doesn't have.

This process happens lightning fast, of course, so it's often hard to notice that your component is waiting for the data to get there before rendering some or all of its returned elements.

# Conclusion

If all of this has been obvious, thanks for sticking with me anyway. If you're a React beginner with the same questions that I had about React, then I hope this helped you find some new ways of solving problems.
Happy coding and best of wishes on your React journey.
