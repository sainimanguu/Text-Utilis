import React from 'react'
import { useState } from 'react'



function TextForm(props) {
    const [text, setText] = useState('');

    //upper case
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);//this will change the text to upper case
        props.showalert("Converted to UpperCase", "success");
    }

    //handle change
    const handleOnchange = (event) => {//event is a parameter
        console.log("on change");
        setText(event.target.value);
    }

    //lower case
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showalert("Converted to LowerCase", "success");

    }
    const handleclearClick = () => {
        let newtext = "";//this will clear the text
        setText(newtext);
        props.showalert("Text Cleared", "success");

    }


    return (
        <>
            <div>
                <label for="exampleFormControlTextarea1" className="form-label mt-2 text-bg-dark rounded-2"><h3>Enter text here!!</h3></label>
                <textarea className="form-control" value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="10"></textarea>
                <button className="btn btn-primary " onClick={handleUpClick}>UpperCase</button>
                <button className="btn btn-primary mx-2 my-2 " onClick={handleLowClick}>LowerCase</button>
                <button className="btn btn-primary mx-1 my-2 " onClick={handleclearClick}>Clear Text</button>
                <div className="my-1 ">
                    <h1>Your text summary</h1>
                    <p>{text.split(" ").filter((element) => { return element.length != 0 }).length} words and {text.length} characters</p>
                    <p>{0.008 * text.split(" ").filter((element) => { return element.length != 0 }).length} Minutes read</p>
                    <h2>Preview here⬇️</h2>
                    {/* <p>{text}</p> */}
                    <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
                </div>
            </div>

        </>
    )
}

export default TextForm
