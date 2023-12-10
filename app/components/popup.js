const Popup = (props) => {
  return (props.trigger) ? (
    <div className="fixed top-0 left-0 w-full h-screen bg-black flex items-center justify-center">
        <div className="relative p-8 w-full max-w-2xl">
            <button className="absolute top-4 right-4" onClick={() => props.setTrigger(false)}>X</button>
            {props.children}
        </div>
    </div>
  ) : "";
}

export default Popup;