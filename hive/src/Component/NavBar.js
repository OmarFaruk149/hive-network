import React, {useState}  from 'react';

export default function NavBar(props) {
    const handleOnClick = ()=>{
        let newText=val.toUpperCase();
        setter(newText);      
    }
    const handleOnChange = (event)=>{
        setter(event.target.value);      
    }
  const [val,setter]=useState("");
  return (
    <div>
       <h1 className="p-2 m-400 mx-4 rounded-md w-1/4">{props.Heading}</h1>
       <textarea className="p-4 border-1 rounded-xl bg-red-800 mx-4" onChange={handleOnChange} value={val} id="form" cols="60" rows="10"></textarea>
       <div>
            <button className="btn p-3 rounded-lg bg-purple-600 m-4" onClick={handleOnClick}>Capitalize</button>
       </div>
       <div className="m-4 grid grid-cols-1 gap-x-2 gap-y-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
        <div className="bg-purple-500 rounded-lg p-2 text-xs shadow-xl">jani</div>
        <div className="bg-purple-500 rounded-lg p-2 text-xs shadow-xl">notun ki</div>
        <div className="bg-purple-500 rounded-lg p-2 text-xs shadow-xl">notun ki</div>
        <div className="bg-purple-500 rounded-lg p-2 text-xs shadow-xl">notun ki</div>
        <div className="bg-purple-500 rounded-lg p-2 text-xs shadow-xl">notun ki</div>
        <div className="bg-purple-500 rounded-lg p-2 text-xs shadow-xl">notun ki</div>
        <div className="bg-purple-500 rounded-lg p-2 text-xs shadow-xl">notun ki</div>
        <div className="bg-purple-500 rounded-lg p-2 text-xs shadow-xl">notun ki</div>
        <div className="bg-purple-500 rounded-lg p-2 text-xs shadow-xl">notun ki</div>
        <div className="bg-purple-500 rounded-lg p-2 text-xs shadow-xl">notun ki</div>
        <div className="bg-purple-500 rounded-lg p-2 text-xs shadow-xl">notun ki</div>
        <div className="bg-purple-500 rounded-lg p-2 text-xs shadow-xl">notun ki</div>
        <div className="bg-purple-500 rounded-lg p-2 text-xs shadow-xl">notun ki</div>
        <div className="bg-purple-500 rounded-lg p-2 text-xs shadow-xl">notun ki</div>
        <div className="bg-purple-500 rounded-lg p-2 text-xs shadow-xl">notun ki</div>
        <div className="bg-purple-500 rounded-lg p-2 text-xs shadow-xl">notun ki</div>
        <div className="bg-purple-500 rounded-lg p-2 text-xs shadow-xl">notun ki</div>
        <div className="bg-purple-500 rounded-lg p-2 text-xs shadow-xl">notun ki</div>
        <div className="bg-purple-500 rounded-lg p-2 text-xs shadow-xl">notun ki</div>
        <div className="bg-purple-500 rounded-lg p-2 text-xs shadow-xl">notun ki</div>
        <div className="bg-purple-500 rounded-lg p-2 text-xs shadow-xl">notun ki</div>
        <div className="bg-purple-500 rounded-lg p-2 text-xs shadow-xl">notun ki</div>
        <div className="bg-purple-500 rounded-lg p-2 text-xs shadow-xl">notun ki</div>
        <div className="bg-purple-500 rounded-lg p-2 text-xs shadow-xl">notun ki</div>

       </div>
    </div>
  )
}
